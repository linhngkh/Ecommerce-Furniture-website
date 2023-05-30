import { topCategory } from "../../data";
import Chair from "../assets/chair101.png";
import ActionButton from "../shares/ActionButton";
import { BsCheck2 } from "react-icons/bs";
const DiscountItem = () => {
  return (
    <section className=" w-full">
      {/* DiscountItem */}
      <h1 className="text-center font-jose text-4xl font-bold text-blue">
        Discount Item
      </h1>
      <div>
        <ul className=" flex justify-center gap-4 py-4 text-blue ">
          <li className="hover:text-pink hover:underline">Wood Chair</li>
          <li className="hover:text-pink hover:underline">Plastic Chair</li>
          <li className="hover:text-pink hover:underline">Sofa Collection</li>
        </ul>
      </div>

      <div className="flex flex-row items-center px-10">
        {/* features */}
        <div className="basis-1/2 space-y-4 pl-40">
          <h1 className="font-jose text-3xl font-bold text-blue">
            20% Discount Of All Products
          </h1>
          <p className="font-jose text-pink">Eams Sofa Compact</p>

          <p className="text-md leading-7 text-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>

          {/* lists */}
          <div className="text-md flex gap-x-5 leading-7 text-subtext">
            <div>
              <div className="flex flex-row gap-x-1">
                <BsCheck2 size={30} className="text-blue" />
                <p>Material expose like metals</p>
              </div>

              <div className="flex flex-row gap-x-1">
                <BsCheck2 size={30} className="text-blue" />
                <p> Simple neutral colours.</p>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-x-1">
                <BsCheck2 size={30} className="text-blue" />
                <p>Clear lines and geomatric figures</p>
              </div>

              <div className="gap-x1 flex flex-row gap-x-1">
                <BsCheck2 size={30} className="text-blue" />
                <p> Material expose like metals</p>
              </div>
            </div>
          </div>
          <ActionButton>Shop Now</ActionButton>
        </div>

        {/* images */}
        <div className="basis-1/2">
          <img src={Chair} alt="chair" />
        </div>
      </div>

      {/* top categories */}
      <div className="m-20">
        {" "}
        <h1 className="mb-10 text-center font-jose text-4xl font-bold text-blue">
          Top Categories
        </h1>
        <div className="flex items-center justify-center gap-x-8">
          {topCategory.map((category) => (
            <div key={category.index}>
              <div className=" rounded-full bg-secondary p-7 drop-shadow-[rgba(7,_65,_210,_0.1)_0px_9px_10px]">
                <img src={category.img} alt="image" className="w-full" />
              </div>
              <div className="mt-5 flex justify-center text-center">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* banner */}
      <div>
        {" "}
        <h1 className="mb-10 text-center font-jose text-4xl font-bold text-blue">
          Trending Products
        </h1>
      </div>
    </section>
  );
};

export default DiscountItem;
