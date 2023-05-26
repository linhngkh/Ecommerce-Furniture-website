import { featureProducts, newProducts, offers } from "../../data";

const items = ["New Arrivals", "Best Sellers", "Featured", "Special 0ffers"];
const grid = `grid grid-rows-1`;
const flexCenter = `flex items-center justify-center`;

const Product = () => {
  return (
    <section className="mx-auto min-h-full w-5/6 py-20">
      <div className="py-20">
        <h1 className="text-center font-jose text-4xl font-bold text-blue">
          Featured Products
        </h1>
        {/* featured products */}
        <div className="mt-10 flex  justify-evenly  md:flex">
          {featureProducts.map((product, id) => (
            <div
              className={`${grid} h-[361px] w-[270px] drop-shadow-xl`}
              key={id}
            >
              <div className={`${flexCenter} bg-secondary px-5 py-5`}>
                <img src={product.img} alt={product.name} className="" />
              </div>
              <div
                className={`${flexCenter} flex-col gap-y-2 bg-white px-8 py-2`}
              >
                <h3 className="text-pink">{product.name}</h3>
                <img src={product.color} alt={product.name} />
                <p className="font-sm font-jose text-blue">{product.code}</p>
                <p className="text-sm text-blue">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* latest products */}
      <div>
        <h1 className="text-center font-jose text-4xl font-bold text-blue">
          Latest Products
        </h1>
        <div>
          <ul className=" flex justify-center gap-4 py-5 text-blue ">
            {items.map((item, index) => (
              <li className="hover:text-pink hover:underline" key={index}>
                {" "}
                {item}
              </li>
            ))}
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
