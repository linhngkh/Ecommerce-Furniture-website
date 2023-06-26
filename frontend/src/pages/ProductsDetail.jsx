import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

import SharedBanner from "../shares/SharedBanner";
import Bag1 from "/assets/details/bag-1.png";
import Bag2 from "/assets/details/bag-2.png";
import Bag3 from "/assets/details/bag-3.png";
import Bag4 from "/assets/details/bag-4.png";
const Products = () => {
  return (
    <section className="pt-10 md:pt-20">
      {/* banner title */}
      <SharedBanner>Product Details</SharedBanner>
      {/* product detail */}
      <div className="flex h-full w-full items-center justify-center bg-white px-20 md:px-20">
        <div className="my-20 flex  w-[700px] gap-6 p-3  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] md:w-[1200px]">
          <div className=" flex min-w-[200px] gap-3">
            <div className="flex  flex-col gap-3">
              <div className="">
                <img src={Bag1} alt="bag" className="w-full  object-contain" />
              </div>
              <div>
                <img src={Bag2} alt="bag" className="w-full object-contain" />
              </div>
              <div>
                <img src={Bag3} alt="bag" className="w-full object-contain" />
              </div>
            </div>
            <div>
              <div>
                <img src={Bag4} alt="bag" className="w-full object-contain" />
              </div>
            </div>
          </div>

          <div className=" flex flex-col space-y-2 p-3">
            <h1 className="font-jose text-[30px] font-semibold text-blue">
              Playwood Bag
            </h1>
            <div className="flex items-center text-orange-300">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <p className="text-sm text-black">(22)</p>
            </div>
            <div className="flex gap-2">
              <p className="font-jose text-sm text-blue">€32.00</p>
              <p className="font-jose text-sm text-pink line-through">€62.00</p>
            </div>
            <p className="font-jose text-sm text-blue">Color</p>
            <p className="font-jose text-sm text-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
            <div className="flex justify-center gap-2 text-center">
              <p className="font-jose text-sm text-blue">Add To Cart</p>
              <AiOutlineHeart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
