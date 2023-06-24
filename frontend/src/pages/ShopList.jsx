import SharedBanner from "../shares/SharedBanner";
import SharedTitle from "../shares/SharedTitle";
import { BsGridFill } from "react-icons/bs";
import { MdOutlineFormatListBulleted } from "react-icons/md";


const ShopList = () => {
  return (
    <section className="md:pt-20">
      {/* banner title */}
      <SharedBanner>Shop List</SharedBanner>
      <div className="flex h-full w-full items-center justify-center bg-white px-20 md:px-20 ">
        {/* bars */}
        <div className="my-20">
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
        </div>

        {/* products */}
      </div>
    </section>
  );
};

export default ShopList;
