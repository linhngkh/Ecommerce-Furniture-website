import SharedBanner from "../shares/SharedBanner";
import { BiPen } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { blogPosts } from "../../data";
const Blog = () => {
  return (
    <section className="mt-10 md:pt-10">
      <SharedBanner>Blog Page</SharedBanner>
      <div className="mt-20 flex px-20">
        <div className="w-5/6 flex-1">
          <div className="w-[700px]">
            {blogPosts.map((blog) => (
              <div key={blog.name} className="mb-7">
                <div className="">
                  <img
                    src={blog.image}
                    alt={blog.name}
                    className="w-full rounded-lg object-contain"
                  />
                </div>
                <div className="flex items-center  gap-3 px-2 py-3">
                  <BiPen color="red" />
                  <span className="bg-[#ffe7f9] px-7">
                    <p className="font-jose text-sm text-blue">{blog.author}</p>
                  </span>
                  <MdDateRange color="orange" />
                  <span className="bg-[#ffece2] px-7">
                    <p className="font-jose text-sm text-blue">{blog.date}</p>
                  </span>
                </div>
                <div className="space-y-5 px-2">
                  <h1 className="text-lg font-bold tracking-wide text-blue">
                    {blog.title}
                  </h1>
                  <p className="text-sm text-subtext">{blog.content}</p>
                  <div className="flex items-center">
                    <p className="text-sm text-blue">Read More</p>
                    <BsDot className="text-extrabold text-pink" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/6"></div>
      </div>
    </section>
  );
};

export default Blog;
