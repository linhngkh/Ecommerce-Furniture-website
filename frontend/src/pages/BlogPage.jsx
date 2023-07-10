import SharedBanner from "../shares/SharedBanner";
import SearchBar from "../shares/SearchBar";
import { BiPen } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { blogPosts, saleProducts, offerProducts, recentPost } from "../../data";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const styledPagination = `relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#e0d3f5] ring-1 ring-inset ring-[#e0d3f5] hover:bg-pink hover:text-white focus:z-20 focus:outline-offset-0 rounded-sm`;

const Blog = () => {
  return (
    <section className="mt-10 md:py-10">
      <SharedBanner>Blog Page</SharedBanner>
      <div className="mt-20 flex px-20">
        <div className="w-4/6 flex-1">
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
          <div className="flex items-center justify-center gap-5">
            <a href="#" className={`${styledPagination}`}>
              1
            </a>
            <a href="#" className={`${styledPagination}`}>
              2
            </a>
            <a href="#" className={`${styledPagination}`}>
              3
            </a>
            <a href="#" className={`${styledPagination}`}>
              4
            </a>
          </div>
        </div>
        <div className="w-2/6 space-y-8">
          <div className="space-y-4">
            <h3 className="h3Text ">Search</h3>
            <SearchBar />
          </div>

          <div className="space-y-4">
            <h3 className="h3Text ">Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              <p className="subtextP">Hobbies (14)</p>
              <p className="subtextP">Women (21)</p>
              <p className="subtextP">Women (21)</p>
              <p className="subtextP">Women (21)</p>
              <p className="subtextP">Women (21)</p>
              <p className="subtextP">Women (21)</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="h3Text ">Recent Post</h3>
            {recentPost.map((post) => (
              <div key={post.id} className="flex gap-3">
                <Link>
                  <img
                    src={post.img}
                    alt={post.name}
                    className="w-[100px] object-contain"
                  />
                </Link>
                <div className="flex flex-col justify-center">
                  <p className="font-jose text-sm text-blue">{post.title}</p>
                  <p className="text-xs text-subtext1">{post.createdAt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="h3Text ">Sale Product</h3>
            {saleProducts.map((product) => (
              <div key={product.id} className="flex gap-3">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-[100px] object-contain"
                />
                <div className="flex flex-col justify-center">
                  <p className="font-jose text-sm text-blue">{product.title}</p>
                  <p className="text-xs text-subtext1">{product.createdAt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="h3Text ">Offer Product</h3>

            <div className="grid grid-cols-2 gap-2">
              {offerProducts.map((offer) => (
                <div className="w-[150px]" key={offer.id}>
                  <img
                    src={offer.img}
                    alt={offer.name}
                    className="w-[150px] object-contain"
                  />
                  <div className="flex flex-col justify-center p-2 text-center">
                    <p className="font-jose text-sm text-blue">{offer.title}</p>
                    <p className="font-jose text-xs text-subtext1">
                      {offer.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="h3Text ">Follow</h3>
            <div className="flex gap-4">
              <FaFacebook size={25} className="text-blues" />
              <FaInstagram size={25} className="text-pink" />
              <AiFillTwitterCircle size={25} className="text-sky-400" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="h3Text ">Tags</h3>
            <div className="grid grid-cols-3 gap-2">
              <p className="tagStyle">General</p>
              <p className="tagStyle">Atsanil</p>
              <p className="tagStyle">Insas</p>
              <p className="tagStyle">Bibsaas</p>
              <p className="tagStyle">Nulla</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
