import { blogs } from "../../data";
import { BiPen } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section className="px-40 py-10">
      {/* blog */}
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
        <h1 className="mb-10 text-center font-jose text-4xl font-bold text-blue">
          Latest Blog
        </h1>
        <div className="flex items-center justify-center gap-x-10 ">
          {blogs.map((item, index) => (
            <div
              key={index}
              className="h-[480px] w-[550px] rounded-b-lg bg-white drop-shadow-[rgba(7,_65,_210,_0.1)_0px_20px_40px]"
            >
              <img src={item.img} alt={item.desc} className="w-full" />
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
              <div className="flex flex-col justify-center px-3 py-4">
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
