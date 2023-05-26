import { BiPhoneCall } from "react-icons/bi";
import {
  AiOutlineMail,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";

const Header = () => {
  const divCenter = `flex justify-center items-center`;
  const itemCenter = `flex items-center gap-1`;
  return (
    <section className="flex-cols flex ">
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
      <div className="text-black"></div>
    </section>
  );
};

export default Header;
