'use client';
import {} from '@/components/ui';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import React from 'react';
import { ChoosePizzaForm, ChooseProductForm } from '..';
import { useRouter } from 'next/navigation';
import { ProductWithRelations } from '../../../../@types/prisma';
import { useCartStore } from '../../../store';
import toast from 'react-hot-toast';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);

  // const onAddProduct = () => {
  //   addCartItem({
  //     productItemId: firstItem.id
  //   })
  // }
  // const onAddPizza = async (productItemId: number, ingredients: number[]) => {
  //   try {
  //     await addCartItem({
  //       productItemId,
  //       ingredients,
  //     })
  //     toast.success('Pizza added to the cart')
  //     router.back()
  //   } catch(err){
  //     toast.error("Cant add pizza to the cart")
  //     console.error(err)
  //   }
  // }
  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;
      await addCartItem({
        productItemId: itemId,
        ingredients,
      });
      toast.success(product.name + 'added to the cart');
      router.back();
    } catch (err) {
      toast.error('Cant add item to the cart');
      console.error(err);
    }
  };
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onSubmit}
            price={firstItem.price}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
