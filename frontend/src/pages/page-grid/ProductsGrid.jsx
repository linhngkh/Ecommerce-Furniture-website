//redux toolkit
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Loader from "../../shares/Loader";
import { BsFillCartCheckFill } from "react-icons/bs";
import { addToCart } from "../../slices/cartSlice";

const ProductsGrid = ({ data, isLoading, error }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>An error occurred</p>
      ) : (
        <div className="gridColumn-4 mt-10 md:mt-20">
          {data?.map((product) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
              key={product.id}
              className="h-[390px] w-[240px]"
            >
              <div className="flex items-center justify-center bg-secondary p-4 hover:bg-[#EBF4F3]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="zoom h-48 w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className=" md:py-5">
                <div className="text-center">
                  <p className="text-md font-jose font-extrabold text-[#151875]">
                    {product.name}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-3 text-center">
                  <p className=" text-sm ">€{product.discount}</p>
                  <p className="text-sm text-pink line-through">
                    €{product.price}
                  </p>
                </div>
                <div className="bottom-5 w-full px-6 transition ">
                  <div className="flex justify-center gap-x-6">
                    <button
                      className="flex items-center justify-center rounded-full border bg-white p-2 shadow-md transition hover:scale-110"
                      onClick={() => handleAddToCart(product)}
                    >
                      <BsFillCartCheckFill className="text-gray-600" />
                    </button>
                  </div>
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
