import { AiFillStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="flex-1/3 paragraph-text space-y-10">
      <div className="space-y-3">
        <h3 className="title-product-option">Product Brand</h3>
        <div className="flex gap-2">
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="scales" className="paragraph-text">
            Coaster Furniture
          </label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="scales" name="fushion" />
          <label htmlFor="scales" className="paragraph-text">
            Fusion Dot High Fashion
          </label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="scales" name="scales" className="" />
          <label htmlFor="scales" className="paragraph-text">
            Unique Furnitture Restor
          </label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="scales" className="paragraph-text">
            Dream Furnitture Flipping
          </label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="scales" className="paragraph-text">
            Young Repurposed
          </label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="scales" className="paragraph-text">
            Green DIY furniture
          </label>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="title-product-option">Discount Offer</h3>
        <p className="paragraph-text">20% Cashback</p>
        <p className="paragraph-text"> 5% Cashback Offer</p>
        <p className="paragraph-text">25% Discount Offer</p>
      </div>

      <div className="space-y-3">
        <h3 className="title-product-option">Rating Items</h3>

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
        <h3 className="title-product-option">Categories</h3>
        <p className="paragraph-text">Prestashop</p>
        <p className="paragraph-text">Magento</p>
        <p className="paragraph-text">Bigcommerce</p>
        <p className="paragraph-text">osCommerce</p>
        <p className="paragraph-text">3dcart</p>
        <p className="paragraph-text">Bags</p>
        <p className="paragraph-text">Accessories</p>
        <p className="paragraph-text">Jewellery</p>
        <p className="paragraph-text">Watches</p>
      </div>

      <div className="space-y-3">
        <h3 className="title-product-option">Price Filters</h3>
        <p className="paragraph-text">$0.00 - $150.00</p>
        <p className="paragraph-text">$150.00 - $350.00</p>
        <p className="paragraph-text">$150.00 - $504.00</p>
        <p className="paragraph-text">$450.00 +</p>

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
        <h3 className="title-product-option">Filter By Color</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full bg-blues"></div>
            <p className="paragraph-text 1">Blue</p>
          </div>
          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full bg-orange-300"></div>
            <p className="paragraph-text ">Orange</p>
          </div>
          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full bg-amber-700"></div>
            <p className="paragraph-text ">Brown</p>
          </div>
          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full bg-green-300"></div>
            <p className="paragraph-text ">Green</p>
          </div>
          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full bg-purple-400"></div>
            <p className="paragraph-text ">Purple</p>
          </div>
          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full bg-sky-400"></div>
            <p className="paragraph-text ">Sky</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
