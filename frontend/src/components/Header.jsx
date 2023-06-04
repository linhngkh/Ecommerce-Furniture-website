import { NavLink } from "react-router-dom";
import { BiPhoneCall, BiSearch } from "react-icons/bi";
import {
  AiOutlineCloseCircle,
  AiOutlineMail,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
//active classname
const activeClassname = "text-rose-600";
const divStart = `flex justify-start items-center`;
const itemCenter = `flex items-center gap-1`;
const divBetween = `flex justify-between items-center`;

const Header = ({ isTopOfPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBackground = isTopOfPage ? "" : "drop-shadow-md";

  return (
    <nav className="fixed top-0 z-30 w-full">
      {/* upper header */}
      {isAboveMediumScreens ? (
        <div>
          <div
            className={`${divStart} flex-cols   bg-violet px-20 text-sm text-white `}
          >
            <div className={` ${divStart}  h-10 flex-1  flex-row gap-3  py-2`}>
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
          <div className={` ${divBetween}  gap-3 bg-white px-20 py-2`}>
            <h1 className="font-jose text-2xl font-bold">Hekto</h1>
            <div className="">
              <ul className="flex flex-row gap-5">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeClassname : ""
                    }
                  >
                    <div className={`${itemCenter}`}>
                      Home <FiChevronDown />
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pages"
                    className={({ isActive }) =>
                      isActive ? activeClassname : ""
                    }
                  >
                    Pages
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      isActive ? activeClassname : ""
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? activeClassname : ""
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      isActive ? activeClassname : ""
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? activeClassname : ""
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* search bar */}
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="border-2 border-gray-300 px-3 py-1"
              />
              <button className="bg-pink p-2 text-white">
                <BiSearch />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={` ${divBetween}  gap-3 bg-white px-20 py-2`}>
          <h1 className="font-jose text-2xl font-bold">Hekto</h1>
          <button
            className="rounded-full bg-violet p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <GiHamburgerMenu className="h-6 w-6 text-white" />
          </button>
        </div>
      )}

      {/* mobile menu modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 top-0 w-[40%] bg-violet text-white drop-shadow-xl">
          {/* close Button */}
          <div className="flex justify-end px-20 py-4">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              {" "}
              <AiOutlineCloseCircle className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* menu items */}
          <div className="ml-[10%] flex flex-col items-center text-2xl">
            <div>
              {/* below header */}
              <div>
                <div className="">
                  <ul className="flex flex-col gap-5 text-xl">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? activeClassname : ""
                        }
                      >
                        <div className={`${itemCenter}`}>
                          Home <FiChevronDown />
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/pages"
                        className={({ isActive }) =>
                          isActive ? activeClassname : ""
                        }
                      >
                        Pages
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products"
                        className={({ isActive }) =>
                          isActive ? activeClassname : ""
                        }
                      >
                        Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                          isActive ? activeClassname : ""
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                          isActive ? activeClassname : ""
                        }
                      >
                        Shop
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          isActive ? activeClassname : ""
                        }
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
                {/* search bar */}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
