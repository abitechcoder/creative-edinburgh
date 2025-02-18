import { Routes, Route } from "react-router";
import { Homepage, Membership, WhatWeDoPage } from "./pages";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="about-us">
          <Route path="what-we-do" element={<WhatWeDoPage />} />
        </Route>
        <Route path="membership">
          <Route index element={<Membership />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
