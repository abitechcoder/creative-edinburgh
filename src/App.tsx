import { Routes, Route } from "react-router"
import { Homepage, WhatWeDo, Membership } from "./pages"
import RootLayout from "./layouts/RootLayout"

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />} >
        <Route index element={<Homepage />} />
        <Route path="about-us">
          <Route path="what-we-do" element={<WhatWeDo />} />
        </Route>
        <Route path="membership">
          <Route index element={<Membership />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
