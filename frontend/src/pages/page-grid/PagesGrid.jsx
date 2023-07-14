
import { BsGridFill } from "react-icons/bs";

import { MdOutlineFormatListBulleted } from "react-icons/md";



import ProductsGrid from "./ProductsGrid";
import SharedBanner from "../../shares/SharedBanner";
import SharedTitle from "../../shares/SharedTitle";

const PagesGrid = () => {
  return (
    <section className="pt-10 md:pt-20">
      {/* banner title */}
      <SharedBanner>Shop Grid Default</SharedBanner>

      <div className="flex h-full w-full items-center justify-center bg-white px-20 md:px-20 ">
        <div className="my-10 md:my-20">
          {/* search bars */}
          <div className="flex flex-col justify-between md:flex md:flex-row ">
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
          <ProductsGrid />
        </div>
      </div>
    </section>
  );
};

export default PagesGrid;