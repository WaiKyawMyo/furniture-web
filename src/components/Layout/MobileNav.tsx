import type { MainNavItem } from "@/types";
import { Link } from "react-router";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site";

interface MainnavigationProps {
  items?: MainNavItem[];
}
const MobileNav = ({items}: MainnavigationProps) => {
  return <div>MobileNav</div>;
};

export default MobileNav;
