import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
const prisma = new PrismaClient();

const rawData = fs.readFileSync(path.join(__dirname, "db.json"), "utf-8");
const parsedData = JSON.parse(rawData);
const sectors = parsedData.sectors;
const businesses = parsedData.businesses;

async function main() {
  // for (const s of sectors) {
  //   await prisma.sector.upsert({
  //     where: { name: s.name },
  //     update: {},
  //     create: {
  //       id: s.id, // Optional if your IDs are auto-increment
  //       name: s.name,
  //     },
  //   });
  // }
  // ADMIN
  for (const biz of businesses) {
    const business = await prisma.business.create({
      data: {
        name: biz.name,
        logo: biz.logo,
        ageOfOwner: biz.ageOfOwner,
        genderOfOwner: biz.genderOfOwner,
        businessAddress: biz.businessAddress,
        coreProductOrService: biz.coreProductOrService,
        description: biz.description,
        disabilityInclusion: biz.disabilityInclusion,
        registrationStatus: biz.registrationStatus,
        revenueBracket: biz.revenueBracket,
        yearsInOperation: biz.yearsInOperation,
        sectorId: biz.sector,
      },
    });

    // insert Contact entries
    const cd = biz.contactDetails;
    if (cd?.phone) {
      await prisma.contact.create({
        data: {
          type: "phone",
          value: cd.phone,
          businessId: business.id,
        },
      });
    }
    if (cd?.email) {
      await prisma.contact.create({
        data: {
          type: "email",
          value: cd.email,
          businessId: business.id,
        },
      });
    }

    // insert Workforce entry
    await prisma.workforce.create({
      data: {
        male: biz.workforceGenderDistribution?.male ?? 0,
        female: biz.workforceGenderDistribution?.female ?? 0,
        total: biz.workforceNumber,
        businessId: business.id,
      },
    });

    // insert SocialMedia entries
    for (const [platform, url] of Object.entries(biz.socialMediaLinks || {})) {
      if (url) {
        await prisma.socialMedia.create({
          data: {
            name: platform,
            link: url as string,
            businessId: business.id,
          },
        });
      }
    }

    console.log(`✔️  Seeded: ${business.name}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
