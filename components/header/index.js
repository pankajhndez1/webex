"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "../button";

const Header = () => {
  const { totalCartItems } = useSelector((state) => state.cart);
  const { data: session } = useSession();

  return (
    <header className="w-full bg-white shadow-sm px-6 py-4  top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href={"/"}>
            <span className="font-bold text-lg text-black">Shop Bag</span>
          </Link>
        </div>
        <div>
          <div className="flex gap-20 justify-center items-center p-1">
            {session ? (
              <Button className="cursor-pointer" onClick={() => signOut()}>sign Out</Button>
            ) : (
              <Button className="cursor-pointer" onClick={() => signIn('github')}>sign In</Button>
            )}
            <div className="hidden md:flex space-x-3 relative">
              <Link
                href={"/users"}
                className="cursor-pointer absolute right-10 hover:font-semibold"
              >
                Users
              </Link>

              <div>
                <Image
                  src={"/images/cart.svg"}
                  alt="cart"
                  height={20}
                  width={20}
                />
              </div>
              <div className="absolute font-bold rounded-full bottom-1.5 left-4 bg-gray-300 text-black w-7 h-7 text-sm flex items-center justify-center ">
                {totalCartItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
