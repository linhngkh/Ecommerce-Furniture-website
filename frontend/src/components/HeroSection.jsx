import ActionButton from "../shares/ActionButton";
import Sofa from "/assets/sofa.png";
import Lamp from "/assets/lamp.png";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="  bg-primary md:pt-20">
      <div className="grid px-10 md:flex ">
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
          className="w-[10%] md:w-[20%]"
        >
          <img
            src={Lamp}
            alt="lamp"
            className="w-full object-fill"
            loading="lazy"
          />
        </motion.div>

        <div className="flex flex-col items-center  md:flex md:basis-3/4 md:flex-row md:py-20">
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
            className="flex-1 space-y-5"
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
            <Link to="/pages/grid">
              <ActionButton>Shop Now</ActionButton>
            </Link>
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
            className="mt-10 flex-1"
          >
            <div className="relative flex items-center">
              <img src={Sofa} alt="sofa" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
