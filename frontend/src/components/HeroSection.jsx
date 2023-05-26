import ActionButton from "../shares/ActionButton";
import Armchair from "../assets/armchair.png";

const HeroSection = () => {
  return (
    <section className=" min-h-full w-full bg-primary">
      <div className="flex  items-center px-20 py-20">
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
          <div className="relative">
            <div className="before:top-50 ] before:absolute before:left-10  before:h-screen before:w-screen md:before:content-bg1 z-[-1]">
              <div className="before:top-50 before:left-15 before:absolute  md:before:content-bg2 ">
                <img src={Armchair} alt="arm chair" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>dot dot dot </div>
    </section>
  );
};

export default HeroSection;
