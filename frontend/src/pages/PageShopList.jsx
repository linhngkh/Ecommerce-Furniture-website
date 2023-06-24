import { motion } from "framer-motion";
import SharedBanner from "../shares/SharedBanner";
import SharedTitle from "../shares/SharedTitle";

import { BsGridFill } from "react-icons/bs";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { SlMagnifierAdd } from "react-icons/sl";
import { AiFillStar } from "react-icons/ai";

import { listScenes } from "../../data";

const PageShopList = () => {
  return (
    <section className="md:pt-20">
      {/* banner title */}
      <SharedBanner>Shop List</SharedBanner>
      <div className="flex h-full w-full flex-col items-center justify-center bg-white px-20 md:flex-col md:px-20 ">
        {/* bars */}
        <div className="my-20">
          <div className="flex flex-col justify-between md:flex md:flex-row">
            <SharedTitle />
            <div className="subtext-thin flex flex-wrap gap-y-3 md:flex md:flex-row md:items-end md:justify-end md:gap-5">
              <div className="flex gap-3">
                Per Page:
                <input className="w-20 border-2" />
              </div>
              <div className="flex gap-3">
                Sort By: <select className="w-20 border-2"></select>
              </div>
              <div className="flex items-center justify-center gap-1 md:gap-2">
                View:
                <BsGridFill />
                <MdOutlineFormatListBulleted />
                <input className="w-25 border-2" />
              </div>
            </div>
          </div>
        </div>

        {/* products */}
        <div className="mb-20">
          {listScenes.map((scene) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              key={scene.title}
              className="flex flex-col items-center justify-center gap-7 p-6 md:flex-row"
            >
              <div>
                <img
                  src={scene.image}
                  alt={scene.title}
                  className="w-[300px] object-contain md:w-full"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-center leading-8">
                <h3 className="text-md font-jose font-extrabold text-[#111C85]">
                  {scene.title}
                </h3>
                <div className="md:w-[650px]">
                  <div className="flex gap-3 font-jose">
                    <p className="text-sm font-thin text-[#111C85]">
                      {scene.discount}
                    </p>
                    <p className="text-sm font-thin text-pink line-through ">
                      {scene.price}
                    </p>
                    <div className="flex text-orange-300">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>

                  <p className="font-sm whitespace-normal text-subtext">
                    {scene.desc}
                  </p>
                  <div className="mt-2 flex justify-center gap-8 text-[#111C85] md:justify-start">
                    <span>
                      <BsCart />
                    </span>
                    <span>
                      <AiOutlineHeart />
                    </span>
                    <span>
                      <SlMagnifierAdd />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageShopList;
