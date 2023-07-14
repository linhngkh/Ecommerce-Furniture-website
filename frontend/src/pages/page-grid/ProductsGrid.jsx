//redux toolkit

import { motion } from "framer-motion";
import IconButton from "../../shares/IconButton";
import Loader from "../../shares/Loader";
import { BiExpand } from "react-icons/bi";
import { useGetAllProductsQuery } from "../../slices/producstApi";

const ProductsGrid = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>An error occurred</p>
      ) : (
        <div className="gridColumn-4 mt-10 md:mt-20">
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
              className="h-[390px] w-[240px]"
            >
              <div className="flex items-center justify-center bg-secondary p-4 hover:bg-[#EBF4F3]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="zoom h-48 w-full object-contain"
                  loading="lazy"
                />
                <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
                  <div className="flex justify-center gap-x-6">
                    <IconButton onClick={() => {}}>
                      <BiExpand className="text-gray-600" />
                    </IconButton>
                  </div>
                </div>
              </div>
              <div className=" md:py-5">
                <div className="text-center">
                  <p className="text-md font-jose font-extrabold text-[#151875]">
                    {item.name}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-3 text-center">
                  <p className=" text-sm ">{item.discount}</p>
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

export default ProductsGrid;