import { PeopleNetworking } from "../assets";

const sponsors = [
  { name: "Creative Informatics", src: PeopleNetworking },
  { name: "CodeBase", src: PeopleNetworking },
  { name: "Eagle Labs", src: PeopleNetworking },
  { name: "UserTesting", src: PeopleNetworking },
  { name: "Barney's Beer", src: PeopleNetworking },
  { name: "Johnnie Walker", src: PeopleNetworking },
  { name: "Bellfield Brewery", src: PeopleNetworking },
  { name: "ACTiPH", src: PeopleNetworking },
];

const PreviousSponsor = () => {
  return (
    <section className="py-28 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-bold uppercase text-black mb-8">
          Previous Sponsors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 w-full max-w-5xl mx-auto justify-center mt-6">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={sponsor.src}
                alt={sponsor.name}
                className="object-contain "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousSponsor;
