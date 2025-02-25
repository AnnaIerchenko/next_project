'use client'
import React from "react"
import { RangeSlider, Title } from "."
import { Input } from "../ui"
import { CheckboxFiltersGroup } from "./checkbox-filters-group"
import { useQueryFilters, useFilters , useIngredients  } from "../../../hooks"


interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({className}) => {
  
  const {ingredients, loading} = useIngredients()
  const filters = useFilters()
  useQueryFilters(filters)
  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name}))
  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  }

  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold"/>
      {/* upper filters */}
      <CheckboxFiltersGroup 
        title="Types of pastry"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          {text: 'Slim', value: '1'},
          {text: 'Traditional', value: '2'},
        ]}
      />
      <CheckboxFiltersGroup 
        title="Sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          {text: '20sm', value: '20'},
          {text: '30sm', value: '30'},
          {text: '40sm', value: '40'},
        ]}
      />
      {/* price's filter */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from ... to</p>
        <div className="flex gap-3 mb-5">
          <Input 
            type="number" 
            placeholder="0" 
            min={0} max={1000} 
            value={String(filters.prices.priceFrom)} 
            onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}  
          />
          <Input 
            type="number" 
            min={100} 
            max={1000} 
            placeholder="30000" 
            value={String(filters.prices.priceTo)} 
            onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}    
          />
        </div>
        <RangeSlider min={0} max={1000} step={10} 
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]} 
          onValueChange={updatePrices}
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
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  )
}