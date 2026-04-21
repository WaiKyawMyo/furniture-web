import { Icons } from "@/components/icons";
import { LoginForm } from "@/components/Login-form";
import Banner from "@/data/images/house.webp";
import { Link } from "react-router";
const Login = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to={'/'} className="flex items-center gap-2 font-bold tracking-tight text-foreground/80 text-lg hover:text-foreground">
            <div className="flex size-6 items-center justify-center rounded-md ">
              <Icons.logo className="size-6 mr-2" aria-hidden="true"/>
            </div>
            Furniture Shop
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={Banner}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Login;
