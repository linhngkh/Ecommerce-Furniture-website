import { trendings, trendingSmallChairs } from "../../data";
import Discount1 from "../assets/discount.png";
import Discount2 from "../assets/discount1.png";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Trending = () => {
  const flexCenter = `flex flex-col justify-center`;
  return (
    <section className=" mt-20 w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {" "}
        <h1 className="mb-10 text-center font-jose text-4xl font-bold text-blue">
          Trending Products
        </h1>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        className="flex  flex-row justify-center gap-x-4 drop-shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] "
      >
        {trendings.map((trending, index) => (
          <motion.div
            variants={childVariant}
            key={index}
            className=" h-[350px] w-[270px] border-x-8  border-y-8 border-white"
          >
            <div key={trending.index}>
              <img src={trending.img} alt="chair" className="w-full" />
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
          </motion.div>
        ))}
      </motion.div>

      <div className="p-20">
        <div className="flex flex-1 flex-row justify-center gap-x-5">
          <div className=" flex bg-[#fff8fb] px-4  py-6 text-blue drop-shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px]">
            <div className="">
              <p className="font-jose text-lg font-semibold">
                23% off in all products
              </p>
              <p className="hover:underline-pink text-sm hover:text-pink hover:underline ">
                Shop now
              </p>
            </div>
            <div>
              <img src={Discount2} alt="image" />
            </div>
          </div>

          <div className="flex flex-col bg-[#EEEFFB] px-4 py-6 text-blue drop-shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px]">
            <div className="">
              <p className="font-jose text-lg font-semibold">
                23% off in all products
              </p>
              <p className="hover:underline-pink text-sm hover:text-pink hover:underline ">
                View Collection
              </p>
            </div>
            <div>
              <img src={Discount1} alt="image" />
            </div>
          </div>

          <div className="flex">
            <div className={`${flexCenter} gap-y-4 `}>
              {trendingSmallChairs.map((item, _id) => (
                <div className="flex gap-x-4" key={_id}>
                  <img
                    src={item.img}
                    alt="chair"
                    className="bg-secondary px-5 py-2"
                  />
                  <div
                    className={`${flexCenter} font-jose text-sm font-semibold text-blue`}
                  >
                    {" "}
                    <p>{item.name}</p>
                    <p>{item.price}</p>
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
