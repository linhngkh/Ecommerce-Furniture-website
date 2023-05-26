import { NavLink } from "react-router-dom";
import { BiPhoneCall, BiSearch } from "react-icons/bi";
import {
  AiOutlineMail,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";

//active classname
const activeClassname = "text-rose-600";
const divStart = `flex justify-start items-center`;
const itemCenter = `flex items-center gap-1`;
const divBetween = `flex justify-between items-center`;

const Header = () => {
  return (
    <section>
      {/* upper header */}
      <div
        className={`${divStart} flex-cols flex w-full bg-violet px-20 text-sm text-white`}
      >
        <div className={` ${divStart} h-10 flex-1 flex-row  gap-3  py-2`}>
          <AiOutlineMail /> hekto@gmail.com
          <BiPhoneCall /> (+358 4170000)
        </div>

        <div className={`${divStart} gap-5`}>
          <div className={`${itemCenter}`}>
            English <FiChevronDown />
          </div>
          <div className={`${itemCenter}`}>
            USD <FiChevronDown />
          </div>
          <div className={`${itemCenter}`}>
            Login <BsPerson />
          </div>
          <div className={`${itemCenter}`}>
            Wishlist <AiOutlineHeart />
          </div>
          <AiOutlineShoppingCart />
        </div>
      </div>
      {/* below header */}
      <div className={` ${divBetween} gap-3  px-20 py-2`}>
        <h1 className="text-2xl font-bold">Hekto</h1>
        <div className="">
          <ul className="flex flex-row gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeClassname : "")}
              >
                <div className={`${itemCenter}`}>
                  Home <FiChevronDown />
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages"
                className={({ isActive }) => (isActive ? activeClassname : "")}
              >
                Pages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? activeClassname : "")}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? activeClassname : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? activeClassname : "")}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? activeClassname : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <input
            type="text"
            placeholder=""
            className="border-2 border-gray-300"
          />
          <button className="bg-pink p-2 text-white">
            <BiSearch />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
