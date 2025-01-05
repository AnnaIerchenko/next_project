import { Ingredient, ProductItem } from "@prisma/client"
import { PizzaSize, PizzaType } from "../../constants/pizza"

/**
 * funtion for counting total amount of pizza
 * 
 * @param type - pasty type of choosen pizza
 * @param size - size of choosen pizza
 * @param items - list of variations
 * @param ingredients - list of ingredients
 * @param selectedIngredients - choosen ingredients
 * 
 * @returns number total amount
 */ 
export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {
  const pizzaPrice = items.find((item) => item.pizzaType === type && item.size === size)?.price || 0
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0)

  return pizzaPrice + totalIngredientsPrice
}