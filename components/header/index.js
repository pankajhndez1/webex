"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "../button";
import { storeUserProducts } from "@/redux/reducers/addProducts";
import { listenToAuthChangesThunk, signInUser, signInWithGoogle, signOutUser } from "@/redux/reducers/auth";

const Header = () => {
  const { totalCartItems, submittedData } = useSelector((state) => state.cart);
  // const { data: session } = useSession();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  console.log(authState,'authState');
  useEffect(() => {
    dispatch(storeUserProducts(submittedData));
  }, [totalCartItems]);
    useEffect(() => {
    dispatch(listenToAuthChangesThunk());
  }, [dispatch]);



  // Example credentials for demo/testing only
  const demoEmail = "demo@email.com";
  const demoPassword = "demopassword";

  return (
    <header className="w-full bg-white shadow-sm px-6 py-4  top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href={"/"}>
            <span className="font-bold text-lg text-black">Shop Bag</span>
          </Link>
        </div>
        <div>
          <div className="flex gap-4 justify-center items-center p-1">
            {/* Redux Auth Buttons */}
            {authState.user ? (
              <>
                <Button className="cursor-pointer" onClick={() => dispatch(signOutUser())}>
                  Sign Out (Redux)
                </Button>
                <span className="ml-2 text-sm text-gray-600">{authState.user.email}</span>
              </>
            ) : (
              <>
                <Button
                  className="cursor-pointer"
                  onClick={() => dispatch(signInUser({ email: demoEmail, password: demoPassword }))}
                >
                  Sign In (Email)
                </Button>
                <Button
                  className="cursor-pointer ml-2"
                  onClick={() => dispatch(signInWithGoogle())}
                >
                  Sign In (Google)
                </Button>
              </>
            )}
            {/* NextAuth Buttons (existing) */}
            {/* {session ? (
              <Button className="cursor-pointer ml-4" onClick={() => signOut()}>
                sign Out (NextAuth)
              </Button>
            ) : (
              <Button
                className="cursor-pointer ml-4"
                onClick={() => signIn("github")}
              >
                sign In (NextAuth)
              </Button>
            )} */}
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
