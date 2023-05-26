const ProductCard = ({ product }) => {
  return (
    <>
      <div className="drop-shadow-xl ">
        <div className="flex flex-col justify-center bg-secondary object-cover px-5 py-3 text-center  ">
          <img src={product.img} alt={product.name} className="" />
        </div>
        <div className="flex flex-col items-center space-y-2 bg-white px-8 py-2">
          <h3 className="text-pink">{product.name}</h3>
          <img src={product.color} alt={product.name} className="w-10 " />
          <p className="font-sm font-jose text-blue">{product.code}</p>
          <p className="text-sm text-blue">{product.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
