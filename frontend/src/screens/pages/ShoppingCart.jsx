import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import SharedBanner from "../../shares/SharedBanner";
import { BsArrowLeft, BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
//styles
const buttonStyles = `px-4 py-2 bg-[#e7e7e7] text-black font-bold rounded-md `;

const pinkButtons = `mt-5 bg-pink px-4 py-2 font-jose text-sm text-white transition hover:bg-deeppink`;

const flexCenter = `flex items-center justify-center`;
const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <section className="w-full pt-10 md:pt-20">
      <SharedBanner>Shopping Cart</SharedBanner>

      <div className=" flex justify-center py-20 font-jose">
        <div>
          {cart.cartItems.length === 0 ? (
            <div>
              <h3 className="text-md text-blue">
                Your cart is currently empty.
              </h3>
              <div className="flex items-center justify-center gap-3">
                <BsArrowLeft size={30} />
                <span className="font-semibold text-blue">
                  <Link to="/pages/grid">Start Shopping!</Link>
                </span>
              </div>
            </div>
          ) : (
            <div className="container flex flex-col px-10 md:flex-row ">
              <div className=" w-[500px]  pr-10 md:w-[1000px] md:pr-10">
                <div className="grid grid-cols-4 justify-items-stretch gap-9  font-jose text-[20px] font-bold text-blue">
                  {/* <!-- Column Headers --> */}
                  <div className="w-2/5">Products</div>
                  <div className="w-1/5">Price</div>
                  <div className="w-1/5">Quantity</div>
                  <div className="w-1/5 ">Total</div>

                  {/* <!-- Sample Cart Items --> */}

                  <div className="flex justify-between ">
                    {cart.cartItems?.map((cartItem) => (
                      <div
                        key={cartItem._id}
                        className="flex flex-row justify-between"
                      >
                        {/* PRODUCT */}
                        <div className={`flex w-2/5`}>
                          <img
                            src={cartItem.imgUrl}
                            alt={cartItem.name}
                            className="h-24 object-cover"
                          />
                          <p className="text-sm">{cartItem.name}</p>
                        </div>

                        <div className={`${flexCenter} ml-20`}>
                          <p className="text-sm">{cartItem.price}</p>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex w-1/5 justify-center">
                          <button
                            className={`${buttonStyles}`}
                            onClick={() => {}}
                          >
                            <AiOutlineMinus />
                          </button>

                          <div className="bg-[#f0eff2] p-2  font-bold">
                            {cart.cartQuantity}1
                          </div>
                          <button
                            className={`${buttonStyles}`}
                            onClick={() => {}}
                          >
                            <AiOutlinePlus />
                          </button>
                        </div>

                        <div className={`${flexCenter} ml-20`}>
                          <p className="text-sm">€{cartItem.cartTotalAmount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <img src="/line6.png" className="mt-4 h-0.5 w-full" />
                <div className="flex justify-bw">
                  <button className={`${pinkButtons}`}>Update Cart</button>
                  <button className={`${pinkButtons}`}>Clear Cart</button>
                </div>
              </div>

              {/* CART TOTALS */}
              <div className="mt-10">
                <div className="flex w-[400px] flex-col">
                  <h3 className="text-center font-jose font-bold text-blue">
                    Cart Totals
                  </h3>
                  <div className="mt-7 flex h-[284px] w-[371px] flex-col space-y-4 bg-primary px-5 py-7">
                    <div>
                      <div className="mb-1 flex justify-between">
                        <p>Subtotals:</p>
                        <p>PRICE</p>
                      </div>
                      <img src="/line6.png" />
                    </div>

                    <div>
                      <div className="mb-1 flex justify-between">
                        <p>Totals:</p>
                        <p>€{cart.cartTotalAmount}</p>
                      </div>
                      <img src="/line6.png" />
                    </div>

                    <div className="flex gap-2">
                      <BsFillCheckCircleFill />
                      <p className="text-xs text-subtext">
                        Shipping & taxes calculated at checkout
                      </p>
                    </div>

                    <button className="rounded-sm bg-[#19d16f] px-4 py-2 text-xs text-white">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>

                {/* CALCULATE SHOPPING */}
                <div className="flex w-[400px] flex-col pt-5">
                  <h3 className="text-center font-jose font-bold text-blue">
                    Calculate Shopping
                  </h3>
                  <div className="mt-7 flex h-[340px] w-[371px] flex-col space-y-6 bg-primary px-5 py-7">
                    <div>
                      <div className="mb-1 flex justify-between">
                        <input
                          type="text"
                          className="w-full bg-primary py-2 text-xs text-black"
                          placeholder="Country"
                        />
                      </div>
                      <img src="/line6.png" />
                    </div>

                    <div>
                      <div className="mb-1 flex justify-between">
                        <input
                          type="text"
                          className="w-full bg-primary py-2 text-xs text-black "
                          placeholder="Address"
                        />
                      </div>
                      <img src="/line6.png" />
                    </div>
                    <div>
                      <div className="mb-1 flex justify-between">
                        <input
                          type="text"
                          className="w-full bg-primary py-2 text-xs text-black "
                          placeholder="Postal Code"
                        />
                      </div>
                      <img src="/line6.png" />
                    </div>
                    <button className="w-[200px] rounded-sm  bg-pink px-1 py-2 text-xs text-white">
                      Calculate Shipping
                    </button>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-center gap-3">
                  <BsArrowLeft size={30} />
                  <span className="font-semibold text-blue">
                    <Link to="/pages/grid">Continue Shopping</Link>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
