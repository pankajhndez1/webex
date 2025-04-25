"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/productCard";
import Image from "next/image";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 md:px-10 lg:px-20 py-5 md:py-10 lg:py-20">
      {products?.length > 0 ? (
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      ) : (
        <div className="flex justify-center items-center space-x-5 whitespace-nowrap h-96">
          <div className="text-2xl font-semibold "><h1>Please add items !!</h1></div>
       
        </div>
      )}
    </div>
  );
};

export default Products;
