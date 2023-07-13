import {
  AiFillStar,
  AiOutlineHeart,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaFacebook, FaInstagramSquare, FaArrowRight } from "react-icons/fa";

import SharedBanner from "../shares/SharedBanner";
import Bag1 from "/assets/details/bag-1.png";
import Bag2 from "/assets/details/bag-2.png";
import Bag3 from "/assets/details/bag-3.png";
import Bag4 from "/assets/details/bag-4.png";
import Related1 from "/assets/related/related-1.png";
import Related2 from "/assets/related/related-2.png";
import Related3 from "/assets/related/related-3.png";
import Related4 from "/assets/related/related-4.png";

const Products = () => {
  return (
    <section className="pt-10 md:pt-20">
      {/* banner title */}
      <SharedBanner>Product Details</SharedBanner>
      {/* product detail */}
      <div className="flex  h-full w-full items-center justify-center bg-white px-20 md:px-20">
        <div className="flex w-[600px]  flex-col items-center gap-6  p-3 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] md:my-20 md:h-[500px]  md:w-[1200px] md:flex-row">
          <div className=" flex w-[400px] min-w-[200px] items-center justify-center gap-3  md:w-[700px]">
            <div className="flex flex-col  gap-3">
              <div>
                <img
                  src={Bag1}
                  alt="bag"
                  className="zoom  w-full  object-contain "
                />
              </div>
              <div>
                <img
                  src={Bag2}
                  alt="bag"
                  className="zoom w-full object-contain"
                />
              </div>
              <div>
                <img
                  src={Bag3}
                  alt="bag"
                  className="zoom w-full object-contain"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  src={Bag4}
                  alt="bag"
                  className="zoom w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className=" flex flex-col space-y-3 p-3">
            <h1 className="font-jose text-[30px] font-semibold text-blue">
              Playwood Bag
            </h1>
            <div className="flex items-center text-orange-300">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <p className="text-sm text-black">(22)</p>
            </div>
            <div className="flex gap-2">
              <p className="font-jose text-sm text-blue">€32.00</p>
              <p className="font-jose text-sm text-pink line-through">€62.00</p>
            </div>
            <p className="font-jose text-sm text-blue">Color</p>
            <p className="font-jose text-sm text-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
            <div className="flex gap-2 text-center">
              <p className="ml-10 font-jose text-sm text-blue">Add To Cart</p>
              <AiOutlineHeart />
            </div>
            <p className="font-jose text-sm text-blue">Categories</p>
            <p className="font-jose text-sm text-blue">Tags</p>
            <div className="flex gap-2">
              <p className="font-jose text-sm text-blue">Share </p>
              <FaFacebook className="h-4 w-4" />
              <FaInstagramSquare className="h-4 w-4 rounded-full text-pink" />
              <AiFillTwitterCircle className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 w-full space-y-10 bg-primary p-10 font-jose md:p-20">
        <div className="flex flex-col gap-4 font-semibold text-blue md:flex-row md:gap-20">
          <h3 className="hover:underline">Description</h3>
          <h3 className="hover:underline">Additional Info</h3>
          <h3 className="hover:underline">Reviews</h3>
          <h3 className="hover:underline">Video</h3>
        </div>

        <div>
          <h4 className="mb-3 text-blue">Varius tempor.</h4>
          <p className="text-sm leading-6 text-subtext">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </p>
        </div>

        <div className="space-y-3 ">
          <h4 className="mb-3 font-jose text-blue">More details</h4>

          <div className=" flex items-center justify-start gap-3">
            <FaArrowRight className=" h-5 w-5" />
            <p className="text-sm  text-subtext">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            </p>
          </div>
          <div className=" flex items-center justify-start gap-3 ">
            <FaArrowRight className=" h-5 w-5" />
            <p className="text-sm  text-subtext">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            </p>
          </div>
          <div className=" flex items-center justify-start gap-3">
            <FaArrowRight className=" h-5 w-5" />
            <p className="text-sm  text-subtext">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            </p>
          </div>
          <div className=" flex items-center justify-start gap-3">
            <FaArrowRight className=" h-5 w-5" />
            <p className="text-sm  text-subtext">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            </p>
          </div>
        </div>
      </div>

      {/* related products */}
      <div className="px-20 pb-10 md:pb-20">
        <h1 className="font-jose text-2xl font-extrabold">Related Products</h1>

        <div className="mt-10 md:mt-20 ">
          <div className="flex  w-[270] flex-col gap-10 md:flex-row">
            <div className="flex flex-col items-center justify-center">
              <img
                src={Related1}
                alt="related products"
                className="zoom h-60 w-full object-contain"
                loading="lazy"
              />
              <div className="flex justify-between py-4">
                <p className="text-sm font-semibold text-blue">
                  Mens Fashion Wear
                </p>
                <div className="flex text-orange-300">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <p className="font-jose text-sm text-blue">€43.00</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src={Related2}
                alt="related products"
                className="zoom h-60 w-full object-contain"
                loading="lazy"
              />
              <div className="flex justify-between py-4">
                <p className="text-xs font-semibold text-blue">
                  Women &apos; s Fashion
                </p>
                <div className="flex text-orange-300">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <p className="font-jose text-sm text-blue">€43.00</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src={Related3}
                alt="related products"
                className="zoom h-60 w-full object-contain"
                loading="lazy"
              />
              <div className="flex justify-between py-4">
                <p className="text-xs font-semibold text-blue">
                  Wolx Dummy Fashion
                </p>
                <div className="flex text-orange-300">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <p className="font-jose text-sm text-blue">€67.00</p>
            </div>

            <div className="flex flex-col items-center justify-center ">
              <img
                src={Related4}
                alt="related products"
                className="zoom h-60 w-full object-contain"
                loading="lazy"
              />
              <div className="flex justify-between py-4">
                <p className="text-xs font-semibold text-blue">
                  Top Wall Digital Clock
                </p>
                <div className="flex text-orange-300">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <p className="font-jose text-sm text-blue">€51.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
