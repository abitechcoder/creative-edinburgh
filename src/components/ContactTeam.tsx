import { teamMembers } from "../constant";

const ContactTeam = () => {
  return (
    <section className="py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="relative w-full h-auto rounded-lg overflow-hidden group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] object-cover object-center transition duration-300 ease-in-out group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-90 flex flex-col items-start text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-8">
                <h3 className="text-lg font-bold">
                  Get in touch for enquiries regarding:
                </h3>
                <ul className="text-lg text-start list-none my-2">
                  {member.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="before:content-['-'] before:mr-1">
                      {responsibility}
                    </li>
                  ))}
                </ul>
                <p className="text-lg">
                  <span className="font-bold">Email:</span>{" "}
                  <a href={`mailto:${member.email}`} className="underline">
                    {member.email}
                  </a>
                </p>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-extrabold text-start uppercase">
              {member.name}
            </h3>
            <p className="text-gray-600 text-base text-start">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactTeam;
