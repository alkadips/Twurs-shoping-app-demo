import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Store } from "../utils/Store";
export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  return (
    <>
      <Head>
        <title>{title ? title + " -Twurs" : "Twurs"}</title>
        <meta name="description" content="Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-col justify-between ">
        <header >
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">Twurs</a>
            </Link>
            <Link href="/admin/dashboard">
              <a className="text-lg font-bold">Go To Dashboard</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">
                  <ShoppingCartIcon />
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4 flex-1 overflow-y-auto">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Footer
        </footer>
      </div>
    </>
  );
}
