import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ADMIN
  const business = await prisma.business.create({
    data: {
      name: "Nap's Natural Hair",
      logo: "https://cdn.glitch.global/8eba04eb-779f-4c8b-adcf-48d8c877ce67/naps-natural.png?v=1747974727450",
      ageOfOwner: 32,
      genderOfOwner: "Female",
      businessAddress: "Fourah Bay College Lower Faculty",
      contactDetails: JSON.stringify({
        phone: "076963123",
        email: "ssankoh80@gmail.com",
      }),
      coreProductOrService: "Hair Products (hair butter and hair growth oil)",
      description: `Nap’s Natural Hair is a female-owned startup specializing in processing natural products that help hair grow, glow, and be beautiful. The business is legally registered and operational. As a new entry into the hair product space, the company is looking forward to attracting funding opportunities to scale up and, more importantly, establish itself as a force to be reckoned with. This will help the business develop structures and systems that will help it be sustainable and self-sufficient. It will also help the business create jobs and increase its turnover.`,
      disabilityInclusion: "No",
      registrationStatus: "Registered",
      revenueBracket: "$50,000 - $100,000",
      sector: "4",
      yearsInOperation: 2,
      workforceNumber: 25,
    },
  });
  await prisma.socialMedia.create({
    data: {
      name: "facebook",
      link: "https://www.facebook.com/share/16DwC4LFhr/",
      businessId: business.id,
    },
  });

  console.log("Seeding completed successfully.", business);
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
