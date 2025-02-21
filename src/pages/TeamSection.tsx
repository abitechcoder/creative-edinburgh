import { TeamMember } from '.'
import { smile } from '../assets'

const TeamSection = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Text Content */}
        <div className="max-w-xl">
          <h2 className="text-7xl font-extrabold text-black leading-tight">
            PEOPLE BEHIND <br /> CREATIVE EDINBURGH
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            The work of Creative Edinburgh is supported by a diverse and
            experienced creative team. Each bring to the table their own
            unique expertise to help the community grow and thrive. Thank
            you to all former team and board members, who have been a big
            part of Creative Edinburgh’s journey.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="mt-8 md:mt-0">
          <img
            src={smile}
            alt="Creative Edinburgh Team"
            className="w-64 md:w-80 lg:w-96"
          />
        </div>
      </section>
      <TeamMember />
    </div>
  )
}

export default TeamSection
