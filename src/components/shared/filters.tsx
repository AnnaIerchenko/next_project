'use client'
import React from "react"
import { FilterCheckbox, RangeSlider, Title } from "."
import { Input } from "../ui"
import { CheckboxFiltersGroup } from "./checkbox-filters-group"
import { useFilterIngredients } from "../../../hooks/useFilterIngredients"


interface Props {
  className?: string
}
interface PriceProps {
  priceFrom: number;
  priceTo: number;
}
export const Filters: React.FC<Props> = ({className}) => {
  const {ingredients, loading, onAddId, selectedIds} = useFilterIngredients()
  const [prices, setPrice] = React.useState<PriceProps>({ priceFrom:0, priceTo: 1000})
  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name}))

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    })
  }
  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold"/>
      {/* upper filters */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="option1" text="can create" value="1"/>
        <FilterCheckbox name="option2" text="new" value="2"/>
      </div>
      {/* price's filter */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from ... to</p>
        <div className="flex gap-3 mb-5">
          <Input 
            type="number" 
            placeholder="0" 
            min={0} max={1000} 
            value={String(prices.priceFrom)} 
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}  
          />
          <Input 
            type="number" 
            min={100} 
            max={1000} 
            placeholder="30000" 
            value={String(prices.priceTo)} 
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}    
          />
        </div>
        <RangeSlider min={0} max={1000} step={10} 
          value={[prices.priceFrom, prices.priceTo]} 
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
        />
      </div>

      <CheckboxFiltersGroup 
        title="Ingredients"
        name="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 4)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  )
}