import { trendings, trendingSmallChairs } from "../../data";
import SharedText from "../shares/SharedText";
import Discount1 from "/assets/discount.png";
import Discount2 from "/assets/discount1.png";

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
        <SharedText>Trending Products</SharedText>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        className="gridColumn-3 drop-shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] md:flex md:flex-row  md:justify-center md:gap-x-4"
      >
        {trendings.map((trending, index) => (
          <motion.div
            variants={childVariant}
            key={index}
            className=" h-[350px] w-[270px] justify-self-center  border-x-8 border-y-8 border-white"
          >
            <div key={trending.index}>
              <img
                src={trending.img}
                alt="chair"
                className="zoom w-full"
                loading="lazy"
              />
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

      {/* 3 divs */}
      <div className=" space-y-10 p-20 md:flex md:flex-row md:justify-center md:gap-x-5">
        {/* first div*/}
        <div className="bg-[#fff8fb] text-blue drop-shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] md:flex  md:w-[30%] md:px-4 md:py-6">
          <div className="p-4 md:flex md:flex-col md:p-4">
            <p className="font-jose text-lg font-semibold">
              23% off in all products
            </p>
            <p className="hover:underline-pink text-sm hover:text-pink hover:underline ">
              Shop now
            </p>

            <img src={Discount2} alt="image" className="w-30" loading="lazy" />
          </div>
        </div>

        {/* second div*/}
        <div className="bg-[#EEEFFB] text-blue drop-shadow-[rgba(7,_65,_210,_0.1)_0px_0px_20px] md:flex md:w-[30%] md:px-4 md:py-6">
          <div className="p-4 md:flex md:flex-col md:p-4">
            <p className="font-jose text-lg font-semibold">
              23% off in all products
            </p>
            <p className="hover:underline-pink text-sm hover:text-pink hover:underline ">
              View Collection
            </p>

            <img src={Discount1} alt="image" loading="lazy" />
          </div>
        </div>

        {/* third div*/}
        <div className=" md:flex md:w-[33,3%]">
          <div className={`${flexCenter} gap-y-4`}>
            {trendingSmallChairs.map((item, _id) => (
              <div className="flex gap-x-4" key={_id}>
                <img
                  src={item.img}
                  alt="chair"
                  className="zoom bg-secondary px-5 py-2"
                  loading="lazy"
                />
                <div
                  className={`${flexCenter} font-jose text-sm font-semibold text-blue`}
                >
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
