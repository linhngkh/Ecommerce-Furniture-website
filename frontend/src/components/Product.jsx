import { featureProducts, newProducts, offers } from "../../data";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <section className="mx-auto min-h-full w-5/6 py-20">
      <div className="py-20">
        <h1 className="text-center font-jose text-4xl text-blue">
          Featured Products
        </h1>
        {/* featured products */}
        <div className="mt-5 flex  justify-evenly  md:flex">
          {featureProducts.map((product, id) => (
            <ProductCard product={product} key={id} />
          ))}
        </div>
      </div>

      {/* latest products */}
      <div>
        <h1 className="text-center font-jose text-4xl text-blue">
          Latest Products
        </h1>
        <div>
          <ul className=" flex justify-center gap-4 py-5 text-blue ">
            <li className="hover:text-pink hover:underline">New Arrivals</li>
            <li className="hover:text-pink hover:underline">Best Sellers</li>
            <li className="hover:text-pink hover:underline">Featured</li>
            <li className="hover:text-pink hover:underline">Special 0ffers</li>
          </ul>
        </div>
        {newProducts.map((product) => (
          <div key={product.index}>
            {" "}
            <img src={product.img} alt="" />
          </div>
        ))}
      </div>
      <div>
        {offers.map((offer) => (
          <div key={offer.index}>
            {" "}
            <img src={offer.img} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
