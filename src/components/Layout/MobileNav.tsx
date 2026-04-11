import type { MainNavItem } from "@/types";
import { Link } from "react-router";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Sheet,
  SheetClose,
  SheetContent,
  
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";


interface MainnavigationProps {
  items?: MainNavItem[];
}

const MobileNav = ({ items }: MainnavigationProps) => {
  const [isDesktop,setIsDesktop] = useState(false)
  const query = "(min-width: 1024px)"
  
  useEffect(()=>{
    function onchange(event:MediaQueryListEvent){
      setIsDesktop(event.matches)
    }
    const result = matchMedia(query)
    result.addEventListener("change",onchange)
    return ()=>result.removeEventListener("change",onchange)
  },[query])

  if(isDesktop){
    return null;
  }
  return (
    <div className="lg:hidden ">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-4 size-5">
            <Icons.menu aria-hidden="true" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pt-9 pl-4">
          <SheetClose asChild>
            <Link className="flex items-center" to={"/"}>
              <Icons.logo className="size-4" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </SheetClose>
          <ScrollArea className="my-4  h-[calc(100vh-8rem)] pb-8 ">
            <Accordion type="multiple"  className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>{items?.[0].title}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2 pl-2">
                  {items?.[0].card?.map((item)=>(
                  <SheetClose key={item.title} asChild>
                    <Link to={String(item.href)} className="text-foreground/70 ">{item.title}</Link>
                  </SheetClose>
                 ))}
                </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col space-y-2 mt-4">
                 {items?.[0].menu?.map((item)=>(
                  <SheetClose asChild key={item.title}>
                    <Link to={String(item.href)} className="">
                      {item.title}
                    </Link>
                  </SheetClose>
                 ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
