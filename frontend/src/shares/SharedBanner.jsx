import { motion } from "framer-motion";

const SharedBanner = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="mx-auto flex h-[200px] items-center bg-primary px-20 md:px-20"
    >
      <h1 className="font-jose text-2xl font-extrabold">{children}</h1>
    </motion.div>
  );
};

export default SharedBanner;
