import { Routes, Route } from "react-router";
import { ContactUsPage, Homepage, Membership, WhatWeDoPage, VisionMissionPage } from "./pages";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="about-us">
          <Route path="what-we-do" element={<WhatWeDoPage />} />
          <Route path="values" element={<VisionMissionPage />} />
          <Route path="contact" element={<ContactUsPage />} />
        </Route>
        <Route path="membership">
          <Route index element={<Membership />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
