"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Star, Check, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import { set, useForm } from "react-hook-form";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, resetCart, setTotalCartItems } from "@/redux/reducers/addProducts";

export default function ProductDetail() {
  const [wishlist, setWishlist] = useState(false);
  const dispatch = useDispatch();
  const { submittedData ,} = useSelector((state) => state.cart);
  const params = useParams();
  const productTitle = params.id;

  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      color: "Black",
      quantity: 0,
    },
  });

  const watchQuantity = watch("quantity");
  const watchColor = watch("color");

  useEffect(()=>{
    setValue("quantity", 0);
    dispatch(resetCart());
  },[watchColor])

  const increaseQuantity = () => {
    const newQuantity = Number(watchQuantity) + 1;
    setValue("quantity", newQuantity);

    const newData = {
      product: "Fullset Black Chair & Sofa",
      price: 120,
      color: watch("color"),
    };

    dispatch(addToCart(newData));
  };

  const decreaseQuantity = () => {
    const newQuantity = watchQuantity > 1 ? Number(watchQuantity) - 1 : 0;
    setValue("quantity", newQuantity);

    dispatch(removeFromCart());
  };

  const toggleWishlist = () => {
    setWishlist(!wishlist);
  };

  const onSubmit = () => {
    dispatch(setTotalCartItems(submittedData.length));
  };


  return (
    <div className="max-w-6xl mx-auto p-4 mt-5 bg-white">
      
      <div className="mb-6 pt-2">
        <Link
          href="/products"
          className="flex items-center text-lg font-medium"
        >
          <ArrowLeft className="mr-2" size={20} />
          Product Detail
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        
        <div className="flex flex-col">
          <div className="mb-4 border rounded-lg overflow-hidden">
            <Image
              src="/images/tshirt.jpg"
              alt="Fullset Black Chair & Sofa"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <Image
                  src="/images/tshirt.jpg"
                  alt={`Thumbnail ${i}`}
                  width={150}
                  height={150}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2 capitalize">{productTitle}</h1>

          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} fill="#FFA500" color="#FFA500" />
              ))}
            </div>
            <span className="text-sm text-gray-600">5.0 (400 Sell)</span>
          </div>

          
          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold mr-2">$120</span>
            <span className="text-gray-500 line-through mr-2">$200</span>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              40% Off
            </span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-2">Color</p>
              <div className="relative">
                <select
                  {...register("color")}
                  className="border rounded-md py-2 px-4 w-full appearance-none"
                >
                  <option value="Black">Black</option>
                  <option value="Gray">Gray</option>
                  <option value="Brown">Brown</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 6L0 0H12L6 6Z" fill="#333333" />
                  </svg>
                </div>
              </div>
            </div>

            
            <div className="mb-6">
              <p className="text-gray-700 mb-2">Quantity</p>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="border rounded-l w-10 h-10 flex items-center justify-center"
                >
                  −
                </button>
                <input
                  type="number"
                  {...register("quantity")}
                  className="border-t border-b h-10 w-14 text-center"
                />
                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="border rounded-r w-10 h-10 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            
            <div className="flex gap-4 mb-8">
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-md flex-1 flex items-center justify-center"
                onClick={()=>dispatch(setTotalCartItems(submittedData.length))}
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
              <button
                type="button"
                onClick={toggleWishlist}
                className="border border-gray-300 px-6 py-3 rounded-md flex items-center justify-center"
              >
                <Heart
                  size={18}
                  fill={wishlist ? "red" : "none"}
                  color={wishlist ? "red" : "currentColor"}
                />
              </button>
            </div>
          </form>

          
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Item Detail</h2>
            <p className="text-gray-600 text-sm mb-4">
              Black sofa fabric made of leather selection from the Himalayan
              mountains. Knitted by the professional hands of housewives. Making
              a masterpiece of the best sofa in the market. Very soft and
              comfortable.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-green-500" />
                <span className="text-sm">High Quality Leather</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-green-500" />
                <span className="text-sm">High Quality Paint</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-green-500" />
                <span className="text-sm">High Quality Wood</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-green-500" />
                <span className="text-sm">Cheap Price</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
