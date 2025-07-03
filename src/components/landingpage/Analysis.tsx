import prisma from "@/lib/prisma";

const Analysis = async () => {
  const businessCount = await prisma.business.count({});

  const sectorCount = await prisma.sector.count({});
  const registeredCount = await prisma.business.count({
    where: { registrationStatus: "Registered" },
  });

  return (
    <div className="bg-[url('/analysis_bg.jpg')] bg-cover bg-bottom relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="px-4 container mx-auto py-12 lg:py-20 grid grid-cols-3 relative z-10">
        <div className="grid place-items-center gap-2 md:gap-4 text-white">
          <h3 className="font-black text-xl md:text-3xl lg:text-6xl">
            {businessCount}+
          </h3>
          <p className="text-xs lg:text-lg text-primary">Businesses</p>
        </div>
        <div className="grid place-items-center gap-2 md:gap-4 text-white">
          <h3 className="font-black text-xl md:text-3xl lg:text-6xl">
            {registeredCount}+
          </h3>
          <p className="text-xs lg:text-lg text-primary">Registered</p>
        </div>
        <div className="grid place-items-center gap-2 md:gap-4 text-white">
          <h3 className="font-black text-xl md:text-3xl lg:text-6xl">
            {sectorCount}+
          </h3>
          <p className="text-xs lg:text-lg text-primary">Sectors</p>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
