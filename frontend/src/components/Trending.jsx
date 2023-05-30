import { trendings, trendingSmallChairs } from "../../data";
import Discount1 from "../assets/discount.png";
import Discount2 from "../assets/discount1.png";

const Trending = () => {
  return (
    <section className="mb-20 mt-20 w-full ">
      <h1 className="mb-10 text-center font-jose text-4xl font-bold text-blue">
        Trending Products
      </h1>
      <div className="flex  flex-row justify-center drop-shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
        {trendings.map((trending, index) => (
          <div
            key={index}
            className=" h-[340px] w-[270px] border-x-8 border-y-8  border-white"
          >
            <div key={trending.index}>
              <img src={trending.img} alt="chair" />
            </div>

            <div className=" flex flex-col items-center justify-center bg-white px-5 py-3">
              <p>{trending.name}</p>
              <div className="space-x-3">
                <span className="text-sm font-bold text-blueBold">
                  {trending.discount}
                </span>
                <span className="text-sm text-subtext line-through">
                  {trending.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full pt-10">
        <div className="flex flex-1 flex-row justify-evenly gap-x-3">
          <div className="flex flex-col bg-[#fff8fb] px-4 py-6  text-blue">
            <div className="w-full">
              <p className="font-jose text-lg font-semibold">
                23% off in all products
              </p>
              <p className="hover:underline-pink text-sm hover:text-pink hover:underline ">
                Shop now
              </p>
            </div>

            <div className="flex justify-end">
              <img src={Discount2} alt="" />
            </div>
          </div>

          <div className="flex flex-col bg-[#EEEFFB] px-4 py-6 text-blue">
            <div className="w-full">
              <p className="font-jose text-lg font-semibold">
                23% off in all products
              </p>
              <p className="hover:underline-pink text-sm hover:text-pink hover:underline ">
                View Collection
              </p>
            </div>
            <div className="flex justify-end">
              <img src={Discount1} alt="image" />
            </div>
          </div>

          <div className="flex flex-col justify-around ">
            <div className="flex gap-x-4">
              {trendingSmallChairs.map((item) => (
                <div className="flex gap-x-4" key={item.index}>
                  <img
                    src={item.img}
                    alt="chair"
                    className="bg-secondary px-3 py-2"
                  />
                  <div>
                    {" "}
                    <p>Executive Seat chair</p>
                    <p>€32.00</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
