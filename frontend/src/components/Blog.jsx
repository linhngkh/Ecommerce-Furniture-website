import { blogs } from "../../data";

import { motion } from "framer-motion";

import { BiPen } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import SharedText from "../shares/SharedText";

const Blog = () => {
  return (
    <section className="px-10 py-5 md:px-40 md:py-10">
      {/* BLOG */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <SharedText> Latest Blog</SharedText>

        <div className=" place-items-center space-y-5 md:flex md:items-center md:justify-center md:gap-x-8 ">
          {blogs.map((item, _id) => (
            <div
              key={_id}
              className="rounded-b-lg bg-white drop-shadow-[rgba(7,_65,_210,_0.1)_0px_20px_40px] md:h-[490px] md:w-[550px]"
            >
              <img
                src={item.img}
                alt={item.desc}
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="px-2 py-2">
                <div className="flex items-center justify-between">
                  <div className="flex ">
                    <BiPen color="red" />
                    <p className="text-xs">{item.author}</p>
                  </div>
                  <div className="flex ">
                    <MdDateRange color="orange" />
                    <p className="text-xs">{item.date}</p>
                  </div>
                </div>
              </div>

              <div className="px-3 py-4 md:flex md:flex-col md:justify-center ">
                <h3 className="text-md font-jose font-bold text-blueBold hover:text-pink">
                  {item.title}
                </h3>
                <p className="text-xs leading-loose text-subtext">
                  {item.desc}
                </p>
                <a
                  href="/blogs"
                  className=" mt-4 text-xs text-blueBold underline underline-offset-8 hover:text-pink"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Blog;
