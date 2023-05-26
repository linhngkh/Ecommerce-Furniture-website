import ActionButton from "../shares/ActionButton";
import Sofa from "../assets/sofa.png";
import Lamp from "../assets/lamp.png";
const HeroSection = () => {
  return (
    <section className="bg-primary">
      <div className=" flex min-h-full w-full ">
        <div className="w-[20%]">
          {" "}
          <img src={Lamp} alt="lamp" />
        </div>

        <div className="flex basis-3/4 items-center py-20 ">
          {/* text */}
          <div className="flex-1 flex-col space-y-5">
            <p className="text-sm text-pink">
              Best Furniture For Your Castle....
            </p>
            <h1 className="font-jos text-3xl font-bold leading-10">
              New Furniture Collection <br />
              Trends in 2020
            </h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <ActionButton>Shop Now</ActionButton>
          </div>
          {/* images */}
          <div className="flex-1">
            <div className="relative ">
              <img src={Sofa} alt="sofa" />
            </div>
          </div>
        </div>
      </div>
      <div>dot dot dot </div>
    </section>
  );
};

export default HeroSection;
