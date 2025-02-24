import { partners } from "../constant";

const OurPartnerCompany = () => {
  return (
    <section className="py-10 bg-gray-50 flex flex-col items- px-6">
      <h2 className="text-center text-xl font-bold mb-6">OUR PARTNERS</h2>

      {/* First row with 2 images */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 w-full max-w-2xl justify-items-center">
        {partners.slice(0, 2).map((partner, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={partner.src}
              alt={partner.alt}
              width={partner.width}
              height={partner.height}
              className="object-contain w-full"
            />
          </div>
        ))}
      </div>

      {/* Subsequent rows with 4 images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 w-full max-w-5xl justify-items-center mt-6">
        {partners.slice(2).map((partner, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={partner.src}
              alt={partner.alt}
              width={partner.width}
              height={partner.height}
              className="object-contain w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartnerCompany;
