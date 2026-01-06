import { siteConfig } from "@/config/site"
import MainNavigation from "./MainNavigation"
import MobileNavigation from "./MobileNavigation"
import { ModeToggle } from "../mode-toggle"

const Header = () => {
  return (
    <header className=" fixed z-50 w-full border-b bg-background">
        <nav className=" container flex items-center h-16 mx-auto">
            <MainNavigation items={siteConfig.mainNav}/>
            <MobileNavigation items={siteConfig.mainNav}/>
            <div className="flex flex-1 items-center justify-end space-x-4 mr-8 lg:mr-0">
              <ModeToggle/>
            </div>
            
        </nav>
    </header>
  )
}

export default Header