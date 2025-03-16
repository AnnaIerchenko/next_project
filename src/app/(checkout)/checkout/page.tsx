'use client'
import { CheckoutAddressInfo, CheckoutCart, CheckoutPersonalInfo, CheckoutSidebar, Container, Title} from "@/components/shared";
import { useCart } from "../../../../hooks";
import { FormProvider, SubmitHandler, useForm} from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod'
import { CheckoutFormValues, checkoutFormSchema } from "@/components/shared/checkout/checkout-form-schema";

export default function ChackoutPage(){
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading} = useCart()
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    }
  })
  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data)
  }
  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title text="Create order" className="font-extrabold mb-8 text-[36px]"/>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/* left side */}
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart 
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                items={items}
                loading={loading}
              />
              <CheckoutPersonalInfo className={loading ? "opacity-40 pointer-events-none": ''}/>
              <CheckoutAddressInfo className={loading ? "opacity-40 pointer-events-none": ''}/>
            </div>
            {/* right side */}
            <div className="w-[400px]">
                <CheckoutSidebar totalAmount={totalAmount} loading={loading}/>
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  )
}