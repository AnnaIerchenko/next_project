import React from "react";
import { CheckoutItem, CheckoutItemSkeleton, WhiteBlock } from "..";
import { getCartItemDetails } from "@/lib";
import { PizzaSize, PizzaType } from "../../../../constants/pizza";
import { CartStateItem } from "@/lib/get-cart-details";
import { Skeleton } from "@/components/ui";

interface Props {
  items: CartStateItem[];
  onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void;
  removeCartItem: (id: number) => void;
  loading?: boolean;
  className?: string;
}

export const CheckoutCart: React.FC<Props> = ({items, onClickCountButton, removeCartItem, className, loading}) => {
  return (
    <WhiteBlock title="1.Cart" className={className}>
    <div className="flex flex-col gap-5">
      {
        loading && [...Array(4)].map((_, index) => <CheckoutItemSkeleton key={index} />)
      }
      {
        !loading && items.length > 0 && items.map((item) => (     
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