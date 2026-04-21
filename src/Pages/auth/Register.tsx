import { Icons } from "@/components/icons";
import { LoginForm } from "@/components/Register-form";
import { Link } from "react-router";

export default function Register() {
  return (
    <div className="flex place-items-center min-h-screen ">
      <Link
        to={"/"}
        className="fixed left-8 top-6 flex items-center text-lg font-bold tracking-tight text-foreground"
      >
        <Icons.logo className="mr-2 size-6 " aria-hidden="true" />
        <span>Furniture Shop</span>
      </Link>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
