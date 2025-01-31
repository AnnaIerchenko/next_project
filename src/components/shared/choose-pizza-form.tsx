'use client'
import { cn } from "@/lib/utils";
import React from "react";
import { GroupVariants, IngredientItem, ProductImage, Title } from ".";
import { Button } from "../ui";
import { PizzaSize, PizzaType, pizzaTypes } from "../../../constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";

import { getPizzaDetails } from "@/lib";
import { usePizzaOptions } from "../../../hooks";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  loading?: boolean;
  items: ProductItem[];
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({imageUrl, name, ingredients, items, loading, onSubmit, className}) => {
  const {size, type, selectedIngredients,availableSizes, currentItemId, setSize, setType, addIngredient} = usePizzaOptions(items)

 const {totalPrice, textDetails} = getPizzaDetails(type, size, items, ingredients,selectedIngredients)

  const handleClickAdd = () => {
    if(currentItemId){
    onSubmit(currentItemId, Array.from(selectedIngredients))
    console.log({
      size,
      type,
      ingredients: selectedIngredients,
    })
  }}
 
  // console.log({items,filteredPizzasByType, availablePizzaSizes})

  return (
    <div className={cn(className, 'flex flex-1')}>
      <ProductImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1"/>

        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants 
            items={availableSizes } 
            value={String(size)} 
            onClick={value => setSize(Number(value) as PizzaSize)} 
          />

          <GroupVariants 
            items={pizzaTypes} 
            value={String(type)} 
            onClick={value => setType(Number(value) as PizzaType)} 
          />
        </div>
        {/* {console.log(ingredients)} */}
        <div className="bg-gray-50 p-5 rounded-md h-[300px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem 
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button
          loading={loading} 
          onClick={handleClickAdd} 
          className="h-[56px] px-10 text-base rounded-[18px] w-full mt-10">
          Add to cart for {totalPrice}$
        </Button>
      </div>
    </div>
  )
}