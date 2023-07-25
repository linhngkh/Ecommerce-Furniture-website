import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice.js";

import { NavLink, Link, useNavigate } from "react-router-dom";
//icons
import { BiPhoneCall, BiSearch, BiDownArrow } from "react-icons/bi";
import {
  AiOutlineCloseCircle,
  AiOutlineMail,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

//components
import DropDrownMenu from "../screens/pages/DropDownMenu";
import MenuDropDown from "../screens/company/MenuDropDown";
import useMediaQuery from "../hooks/useMediaQuery";

//active classname
const activeClassName = "text-rose-600";
const divStart = `flex justify-start items-center`;
const itemCenter = `flex items-center gap-1 justify-center`;
const divBetween = `flex justify-between items-center`;

const Header = ({ isTopOfPage }) => {
  //custom hook
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  //state
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  //get userInfo
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logputApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logputApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //style
  const navbarBackground = isTopOfPage ? "" : "drop-shadow bg-white";

  return (
    <nav>
      <div className={`fixed top-0 z-30 w-full`}>
        {/* upper header */}
        {isAboveMediumScreens ? (
          <div>
            <div
              className={`${divStart} flex-cols bg-violet px-20 text-sm text-white `}
            >
              <div
                className={` ${divStart}  h-10 flex-1  flex-row gap-3  py-2`}
              >
                <AiOutlineMail /> hekto@gmail.com
                <BiPhoneCall /> (+358 4170000)
              </div>

              <div className={`${divStart} gap-5`}>
                <div className={`${itemCenter}`}>
                  EN
                  <FiChevronDown />
                </div>
                <div className={`${itemCenter}`}>
                  USD <FiChevronDown />
                </div>
                <div className={`${itemCenter}`}>
                  Wishlist <AiOutlineHeart />
                </div>
                {/* shopping cart */}
                <div className={`${itemCenter} relative mr-3`}>
                  <button>
                    <Link to="/cart">
                      <AiOutlineShoppingCart className="h-5 w-5" />
                    </Link>
                  </button>

                  <span className="absolute -right-4 top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red text-xs font-bold text-white">
                    0
                  </span>
                </div>

                {/* userInfo */}
                {userInfo ? (
                  <div className="ml-7">
                    <div
                      type="button"
                      className="text-md inline-flex w-full justify-center gap-x-1.5  rounded-md px-3 py-2 font-semibold text-white shadow-sm"
                      id="username"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <div className={`${itemCenter}`}>
                        {userInfo.name}
                        <BiDownArrow />
                      </div>

                      {isOpen && (
                        <div
                          className="absolute right-14 z-10 mt-8 w-[150px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabIndex="-1"
                        >
                          <div className="flex flex-col p-2" role="none">
                            <button className=" text-md border-b-2 px-4 py-2 text-violet hover:bg-slate-200">
                              <Link
                                to="/profile"
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-1"
                              >
                                Profile
                              </Link>
                            </button>

                            {/* log out */}
                            <button
                              onClick={logoutHandler}
                              type="submit"
                              className=" text-md   px-4 py-2 text-violet hover:bg-slate-200"
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-3"
                            >
                              Log out
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={`${itemCenter} flex-row`}>
                      <Link to={"/login"}>Log in</Link>
                      <BsPerson />
                    </div>
                    <div className={`${itemCenter} flex-row`}>
                      <Link to={"/register"}>Sign up</Link>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* below header */}
            <div
              className={` ${divBetween} ${navbarBackground} gap-3  px-20 py-2  text-navbartext `}
            >
              <Link to="/">
                <h1 className="font-jose text-2xl font-bold">Hekto</h1>
              </Link>
              <div className="">
                <ul className="flex flex-row items-center gap-5 text-center">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? activeClassName : ""
                      }
                    >
                      <div className={`${itemCenter}`}>Home</div>
                    </NavLink>
                  </li>
                  <li>
                    <DropDrownMenu />
                  </li>
                  <li>
                    <NavLink
                      to="/products"
                      className={({ isActive }) =>
                        isActive ? activeClassName : ""
                      }
                    >
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        isActive ? activeClassName : ""
                      }
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cart"
                      className={({ isActive }) =>
                        isActive ? activeClassName : ""
                      }
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? activeClassName : ""
                      }
                    >
                      <MenuDropDown />
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
          <div className={` ${divBetween}  bg-secondary px-10 py-3`}>
            <Link to="/">
              <h1 className="navbartext font-jose text-3xl font-bold text-blue">
                Hekto
              </h1>
            </Link>
            <button
              className="rounded-full bg-blue p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <GiHamburgerMenu className="h-6 w-6 text-white" />
            </button>
          </div>
        )}

        {/* MOBILE SIDE BAR MENU */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed bottom-0 right-0 top-0 z-40 h-full w-[300px] bg-feature text-navbartext drop-shadow-xl md:top-16 md:ml-40 md:justify-end">
            {/* close Button */}
            <div className="flex justify-end px-16 py-5">
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="cursor-pointer"
              >
                <AiOutlineCloseCircle className="h-8 w-8 text-navbartext" />
              </button>
            </div>

            {/* menu items */}
            <div className="flex flex-col items-center py-7 text-2xl">
              {/* below header */}
              <div className="">
                <ul className="flex flex-col gap-5 text-xl">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? activeClassName : ""
                      }
                    >
                      <div className={`${itemCenter}`}>Home</div>
                    </NavLink>
                  </li>
                  <li>
                    <DropDrownMenu />
                  </li>
                  <li>
                    <NavLink
                      to="/products"
                      className={({ isActive }) =>
                        isActive ? activeClassName : ""
                      }
                    >
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        isActive ? activeClassName : ""
                      }
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cart"
                      className={({ isActive }) =>
                        isActive ? activeClassName : ""
                      }
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? activeClassName : ""
                      }
                    >
                      <MenuDropDown />
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* search bar */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
