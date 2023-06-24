import { BiSearch } from "react-icons/bi";
import RatingItem from "./RatingItem";
import {
  AccessoriesTitle,
  AccessoriesCategories,
  PriceFilters,
} from "../../data";

const SideBar = () => {
  return (
    <div className="flex-1/3 paragraph-text space-y-10">
      <div className="space-y-3">
        <h3 className="title-product-option">Product Brand</h3>

        {AccessoriesTitle.map((title) => (
          <div className="flex gap-2" key={title.id}>
            <input type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales" className="paragraph-text">
              {title.name}
            </label>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="title-product-option">Discount Offer</h3>

        <div className="flex gap-2">
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="scales" className="paragraph-text">
            5% Cashback Offer
          </label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="scales" className="paragraph-text">
            25% Discount Offer
          </label>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="title-product-option">Rating Items</h3>

        {/* stars */}
        <RatingItem />
      </div>

      <div className="space-y-3">
        <h3 className="title-product-option">Categories</h3>
        {AccessoriesCategories.map((category) => (
          <div className="flex gap-2" key={category.id}>
            <input type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales" className="paragraph-text">
              {category.name}
            </label>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="title-product-option">Price Filters</h3>
        {PriceFilters.map((price) => (
          <div className="flex gap-2" key={price.id}>
            <input type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales" className="paragraph-text">
              {price.name}
            </label>
          </div>
        ))}

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
