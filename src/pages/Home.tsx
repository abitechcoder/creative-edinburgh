import { PeopleNetworking } from "../assets";
import { Hero, MeetMember } from "../components";

const Home = () => {
  return (
    <div>
      <Hero/>
      <section className="bg-primary">
        <div className="container mx-auto px-6 pt-16">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">
                CREATE.<br />
                CONNECT.<br />
                CHANGE.
              </h2>
              <p className="text-lg max-w-md">
                Are you part of the creative industries in Edinburgh? Find out more about how we can support you in your journey.
              </p>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="relative space-y-4">
          <img
            src={PeopleNetworking}
            alt="People networking"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>
      <MeetMember />
    </div>
  );
};

export default Home;
