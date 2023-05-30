import BigChair from "../assets/chairbig.png";
import { GoPrimitiveDot } from "react-icons/go";

const Features = () => {
  const dotStyle = `flex flex-row items-center gap-2`;
  return (
    <section className="flex items-center justify-center bg-feature">
      {/* image */}
      <div>
        <img src={BigChair} alt="big sofa" />
      </div>
      {/* features */}
      <div className="basis-1/2 space-y-4">
        <div className="">
          <h1 className="overflow-x-hidden  font-jose  text-3xl font-bold text-blueBold">
            <span className="indent-3">Unique Features Of leatest & </span>{" "}
            <br />
            <span className="indent-3">Trending Poducts</span>
          </h1>
        </div>

        <div className="decoration-none space-y-3 text-sm text-subtext">
          <div className={`${dotStyle}`}>
            <GoPrimitiveDot className="text-pink" /> All frames constructed with
            hardwood solids and laminates
          </div>
          <div className="flex flex-row gap-2">
            <GoPrimitiveDot className="text-blues" /> Reinforced with double
            wood dowels, glue, screw - nails corner <br />
            blocks and machine nails
          </div>
          <div className={`${dotStyle}`}>
            <GoPrimitiveDot className="text-mint" /> Arms, backs and seats are
            structurally reinforced
          </div>
        </div>
        <div className="flex flex-row gap-3 pt-4">
          <button className="font-md rounded-sm bg-pink px-7 py-2 font-jose text-white hover:bg-deeppink">
            Add To Cart
          </button>
          <div className="text-sm text-blueBold">
            <p className="font-bold">B&B Italian Sofa</p>
            <p>€32.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
