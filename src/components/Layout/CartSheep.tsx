import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Icons } from "../icons";
import { cartItems } from "@/data/carts";
import { Link } from "react-router";
import { ScrollArea } from "@/components/ui/scroll-area";
import CartItems from "../carts/CartItems";
import { formatPrices } from "@/lib/utils";

const CartSheep = () => {
  const itemCount = 4;
  const amountTotal = 190;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className=" relative" aria-label="Open Cart">
          <Badge
            variant={"destructive"}
            className=" absolute -right-2 -top-2 size-6 justify-center rounded-full p-2.5 bg-red-600 text-white"
          >
            {itemCount}
          </Badge>
          <Icons.Cart className="size-4" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent className=" min-w-full md:min-w-lg p-6">
        <SheetHeader className="">
          <SheetTitle>Cart - {itemCount}</SheetTitle>
        </SheetHeader>
        <Separator className="mb-2" />
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="my-4  h-[70vh] pb-8 ">
              {cartItems.map((item) => (
                <CartItems cart={item}></CartItems>
              ))}
            </ScrollArea>

            <div className="space-y-4">
              <Separator />
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="">Shipping</span>
                  <span className="">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="">Texes</span>
                  <span className="">Calculate at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="">Total</span>
                  <span className="">{formatPrices(Number(amountTotal))}</span>
                </div>
              </div>
              <SheetFooter>
                <Button asChild type="submit" className="w-full" aria-label="Checkout">
                  <Link to="/checkout">Containue to Checkout</Link>
                </Button>
                {/* <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose> */}
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center space-y-1">
            <Icons.Cart className="size-12 mb-4 text-muted-foreground" />
            <div className="font-medium text-muted-foreground">
              Your Cart is empty
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheep;
