import { teamMembers } from "../constant";

const TeamSection = () => {
  return (
    <section className="container mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="relative w-full h-auto rounded-lg overflow-hidden group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-90 flex flex-col items-start text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-4">
                <h3 className="text-base">
                  Get in touch for enquiries regarding:
                </h3>
                <ul className="text-xs text-start list-none mt-1">
                  {member.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="before:content-['-'] before:mr-1">
                      {responsibility}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-2 underline text-sm"
                >
                  {member.email}
                </a>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-extrabold text-start">
              {member.name}
            </h3>
            <p className="text-gray-600 text-base text-start">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
