//redux toolkit

import { motion } from "framer-motion";
import IconButton from "../../shares/IconButton";
import Loader from "../../shares/Loader";
import { BiExpand } from "react-icons/bi";

const ProductsList = ({ data, isLoading, error }) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>An error occurred</p>
      ) : (
        <div className="mt-10  md:mt-20">
          {data?.map((item, _id) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
              key={_id}
              className="flex  md:h-[500px] md:w-full"
            >
              <div className="mb-14  flex items-center justify-center bg-secondary p-4 hover:bg-[#EBF4F3]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="zoom h-[200px] w-[200px]  object-contain md:h-[500px] md:w-full"
                  loading="lazy"
                />
                <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
                  <div className="flex justify-center gap-x-10">
                    <IconButton onClick={() => {}}>
                      <BiExpand className="text-gray-600" />
                    </IconButton>
                  </div>
                </div>
              </div>
              <div className=" ml-10 md:py-5">
                <div className="flex w-[200px] ">
                  <p className="font-jose text-lg font-extrabold text-[#151875]">
                    {item.name}
                  </p>
                </div>

                <div className="flex gap-3 text-center">
                  <p className=" text-md ">{item.discount}</p>
                  <p className="text-sm text-pink line-through">{item.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsList;
