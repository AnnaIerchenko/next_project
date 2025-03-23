'use client'
import { cn } from '@/lib/utils';
import React from 'react'
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { User } from 'lucide-react';
import Link from 'next/link';
import { CartButton, SearchInput } from '.';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';


interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string; 
}

export const Header: React.FC<Props> = ({hasSearch = true, hasCart = true, className}) => {
  const searchParams = useSearchParams()
  React.useEffect(() => {
    console.log(searchParams.has('paid'), 555)
    if(searchParams.has('paid')){
      setTimeout(() => {
        toast.success('You successfully make payment for your order!')
      }, 500)
    }
  }, [])
  return (
    <header className={cn('border-b',className)}>
      <Container className='flex items-center justify-between py-8'>
        {/* left side */}
        <Link href="/">    
          <div className='flex items-center gap-4'>
          <Image src="/logo.png" alt="logo" width={35} height={35}/>
          <div>
            <h1 className='text-2xl uppercase font-bold'>Next Food</h1>
            <p className='text-sm text-gray-400 leading-3'>the best taste</p>
          </div>
          </div>
        </Link>

        {hasSearch && <div className='mx-10 flex-1'>
          <SearchInput />
        </div>}
        {/* right side */}
        <div className='flex items-center gap-4'>
          <Button variant={'outline'} className='flex items-center gap-1'>
            <User size={16}/>
            Log in
          </Button>

          {hasCart && <CartButton /> }
          
        </div>
      </Container>
    </header>
  )
}

