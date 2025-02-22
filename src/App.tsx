import { Routes, Route } from "react-router-dom";
import {
  BookTicket,
  CodeOfConductPage,
  ContactUs,
  ErrorPage,
  Homepage,
  MemberDetails,
  Membership,
  MembersLibrary,
  OurProgramme,
  OurTeam,
  VisionMissionPage,
  WhatWeDoPage,
} from "./pages";
import RootLayout from "./layouts/RootLayout";
import { Mentoring } from "./assets";
import { TeamSection } from "./components";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="about-us">
          <Route path="what-we-do" element={<WhatWeDoPage />} />

          <Route path="team" element={<OurTeam />} />

          <Route path="our-team" element={<TeamSection />} />

          <Route path="vision-and-mission" element={<VisionMissionPage />} />
          <Route path="code-of-conduct" element={<CodeOfConductPage />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
        <Route path="membership">
          <Route index element={<Membership />} />
          <Route path="members-library" element={<MembersLibrary />} />
          <Route path=":id" element={<MemberDetails />} />
        </Route>
        <Route path="mentoring" element={<Mentoring />} />
        <Route path="events">
          <Route path="book-tickets" element={<BookTicket />} />
          <Route path="our-programme" element={<OurProgramme />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />{" "}
      </Route>
    </Routes>
  );
}

export default App;
