import { Link } from "react-router"
import { Icons } from "../icons"
import { siteConfig } from "@/config/site"

const Footer = () => {
  return (
    <footer className="w-full border-t ">
        <div className="container mx-auto">
            <section className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                <section >
                    <Link to={"/"} className="flex items-center space-x-2">
                        <Icons.logo className="size-6" aria-hidden="true"/>
                         <span className="font-bold">{siteConfig.name}</span>
                         <span className="sr-only">Home</span>
                    </Link>
                </section>
                <section className="">Loop Menu</section>
            </section>
        </div>
    </footer>
  )
}

export default Footer