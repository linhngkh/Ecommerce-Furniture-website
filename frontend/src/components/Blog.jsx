import { blogs } from "../../data";
import { BiPen } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
const Blog = () => {
  return (
    <section className="px-40 py-10">
      {/* blog */}
      <div className="">
        <h1 className="mb-10 text-center font-jose text-4xl font-bold text-blue">
          Latest Blog
        </h1>
        <div className="flex items-center justify-center gap-x-5">
          {blogs.map((item, index) => (
            <div
              key={index}
              className="h-[550px] w-[493px] rounded-b-lg bg-white leading-10 drop-shadow-[rgba(7,_65,_210,_0.1)_0px_20px_40px]"
            >
              <img src={item.img} alt={item.desc} className="w-full" />
              <div className="p-3">
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
              <div className="px-5">
                <h3 className=" font-jose font-bold text-blueBold hover:text-pink">
                  {item.title}
                </h3>
                <p className="text-sm text-subtext ">{item.desc}</p>
                <a
                  href="/blogs"
                  className=" text-sm text-blueBold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
