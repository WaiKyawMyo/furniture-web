import { Link } from "react-router";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site";
import New_letterform from "../new_letter";

const Fooder = () => {
  return (
    <footer className="w-full border-t ml-4 lg:ml-0">
      <div className="mx-auto  container mt-6 pb-8 lg:py-6">
        <section className="flex flex-col lg:justify-between lg:flex-row gap-10 lg:gap-20">
          <section>
            <Link to={"/"} className="flex items-center space-x-2">
              <Icons.logo aria-hidden="true" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>
          <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
            {siteConfig.footerNav.map((foot) => (
              <div key={foot.title} className="space-y-3">
                <h4 className="">{foot.title}</h4>
                <ul className="">
                  {foot.items.map((item) => (
                    <li key={item.title}>
                      <Link target={item.external? "_blank" :undefined} className="text-muted-foreground hover:text-foreground" to={item.href}>{item.title}
                      <span className="sr-only">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section className="">
            <h4 className=" font-medium">Subscribe to our newsletter</h4>
            <New_letterform/>
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Fooder;
