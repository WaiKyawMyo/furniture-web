import type { MainNavItem } from "@/types";
import { Icons } from "../icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Sheet,
  SheetClose,
  SheetContent,
 
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router";
import { useEffect, useState } from "react";

interface MainNavigaiontProps {
  items?: MainNavItem[];
}

const MobileNavigation = ({ items }: MainNavigaiontProps) => {
  const [isDesktop,setIsDesktop]= useState(false)
  const query = "(min-width:1024px)";
  useEffect(()=>{
    function onchange(event:MediaQueryListEvent) {
      setIsDesktop(event.matches)
    }
    const result = matchMedia(query);
    console.log("result:" , result)
    result.addEventListener("change",onchange)

    return ()=> result.removeEventListener("change",onchange)
  },[query])

  if(isDesktop){
    return null;
  }
  return (
    <div className="lg:hidden ">
      <Sheet >
        <SheetTrigger asChild>
          <Button variant="outline" className="ml-4 size-5">
            <Icons.HamburgerMenu aria-hidden="true" />
            <span className="sr-only">Toogle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className=" pt-9">
          <SheetClose asChild>
            <Link to={'/'} className="flex items-center" >
              <Icons.logoMobile />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link> 

          </SheetClose>

          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-8 px-4">
            <Accordion type="multiple"  className="w-full border-b-2">
              <AccordionItem value="item-1">
                <AccordionTrigger>{items?.[0].title}</AccordionTrigger>
                <AccordionContent>
                  {items?.[0].card?.map((item)=>(
                    <SheetClose key={item.title} className="flex mt-2">
                      <Link to={String(item.href)}>{item.title}</Link>
                    </SheetClose>
                  ) )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col space-y-2  mt-4">
                  {items?.[0].menu?.map((item)=>(
                     <SheetClose key={item.title} className="flex ">
                      <Link to={String(item.href)}>{item.title}</Link>
                    </SheetClose>
                  ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
