import { PeopleNetworking } from "../assets";
import { OurEventProgramme, OurProgrammeCard } from "../components";

function OurProgramme() {
  return (
    <div>
      <OurEventProgramme />
      <OurProgrammeCard
        imageSrc={PeopleNetworking}
        title="Creative Circles"
        description="Creative Circles is Creative Edinburgh’s flagship event. Taking place every month, it provides a relaxed, casual atmosphere for creatives and students to connect, share ideas and advice, meet potential collaborators, and find out what’s on in the city. Join us on your break from work, share ideas and advice, make new connections, and find your next collaborator."
      />
      <OurProgrammeCard
        imageSrc={PeopleNetworking}
        title="Creative Edinburgh Awards"
        description="Since 2012, we've been celebrating the city's creative community at our annual Creative Edinburgh Awards, highlighting the projects, people and places that flourish across Edinburgh and continually ensuring its place on the cultural map, nationally and internationally."
        description2="Combined with our Birthday Bash, every Autumn we get together to don the dancing shoes, raise a glass and cheer on our fellow creatives."
        reverse
      />
      <OurProgrammeCard
        imageSrc={PeopleNetworking}
        title="Creative Sectors"
        description="Creative Sectors is a new series of events to help build connections between Edinburgh’s creative community, organisations and venues based in the city. A partnership between Creative Edinburgh and Business Gateway, we want to bridge divides and boost a stronger network of freelancers and businesses."
      />
      <OurProgrammeCard
        imageSrc={PeopleNetworking}
        title="Creatives with Children"
        description="This event is designed to give parents a more flexible space to network, with their children in tow. It’s also a space for parents or guardians to share and workshop some of the specific challenges that come with freelancing and parenting. "
        reverse
      />

      <OurProgrammeCard
        imageSrc={PeopleNetworking}
        title="FutureGaze"
        description="FutureGaze is a lunchtime series brought to you by Creative Edinburgh, providing time out to reflect and gaze into the future of the creative industries."
        description2="In conversation with Caroline Parkinson, we welcome creative leaders who have innovated and led significant changes in their creative business, artistic or academic practice over the past year to share what the future looks like for them - and for the creative and cultural sector."
        hasToggle
        toggleTitle="The history of FutureGaze: what we've learned"
        toggleContent="Caroline Parkinson, host of FutureGaze and Director for Creative at the Edinburgh Futures Institute, recounts the journey of this initiative and what she hopes to achieve in the future."
        toggleLinkText="Read her guest blog to find out more."
        toggleLinkHref="#"
      />

      <OurProgrammeCard
        imageSrc={PeopleNetworking}
        title="Raise Your Game"
        description="The digital skills programme that focuses on upskilling creative freelancers on digital tools, data and future-proof business models. This course has been developed to provide you with practical guidance and digital skills to support your personal and professional development as you plan for the next step in your career."
        description2="Broken down into three key chapters - Taking Stock. Making Moves. Thinking Forward - Raise Your Game will support you to refocus your career goals, refine your methods and harness the knowledge you need to achieve them."
        reverse
      />
      <OurProgrammeCard
        imageSrc={PeopleNetworking}
        title="Roundtable"
        description="The series aims to create a space to gather around the ‘freelance table’ and discuss challenges faced by creatives and offer a chance to share thoughts, ideas and recommendations. Future topics will include fair work and inclusion."
      />
      <OurProgrammeCard
        imageSrc={PeopleNetworking}
        title="Surgery"
        description="Creative Edinburgh's surgeries advise on core questions for freelancers and small businesses. Tackling topics such as financial management, VAT, legal structures, funding application writing, and more."
        reverse
      />
      <OurProgrammeCard
        imageSrc={PeopleNetworking}
        title="Summer Party"
        description="Every summer we get the creatives in the city together with a rooftop bar, free drinks, pizza and music."
        description2="As freelancers, we often miss out on office parties, so here is an opportunity to mingle and make meaningful connections with new friends in the industry."
      />
      <OurProgrammeCard
        imageSrc={PeopleNetworking}
        title="Talking Heads"
        description="Since launching in Spring 2020, Connected Innovators has funded close to 40 emerging leaders in the creative industries, allowing for time to conduct research & development into new approaches to their work via data and data-driven technologies."
        description2="As their projects near the end of their funding, Talking Heads: Connect + Innovate invites them to promote the work that has taken place, skills and collaborations gained and their plans for the future!"
        reverse
      />
    </div>
  );
}

export default OurProgramme;
