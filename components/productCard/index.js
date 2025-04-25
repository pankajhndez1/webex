const ProductCard = ({ product }) => {
    
    const { title, description, files } = product;
    
    const imagePreview = files && files[0]?.preview;
  
    return (
      <div className=" bg-white shadow-md rounded-lg overflow-hidden">
        <div >
          {imagePreview && <img src={imagePreview} alt={title} className="w-full h-64 object-cover" />}
        </div>
        <div className=" p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-700 mt-2">{description}</p>
        </div>
      </div>
    );
  };

  export default  ProductCard