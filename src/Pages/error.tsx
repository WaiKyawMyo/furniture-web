import { Icons } from "@/components/icons";
import Fooder from "@/components/layouts/Fooder";
import Header from "@/components/layouts/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";

const error = () => {
  return (
    <div className=" min-h-screen overflow-hidden">
      <Header />
      <main className="flex justify-center h-100 items-center mt-16 my-32">
        <Card className="w-[300px] md:w-[500px] lg:w-[500px]">
          <CardHeader className=" place-items-center gap-2">
            <div className="border-2 border-dashed border-muted-foreground/70 rounded-full size-24 mt-2 mb-4">
              <Icons.ExclamationTriangleIcon
                className="size-10 text-muted-foreground/70 m-auto h-full"
                aria-hidden="true"
              />
            </div>
            <CardTitle>Oops!</CardTitle>
            <CardDescription>An error occurs accedently.</CardDescription>
            <CardAction></CardAction>
          </CardHeader>

          <CardFooter className="flex-col gap-2">
            <Button className="">
              <Link to={"/"}>Go to Home Page</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Fooder />
    </div>
  );
};

export default error;
