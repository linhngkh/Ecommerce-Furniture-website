const ProductCard = ({ product }) => {
  return (
    <div className="grid h-[361px] w-[270px] grid-rows-1 drop-shadow-xl">
      <div className="flex items-center justify-center bg-secondary px-5 py-5">
        <img src={product.img} alt={product.name} className="" />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2 bg-white px-8 py-2">
        <h3 className="text-pink">{product.name}</h3>
        <img src={product.color} alt={product.name} />
        <p className="font-sm font-jose text-blue">{product.code}</p>
        <p className="text-sm text-blue">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
