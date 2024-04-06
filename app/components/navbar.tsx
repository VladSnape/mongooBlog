import { Button } from '@/components/ui/button'
import  ThemeToggle  from './theme-toggle'


import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
<nav className='p-4 w-full flex justify-between mx-auto max-w-screen-xl'>
    <Link href={'/'}>
    <h1 className=' text-2xl font-bold'>Mongoo<span className='text-primary'>blog</span></h1>
    </Link>
<div className='flex gap-3 items-center'>
    <ThemeToggle/>
    <Link href={'/create'}><Button>Create</Button></Link>
    
</div>
</nav>
)
}

export default Navbar