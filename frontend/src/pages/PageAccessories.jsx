import SharedBanner from "../shares/SharedBanner";
import SharedTitle from "../shares/SharedTitle";
import { BsGridFill } from "react-icons/bs";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
const PageAccessories = () => {
  return (
    <section className="md:pt-20">
      {" "}
      {/* banner title */}
      <SharedBanner>Shop Left Sidebar</SharedBanner>
      <div className="flex h-full w-full items-center justify-center bg-white px-20 md:px-20 ">
        <div className="my-20">
          {/* search bars */}
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

          <div className="mt-20 flex justify-between">
            {/* side bar */}
            <div className="flex-1/3 space-y-10 leading-8">
              <div className="space-y-3">
                <h3 className="text-md font-jose font-bold text-blue underline">
                  Product Brand
                </h3>

                <p className="text-sm text-subtext1">Coaster Furniture</p>
                <p className="text-sm text-subtext1">Fusion Dot High Fashion</p>
                <p className="text-sm text-subtext1">
                  Unique Furnitture Restor
                </p>
                <p className="text-sm text-subtext1">
                  Dream Furnitture Flipping
                </p>
                <p className="text-sm text-subtext1">Young Repurposed</p>
                <p className="text-sm text-subtext1">Green DIY furniture</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-md font-jose font-bold text-blue underline">
                  Discount Offer
                </h3>
                <p className="text-sm text-subtext1">20% Cashback</p>
                <p className="text-sm text-subtext1"> 5% Cashback Offer</p>
                <p className="text-sm text-subtext1">25% Discount Offer</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-md font-jose font-bold text-blue underline">
                  Rating Items
                </h3>

                {/* stars */}
                <div className="flex flex-col space-y-3">
                  <div className="flex space-x-2 text-orange-300">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>

                  <div className="flex space-x-2 text-orange-300">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>

                  <div className="flex space-x-2 text-orange-300">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>

                  <div className="flex space-x-2 text-orange-300">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>

                  <div className="flex space-x-2 text-orange-300">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-md font-jose font-bold text-blue underline">
                    Categories
                  </h3>
                  <p className="text-sm text-subtext1">Prestashop</p>
                  <p className="text-sm text-subtext1">Magento</p>
                  <p className="text-sm text-subtext1">Bigcommerce</p>
                  <p className="text-sm text-subtext1">osCommerce</p>
                  <p className="text-sm text-subtext1">3dcart</p>
                  <p className="text-sm text-subtext1">Bags</p>
                  <p className="text-sm text-subtext1">Accessories</p>
                  <p className="text-sm text-subtext1">Jewellery</p>
                  <p className="text-sm text-subtext1">Watches</p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-md font-jose font-bold text-blue underline">
                    Price Filters
                  </h3>
                  <p className="text-sm text-subtext1">$0.00 - $150.00</p>
                  <p className="text-sm text-subtext1">$150.00 - $350.00</p>
                  <p className="text-sm text-subtext1">$150.00 - $504.00</p>
                  <p className="text-sm text-subtext1">$450.00 +</p>

                  <div className="flex items-center justify-center border-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      className=" border-gray-300 px-3 py-1"
                    />
                    <button className=" p-2 text-subtext">
                      <BiSearch />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-md font-jose font-bold text-blue underline">
                    Filter By Color
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex gap-2">
                      <div className="h-4 w-4 rounded-full bg-blues"></div>
                      <p className="text-sm text-subtext1">Blue</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-4 w-4 rounded-full bg-orange-300"></div>
                      <p className="text-sm text-subtext1">Orange</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-4 w-4 rounded-full bg-amber-700"></div>
                      <p className="text-sm text-subtext1">Brown</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-4 w-4 rounded-full bg-green-300"></div>
                      <p className="text-sm text-subtext1">Green</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-4 w-4 rounded-full bg-purple-400"></div>
                      <p className="text-sm text-subtext1">Purple</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-4 w-4 rounded-full bg-sky-400"></div>
                      <p className="text-sm text-subtext1">Sky</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* products bar */}
            <div className="flex-2/3">b</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageAccessories;
