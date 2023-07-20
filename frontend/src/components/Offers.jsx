import { offers } from "../../data";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const flexCenter = `flex items-center justify-center`;
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const childVariant = {
  hidden: { opacity: 0, scale: 3 },
  visible: { opacity: 1, scale: 1 },
};

const Offers = () => {
  //custom hook
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <>
      {isAboveMediumScreens ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="gridColumn-3  mb-20 mt-10 rounded-sm drop-shadow-[rgba(7,_65,_210,_0.1)_0px_9px_40px] md:flex md:justify-between md:gap-0 md:space-x-5 md:px-10 "
        >
          {offers.map((offer, index) => (
            <motion.div
              variants={childVariant}
              key={index}
              className={` ${flexCenter} h-[320px] w-[270px] flex-col gap-x-5 justify-self-center bg-white hover:border-b-4 hover:border-b-[#ff9100]`}
            >
              <div className={`${flexCenter} mb-3`}>
                <img src={offer.img} alt="image" loading="lazy" />
              </div>{" "}
              <div className=" px-4 py-1 text-center">
                <p className="mb-3 font-jose">{offer.name}</p>
                <p className="text-xs text-subtext">{offer.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="gridColumn-3  rounded-sm drop-shadow-[rgba(7,_65,_210,_0.1)_0px_9px_40px] md:mb-20 md:flex md:justify-between md:gap-0 md:space-x-5 md:px-10 ">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={` ${flexCenter} h-[320px] w-[270px] flex-col gap-x-5 justify-self-center bg-white hover:border-b-4 hover:border-b-[#ff9100]`}
            >
              <div className={`${flexCenter} mb-3 `}>
                <img src={offer.img} alt="image" loading="lazy" />
              </div>
              <div className=" px-4 py-1 text-center ">
                <p className="mb-3 font-jose">{offer.name}</p>
                <p className="text-xs text-subtext ">{offer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Offers;
