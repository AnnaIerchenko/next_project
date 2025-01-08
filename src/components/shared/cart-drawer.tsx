'use client';
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from ".";
import { getCartItemDetails } from "@/lib";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({children, className}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
        <SheetHeader>
          <SheetTitle>
            In your cart <span className="font-bold">3 items</span>
          </SheetTitle>
        </SheetHeader>

        {/* items */}
        <div className="-mx-6 mt-5 overflow-auto flex-1">
          <div className="mb-2">
            <CartDrawerItem 
              id={1} 
              imageUrl={"https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp"} 
              details={getCartItemDetails(2, 30, [ ])} 
              name={"Choriso fresh"} 
              price={200} 
              quantity={1}          
            />
          </div>
        </div>
        <SheetFooter className="mx-6 bg-white p-8">
          <div className="w-full">

            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Total:
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"/>
              </span>
              <span className="font-bold text-lg">100 $</span>
            </div>

            <Link href="/cart">
              <Button
                type="submit"
                className="w-full h-12 text-base"> 
                Create Order
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}