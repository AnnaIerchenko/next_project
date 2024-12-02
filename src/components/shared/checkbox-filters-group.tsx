'use client';
import React from 'react'
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui';

type Item = FilterCheckboxProps

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit,
  searchInputPlaceholder="Search...",
  className,
  onChange,
  defaultValue,
}) => {

  const [showAll, setShowAll] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const listProd = showAll 
  ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))
  : defaultItems?.slice(0, limit)
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value) 
  }

  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>
      {showAll && (
      <div className='mb-5'>
        <Input 
          onChange={onChangeSearchInput} 
          placeholder={searchInputPlaceholder} className='bg-gray-50 border-none'/>
      </div>
      )}
      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {listProd.map((item, ind) => (
          <FilterCheckbox 
            key={ind}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={() => console.log('checked')}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
            {showAll ? 'close' : 'show all'}
          </button>
        </div>
      )}
    </div>
  )
}