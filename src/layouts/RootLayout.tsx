import { Outlet } from "react-router"
import { Navbar, Footer } from "../components"

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout