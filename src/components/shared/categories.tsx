'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { useCategoryStore } from '../../../store/category'

interface Props {
  className?: string
}
const categories = [
  { id: 1, name: "Pizza"},
  { id: 2, name: "Kombo"},
  { id: 3, name: "Nibbles"},
  { id: 4, name: "Cocktails"},
  { id: 5, name: "Coffe"},
  { id: 6, name: "Drinks"},
  { id: 7, name: "Deserts"},
]


export const Categories: React.FC<Props> = ({className}) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl',className)}>
      {
        categories.map(({name, id}, ind) => (
          <a 
            className={cn('flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id && "bg-white shadow-md shadow-gray-200 text-primary")}
            key={ind}
            href={`/#${name}`}
            >
            <button>{name}</button>
          </a>
        ))
      }
    </div>
  )
}

 