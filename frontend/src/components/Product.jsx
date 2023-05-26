import { featureProducts, latestProducts, offers } from "../../data";

const items = ["New Arrivals", "Best Sellers", "Featured", "Special 0ffers"];
const grid1 = `grid grid-rows-1`;
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
              className={`${grid1} h-[361px] w-[270px] drop-shadow-xl`}
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

        <div className=" mt-10 grid grid-cols-3 grid-rows-2 gap-y-2  ">
          {latestProducts.map((product) => (
            <div key={product.id} className="flex items-center justify-center ">
              <div className={`grid place-items-center bg-secondary`}>
                <img src={product.img} alt={product.name} className="" />
                <div className="flex space-x-2 bg-white py-2">
                  <p className="text-sm text-blue">{product.name}</p>

                  <div className="flex space-x-2 ">
                    <p className="text-sm text-blue ">{product.discount}</p>
                    <p className="text-sm text-red line-through">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* offers */}
      <div className="mt-10">
        <h1 className="text-center font-jose text-4xl font-bold text-blue">
          What Shop Offer!
        </h1>

        <div className="mt-10 flex justify-between">
          {offers.map((offer) => (
            <div
              key={offer.index}
              //   className={`flex h-[320px] w-[270px] flex-col space-x-3 bg-emerald-50 drop-shadow-lg`}
              className={`${grid1} h-[320px] w-[270px] space-x-3  drop-shadow-lg`}
            >
              {" "}
              <div className={`${flexCenter}  px-5 py-5`}>
                <img src={offer.img} alt="image" />
              </div>
              <div
                className={`${flexCenter} flex-col gap-y-2 bg-white px-8 py-2`}
              >
                {" "}
                <p>{offer.name}</p>
                <p>{offer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
