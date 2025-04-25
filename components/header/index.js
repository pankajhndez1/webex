"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { totalCartItems } = useSelector((state) => state.cart);

  
  return (
    <header className="w-full bg-white shadow-sm px-6 py-4  top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href={"/"}>
            <span className="font-bold text-lg text-black">Shop Bag</span>
          </Link>
        </div>
        {(
          <div className="hidden md:flex space-x-3 relative">
            <div>
              <Image
                src={"/images/cart.svg"}
                alt="cart"
                height={20}
                width={20}
              />
            </div>
            <div className="absolute font-bold rounded-full bottom-1.5 left-2 bg-gray-300 text-black w-7 h-7 text-md flex items-center justify-center z-[-10]">
              {totalCartItems}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
