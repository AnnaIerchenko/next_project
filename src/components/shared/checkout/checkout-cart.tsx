import React from "react";
import { CheckoutItem, WhiteBlock } from "..";
import { getCartItemDetails } from "@/lib";
import { PizzaSize, PizzaType } from "../../../../constants/pizza";
import { CartStateItem } from "@/lib/get-cart-details";

interface Props {
  items: CartStateItem[];
  onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void;
  removeCartItem: (id: number) => void;
  className?: string;
}

export const CheckoutCart: React.FC<Props> = ({items, onClickCountButton, removeCartItem, className}) => {
  return (
    <WhiteBlock title="1.Cart" className={className}>
    <div className="flex flex-col gap-5">
      {
        items.map((item) => (     
        <CheckoutItem 
          id={item.id} 
          imageUrl={item.imageUrl} 
          details={ getCartItemDetails(
            item.ingredients,
            item.pizzaType as PizzaType,
            item.pizzaSize as PizzaSize,
            )} 
          name={item.name} 
          price={item.price} 
          quantity={item.quantity} 
          disabled={item.disabled}
          onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
          onClickRemove={() => removeCartItem(item.id)}
        />
      ))
    }
    </div>
  </WhiteBlock>
  )
}