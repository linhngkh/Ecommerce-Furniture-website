import BigChair from "/assets/bigchair.png";

import { GoPrimitiveDot } from "react-icons/go";

import { motion } from "framer-motion";

const dotStyle = `flex flex-row items-center gap-2`;

const Features = () => {
  return (
    <section className="grid justify-center bg-feature px-10 md:flex md:items-center md:justify-center">
      {/* image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <img src={BigChair} alt="big sofa" loading="lazy" />
      </motion.div>

      {/* features */}
      <div className="  md:basis-1/2 md:space-y-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="overflow-x-hidden  font-jose text-xl font-bold text-blueBold md:text-3xl">
            <span className="indent-3">Unique Features Of leatest & </span>
            <br />
            <span className="indent-3">Trending Products</span>
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="decoration-none space-y-3 text-sm text-subtext"
        >
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
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mb-10 mt-5 flex gap-4 md:flex md:flex-row md:gap-3 md:pt-4"
        >
          <button className="font-md rounded-sm bg-pink px-7 py-2 font-jose text-white hover:bg-deeppink">
            Add To Cart
          </button>
          <div className="text-sm text-blueBold">
            <p className="font-bold">B&B Italian Sofa</p>
            <p>€32.00</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
