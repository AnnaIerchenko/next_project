'use client'
import { CheckoutItem, CheckoutItemDetails, CheckoutSidebar, Container, Title, WhiteBlock } from "@/components/shared";
import { Button, Input, Textarea } from "@/components/ui";
import { useCart } from "../../../../hooks";
import { getCartItemDetails } from "@/lib";
import { PizzaSize, PizzaType } from "../../../../constants/pizza";


export default function ChackoutPage(){
  const { totalAmount, updateItemQuantity, items, removeCartItem} = useCart()

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title text="Create order" className="font-extrabold mb-8 text-[36px]"/>
      <div className="flex gap-10">
        {/* left side */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1.Cart">
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
          <WhiteBlock title="2.Personal Info">
            <div className="grid grid-col-2 gap-5">
              <Input name="firstName" className="text-bass" placeholder="Name"/>
              <Input name="lastName" className="text-bass" placeholder="SurName"/>
              <Input name="email" className="text-bass" placeholder="E-mail"/>
              <Input name="phone" className="text-bass" placeholder="Phone"/>
            </div>
          </WhiteBlock>
          <WhiteBlock title="3.Address">
            <div className="flex flex-col gap-5">
              <Input name="address" className="text-bass" placeholder="Your Address"/>
              <Textarea className="text-base" placeholder="Comments to order..." rows={6}/>
            </div>
          </WhiteBlock>
        </div>
        {/* right side */}
        <div className="w-[400px]">
            <CheckoutSidebar totalAmount={totalAmount}/>
        </div>
      </div>
    </Container>
  )
}