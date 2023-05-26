import { featureProducts, newProducts, offers } from "../../data";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <section className="mx-auto min-h-full w-5/6 py-20">
      <h1 className="text-center font-jose text-4xl text-blue">
        Featured Products
      </h1>
      {/* featured products */}
      <div className="m-5 flex  justify-between  md:flex">
        {featureProducts.map((product, id) => (
          <ProductCard product={product} key={id} />
        ))}
      </div>

      {/* latest products */}
      <div>
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
