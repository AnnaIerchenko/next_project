'use client'
import React from "react"
import { FilterCheckbox, RangeSlider, Title } from "."
import { Input } from "../ui"
import { CheckboxFiltersGroup } from "./checkbox-filters-group"
import { useFilterIngredients } from "../../../hooks/useFilterIngredients"


interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({className}) => {
  const {ingredients, loading, onAddId, selectedIds} = useFilterIngredients()
  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name}))

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
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0}/>
          <Input type="number" min={100} max={1000} placeholder="30000"/>
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
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