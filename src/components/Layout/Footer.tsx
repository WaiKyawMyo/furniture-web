import { Link } from "react-router";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site";
import { NewLetterForm } from "../new_lettor";

const Footer = () => {
  return (
    <footer className="w-full border-t ml-4 lg:ml-0">
      <div className="container mx-auto  pb-8 pt-6 lg:py-6">
        <section className="flex flex-col lg:flex-row  gap-10 lg:gap-20">
          <section>
            <Link to={"/"} className="flex items-center space-x-2">
              <Icons.logo className="size-6" aria-hidden="true" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>
          <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
            {siteConfig.footerNav.map((foot) => (
              <div className="space-y-3" key={foot.title}>
                <h4 className="font-medium">{foot.title}</h4>
                <ul className="">
                  {foot.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        className="text-muted-foreground text-sm hover:text-foreground"
                        to={item.href}
                        target={item.external ? "_blank" : undefined}
                      >
                        {item.title}
                        <span className="sr-only">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section className="space-y-3">
            <h4 className="font-medium">Subscribe to our newsltter </h4>
            <NewLetterForm />
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
