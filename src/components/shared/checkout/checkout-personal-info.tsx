import React from "react";
import { FormInput, WhiteBlock } from "..";
import { Input } from "@/components/ui";


interface Props {
  className?: string;
}
export const CheckoutPersonalInfo: React.FC<Props> = ({className}) => {
  return (
    <WhiteBlock title="2.Personal Info" className={className}>
      <div className="grid grid-cols-2 gap-5">
        <FormInput name="firstName" className="text-bass" placeholder="Name"/>
        <FormInput name="lastName" className="text-bass" placeholder="SurName"/>
        <FormInput name="email" className="text-bass" placeholder="E-mail"/>
        <FormInput name="phone" className="text-bass" placeholder="Phone"/>
      </div>
  </WhiteBlock>
  )
}