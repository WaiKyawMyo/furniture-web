import type { UserType } from "@/types";
import { Button } from "../ui/button";
import { Link } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface userProps {
  user: UserType;
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "../icons";
const AuthDropDown = ({ user }: userProps) => {
  const intiialName = `${user.firstName.charAt(0) ?? ""}${user.lastName.charAt(0) ?? ""}`;

  if (!user) {
    return (
      <Button asChild size={"sm"} className="">
        <Link to={"/singin"}> Sign In</Link>
        <span className="sr-only">Sing In</span>
      </Button>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="size-8 rounded-full " variant="secondary">
          <Avatar className="size-8">
            <AvatarImage src={user.imageUrl} alt={intiialName} />
            <AvatarFallback>{intiialName}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-normal " >
            <div className="flex flex-col space-y-1">
              <p className="text-sm text-gray-800 font-bold leading-none">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link to={"#"}>
              <Icons.dashboard className="size-4 mr-2" aria-hidden="true" />
              Dashboard
              <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to={"#"}>
              <Icons.dashboard className="size-4 mr-2" aria-hidden="true" />
              Setting
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to={'login'}>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </Link>
            
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthDropDown;
