import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Layout({title , children}) {
  return (
   <>
   <Head>
    <title>{title ? title + ' -Twurs':"Twurs"}</title>
    <meta name='description' content='Ecommerce websites'/>
    <link rel='icon'href='/favicon.ico'/>
   </Head>
   <div className="flex min-h-screen flex-col justify-between ">
    <header>
        <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
                <a className="text-lg font-bold">Twurs</a>
            </Link>
            <div>Select product
                <select>
                    <option>Laptops</option>
                    <option>Android Phones</option>
                    <option>Guitars</option>

                </select>
            </div>
            <div>
                <Link href='/cart'>
                    <a className='p-2'>
                        <ShoppingCartIcon/>
                    </a>
                </Link>
                <Link href='/login'>
                <a className='p-2'>Login</a>
                </Link>

            </div>
        </nav>
    </header>
    <main className="container m-auto mt-4 px-4">{children}</main>
    <footer className="flex h-10 justify-center items-center shadow-inner">Footer</footer>
   </div>
   </>
  )
}
