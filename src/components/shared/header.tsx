'use client'
import { cn } from '@/lib/utils';
import React from 'react'
import { Container } from './container';
import Image from 'next/image';
import Link from 'next/link';
import { AuthModal, CartButton, ProfileButton, SearchInput } from '.';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string; 
}

export const Header: React.FC<Props> = ({hasSearch = true, hasCart = true, className}) => {
  const router = useRouter()
  const [openAuthModal, setOpenAuthModal] = React.useState(false)
  const searchParams = useSearchParams()

  React.useEffect(() => {
    let toastMessage = ''
    // console.log(searchParams.has('paid'), 555)
    if(searchParams.has('paid')){
      toastMessage = 'Your order is successfully paid! All info already at your email!'}
    if(searchParams.has('verified')){
      toastMessage = 'Your email confirmed!' 
    }
    if(toastMessage){
      setTimeout(() => {
        router.replace('/')
        toast.success(toastMessage, {
          duration: 3000
        })
      }, 1000)
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
          <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)}/>
          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)}/>

          {hasCart && <CartButton /> }
          
        </div>
      </Container>
    </header>
  )
}

