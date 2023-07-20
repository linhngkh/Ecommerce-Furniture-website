import { topCategory } from "../../data";

import Chair from "/assets/chair101.png";
import Banner from "/assets/banner.png";
import Brand from "/assets/brand.png";
import ActionButton from "../shares/ActionButton";

import { BsCheck2 } from "react-icons/bs";
import { motion } from "framer-motion";
import SharedText from "../shares/SharedText";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 },
  },
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const DiscountItem = () => {
  return (
    <section className=" w-full">
      {/* DISCOUNT ITEMS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="text-center font-jose text-4xl font-bold text-blue">
          Discount Item
        </h1>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <ul className=" flex justify-center gap-4 py-4 text-blue ">
          <li className="hover:text-pink hover:underline">Wood Chair</li>
          <li className="hover:text-pink hover:underline">Plastic Chair</li>
          <li className="hover:text-pink hover:underline">Sofa Collection</li>
        </ul>
      </motion.div>

      <div className="items-center md:flex md:flex-row md:px-10">
        {/* FEATURES */}
        <div className=" basis-1/2 space-y-4 pl-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="space-y-4"
          >
            <h1 className="font-jose text-3xl font-bold text-blue">
              20% Discount Of All Products
            </h1>
            <p className="font-jose text-pink">Eams Sofa Compact</p>

            <p className="text-md leading-7 text-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
          </motion.div>

          {/* LISTS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-md flex gap-x-5 leading-7 text-subtext"
          >
            <div>
              <div className="flex flex-row gap-x-1">
                <BsCheck2 size={30} className="text-blue" />
                <p className="text-sm">Material expose like metals</p>
              </div>

              <div className="flex flex-row gap-x-1">
                <BsCheck2 size={30} className="text-blue" />
                <p className="text-sm"> Simple neutral colours.</p>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-x-1">
                <BsCheck2 size={30} className="text-blue" />
                <p className="text-sm">Clear lines and geomatric figures</p>
              </div>

              <div className="gap-x1 flex flex-row gap-x-1">
                <BsCheck2 size={30} className="text-blue" />
                <p className="text-sm"> Material expose like metals</p>
              </div>
            </div>
          </motion.div>
          <Link to="/pages/grid">
            <ActionButton>Shop Now</ActionButton>
          </Link>
        </div>

        {/* IMAGES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="basis-1/2"
        >
          <img src={Chair} alt="chair" />
        </motion.div>
      </div>

      {/* TOP CATEGORIES*/}
      <div className="m-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <SharedText>Top Categories</SharedText>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="gridColumn-3 items-center justify-center gap-7 md:flex md:gap-x-8"
        >
          {topCategory.map((category, _index) => (
            <motion.div variants={childVariant} key={_index}>
              <div className="rounded-full bg-secondary p-7 drop-shadow-[rgba(7,_65,_210,_0.1)_0px_9px_10px] hover:border-8 hover:border-b-violet hover:border-l-violet">
                <img
                  src={category.img}
                  alt="image"
                  className="zoom w-full object-fill"
                  loading="lazy"
                />
              </div>
              <div className=" mt-5 flex flex-col justify-center text-center text-sm text-blueBold">
                <p className="md:text-md text-sm ">{category.name}</p>
                <p className="text-xs md:text-sm">{category.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BANNER*/}
      <div className="relative">
        <img
          src={Banner}
          alt="banner"
          className="w-full object-cover"
          loading="lazy"
        />

        <div className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 transform text-center">
          <h1 className="text-center font-jose text-sm font-bold text-blue md:text-2xl md:leading-10">
            Get Latest Update By Subscribe <br /> 0ur Newslater
          </h1>

          <Link to="/pages/grid">
            <ActionButton>Shop Now</ActionButton>
          </Link>
        </div>
      </div>
      {/* brand */}
      <div className="mt-20  flex justify-center">
        <img src={Brand} alt="brand" loading="lazy" />
      </div>
    </section>
  );
};

export default DiscountItem;
