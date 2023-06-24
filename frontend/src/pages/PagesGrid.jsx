import { pageProducts } from "../../data";
import { BsGridFill } from "react-icons/bs";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import SharedBanner from "../shares/SharedBanner";
import SharedTitle from "../shares/SharedTitle";

import { motion } from "framer-motion";

const PagesGrid = () => {
  return (
    <section className="md:pt-20">
      {/* banner title */}
      <SharedBanner>Shop Grid Default</SharedBanner>

      <div className="flex h-full w-full items-center justify-center bg-white px-20 md:px-20 ">
        <div className="my-20">
          {/* bars */}
          <div className="flex flex-col justify-between md:flex md:flex-row">
            <SharedTitle />
            <div className="subtext-thin flex flex-wrap gap-y-3 md:flex md:flex-row md:items-end md:justify-end md:gap-5">
              <div className="flex  gap-3">
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

          {/* product grid */}
          <div className="grid-column-4 mt-20">
            {pageProducts.map((item) => (
              <div key={item.name} className="h-[390px] w-[240px]">
                <div className="flex items-center justify-center bg-secondary p-4 hover:bg-[#EBF4F3]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-48 w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className=" md:py-5">
                  <div className="text-center">
                    <p className="text-md font-jose font-extrabold text-[#151875]">
                      {item.name}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-3 text-center">
                    <p className=" text-sm ">{item.discount}</p>
                    <p className="text-sm text-pink line-through">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PagesGrid;
