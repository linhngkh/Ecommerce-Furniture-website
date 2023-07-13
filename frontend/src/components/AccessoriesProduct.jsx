import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { accessoriesItems } from "../../data";
import { motion } from "framer-motion";
import { BsCart } from "react-icons/bs";
import { SlMagnifierAdd } from "react-icons/sl";

const AccessoriesProduct = () => {
  return (
    <div className="flex-2/3">
      <div className="mb-20 space-y-7 ">
        {accessoriesItems.map((item) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            key={item.title}
            className="flex flex-col items-center justify-center gap-7  rounded-sm p-6 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] md:flex-row"
          >
            <div className=" w-[300px] rounded-sm">
              <img
                src={item.image}
                alt={item.title}
                className=" zoom object-contain md:w-full"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col justify-center leading-8 ">
              <h3 className="text-md font-jose font-extrabold text-[#111C85]">
                {item.title}
              </h3>
              <div className="md:w-[650px]">
                <div className="flex gap-3 font-jose">
                  <p className="text-sm font-thin text-[#111C85]">
                    {item.discount}
                  </p>
                  <p className="text-sm font-thin text-pink line-through ">
                    {item.price}
                  </p>
                  <div className="flex text-orange-300">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>

                <p className="whitespace-normal text-xs text-subtext md:text-sm">
                  {item.desc}
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
  );
};

export default AccessoriesProduct;
