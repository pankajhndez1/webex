import React from "react";
import buyerImg from "@/public/images/buyer.png";
import sellerImg from "@/public/images/seller.png";
import Image from "next/image";
import { BUYER, SELLER } from "@/utils/constants";
import Link from "next/link";

const ProfileCard = ({ title }) => {
  return (
    <Link href={title === BUYER ? "products" : "/sellProducts"}>
      <div className="relative w-full max-w-xs p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20 text-white transition-transform hover:scale-105 duration-300 cursor-pointer">
        {/* Optional icon or emoji */}
        <div className="text-5xl mb-4">
          {title === BUYER ? (
            <Image height={350} width={350} alt={BUYER} src={buyerImg} />
          ) : (
            <Image height={350} width={350} alt={SELLER} src={sellerImg} />
          )}
        </div>
        <div className=" flex text-xl text-black justify-center font-semibold">
          {" "}
          {title}
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
