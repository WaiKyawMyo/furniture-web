import Header from "@/components/Layout/Header";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import Footer from "@/components/Layout/Footer";
import { Icons } from "@/components/icons";
const Error = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="my-16 mx-auto flex flex-1 items-center">
        <Card className="w-[350px] md:w-[500px]  lg:w-[500px]">
          <CardHeader>
            <div className="border border-dashed border-muted-foreground/70 rounded-full size-24 flex items-center justify-center mx-auto">
              <Icons.Exclamation
                className="size-10 text-muted-foreground/75 "
                aria-hidden="true"
              />
            </div>
            <CardTitle className="text-center">Oops!</CardTitle>
            <CardDescription className="text-center">
              An error occurs accidently.
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex justify-center">
            <Button variant={"outline"} asChild>
              <Link to={"/"}>Go to Home page</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Error;
