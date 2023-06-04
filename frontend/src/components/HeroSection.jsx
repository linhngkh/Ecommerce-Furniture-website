import ActionButton from "../shares/ActionButton";
import Sofa from "../assets/sofa.png";
import Lamp from "../assets/lamp.png";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-primary">
      <div className=" flex min-h-full w-full ">
        {/* LAMP */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className=" w-[20%]"
        >
          {" "}
          <img src={Lamp} alt="lamp" className="" />
        </motion.div>

        <div className="flex basis-3/4 items-center py-20 ">
          {/* text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex-1 flex-col space-y-5"
          >
            <p className="text-sm text-pink">
              Best Furniture For Your Castle....
            </p>
            <h1 className="font-jose text-3xl font-bold leading-10">
              New Furniture Collection <br />
              Trends in 2020
            </h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <ActionButton>Shop Now</ActionButton>
          </motion.div>

          {/* images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex-1"
          >
            <div className="relative ">
              <img src={Sofa} alt="sofa" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
