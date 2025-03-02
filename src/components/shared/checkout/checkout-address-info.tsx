import React from "react";
import { WhiteBlock } from "..";
import { Input, Textarea } from "@/components/ui";

interface Props {
  className?: string;
}
export const CheckoutAddressInfo: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3.Address">
    <div className="flex flex-col gap-5">
      <Input name="address" className="text-bass" placeholder="Your Address"/>
      <Textarea className="text-base" placeholder="Comments to order..." rows={6}/>
    </div>
  </WhiteBlock>
  )
}