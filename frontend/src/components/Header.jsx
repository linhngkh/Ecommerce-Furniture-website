import { NavLink } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";
import {
  AiOutlineMail,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";

//active classname
const activeClassname = "text-rose-600";

const Header = () => {
  const divCenter = `flex justify-center items-center`;
  const itemCenter = `flex items-center gap-1`;
  return (
    <section className="flex-cols flex ">
      {/* upper header */}
      <div className={`${divCenter} font-sm w-full bg-violet-700 text-white`}>
        <div className={` ${divCenter} flex w-1/3 flex-row gap-3 py-2`}>
          <AiOutlineMail /> linh@gmail.com
          <BiPhoneCall /> (+358 4170000)
        </div>

        <div className={`${divCenter} gap-5`}>
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
      <div className="text-black">
        <h1>Hekto</h1>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeClassname : "")}
            >
              Home
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
    </section>
  );
};

export default Header;
