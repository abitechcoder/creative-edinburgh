import { PrismaClient, UserSex } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

// Load JSON data
const rawData = fs.readFileSync(path.join(__dirname, "db.json"), "utf-8");
const parsedData = JSON.parse(rawData);
const businesses = parsedData.businesses;
const sectors = parsedData.sectors;

async function main() {
  for (const s of sectors) {
    await prisma.sector.upsert({
      where: { name: s.name },
      update: {},
      create: {
        id: s.id, // Optional if your IDs are auto-increment
        name: s.name,
      },
    });
  }

  for (const biz of businesses) {
    const {
      name,
      logo,
      ageOfOwner,
      genderOfOwner,
      businessAddress,
      coreProductOrService,
      description,
      disabilityInclusion,
      registrationStatus,
      revenueBracket,
      yearsInOperation,
      contactDetails,
      socialMediaLinks,
      workforceGenderDistribution,
      workforceNumber,
      sector,
    } = biz;

    // Create Business
    const business = await prisma.business.create({
      data: {
        name,
        logo,
        ageOfOwner,
        genderOfOwner: genderOfOwner as UserSex,
        businessAddress,
        coreProductOrService,
        description,
        disabilityInclusion,
        registrationStatus,
        revenueBracket,
        yearsInOperation: new Date(
          new Date().setFullYear(new Date().getFullYear() - yearsInOperation)
        ),
        sector: {
          connect: { id: sector },
        },
        phone: contactDetails?.phone,
        email: contactDetails?.email,
      },
    });

    // Create Workforce
    await prisma.workforce.create({
      data: {
        male: workforceGenderDistribution?.male ?? 0,
        female: workforceGenderDistribution?.female ?? 0,
        total: workforceNumber ?? 0,
        businessId: business.id,
      },
    });

    // Create SocialMedia
    await prisma.socialMedia.create({
      data: {
        businessId: business.id,
        facebook: socialMediaLinks?.facebook || null,
        twitter: socialMediaLinks?.twitter || null,
        instagram: socialMediaLinks?.instagram || null,
        tiktok: socialMediaLinks?.tiktok || null,
        youtube: socialMediaLinks?.youtube || null,
      },
    });

    console.log(`✔️ Seeded: ${business.name}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seeding failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
