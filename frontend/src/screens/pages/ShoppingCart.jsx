import { useSelector } from "react-redux/es/hooks/useSelector";
import SharedBanner from "../../shares/SharedBanner";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import ActionButton from "../../shares/ActionButton";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <section className="pt-10 md:pt-20">
      <SharedBanner>Shopping Cart</SharedBanner>
      <div className="mx-auto flex items-center justify-center p-10">
        <div>
          {cart.cartItems.length === 0 ? (
            <div>
              <h3>Your cart is currently empty</h3>
              <div className="flex items-center justify-center gap-3">
                <BsArrowLeft size={30} />
                <span>
                  <Link to="/pages/grid">Start Shopping! </Link>
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-start justify-between gap-4">
              <div>
                <div>
                  <h3>Products</h3>
                  <h3>Price</h3>
                  <h3>Quantity</h3>
                  <h3>Total</h3>
                </div>
                <div>
                  {cart.cartItems?.map((cartItem) => (
                    <div key={cartItem.id}>
                      <img src={cartItem.img} alt={cartItem.name} />
                      <h3>{cartItem.name}</h3>
                      <div>
                        <p>€{cartItem.price}</p>
                      </div>
                      <div>
                        <button>-</button>
                        <div>{cart.cartQuantity}</div>
                        <button>+</button>
                      </div>
                      <div>
                        <p>{cartItem.cartTotalAmount}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <ActionButton>Update Cart</ActionButton>
                  <ActionButton>Clear Cart</ActionButton>
                </div>
              </div>

              <div>
                <h3>Cart Totals</h3>
                <div>
                  <p>Subtotals:</p>
                  <p>€{cart.cartTotalAmount}</p>
                </div>
                <p>
                  <span>
                    <BsFillCheckCircleFill />
                  </span>
                  Shipping & taxes calculated at checkout
                </p>
                <button>Proceed to Checkout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
