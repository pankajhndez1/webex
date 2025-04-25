import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
    
    const { title, description, files } = product;
    
    const imagePreview = files && files[0]?.preview;
  
    return (
      <div className=" bg-white shadow-md rounded-lg overflow-hidden ">
        <Link href={`/products/${title}`}>
        <div>
          {imagePreview && (
            <Image
              src="/images/tshirt.jpg"
              alt="T-Shirt"
              width={500}
              height={500}  
              className="object-cover"
            />
          )}
        </div>
        <div className=" p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-700 mt-2">{description}</p>
        </div>
        </Link>
      </div>
    );
  };

  export default  ProductCard