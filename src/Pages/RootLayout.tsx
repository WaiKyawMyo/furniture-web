import Fooder from "@/components/layouts/Fooder"
import Header from "@/components/layouts/Header"
import { Outlet } from "react-router"

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
        <Header/>
        <main className="flex-1">
          <Outlet/>
        </main>
        
        <Fooder/>
    </div>
  )
}

export default RootLayout