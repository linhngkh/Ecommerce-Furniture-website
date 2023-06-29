import AccessoriesProduct from "../components/AccessoriesProduct";
import SideBarFilter from "../components/SideBarFilter";
import SharedBanner from "../shares/SharedBanner";
import SharedTitle from "../shares/SharedTitle";
import { BsGridFill } from "react-icons/bs";
import { MdOutlineFormatListBulleted } from "react-icons/md";

import useMediaQuery from "../hooks/useMediaQuery";
import FilterAccessory from "../components/FilterAccessory";

const PageAccessories = () => {
  //custom hook
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section className="pt-10 md:pt-20">
      {/* banner title */}
      <SharedBanner>Shop Left Sidebar</SharedBanner>
      <div className="flex h-full w-full items-center justify-center bg-white px-20 md:px-20 ">
        <div className="my-10 md:my-20">
          {/* search bars */}
          <div className="flex flex-col justify-between md:flex md:flex-row md:px-10">
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

          {/* mbile views */}
          {isAboveMediumScreens ? (
            <div className="mt-20 flex justify-between">
              {/* side bar */}
              <SideBarFilter />
              {/* products bar */}
              <AccessoriesProduct />
            </div>
          ) : (
            <div className="mt-5">
              <FilterAccessory />
              {/* products bar */}
              <AccessoriesProduct />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageAccessories;
