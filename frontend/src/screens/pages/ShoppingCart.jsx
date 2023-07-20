import { useSelector } from "react-redux/es/hooks/useSelector";
import SharedBanner from "../../shares/SharedBanner";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import ActionButton from "../../shares/ActionButton";
const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <section className="pt-10 md:pt-20">
      <SharedBanner>Shopping Cart</SharedBanner>
      <div className="mx-auto flex items-center justify-center p-10">
        <div>
          {cart.cartItems.length === 0 ? (
            <>
              <h3>Your cart is currently empty</h3>
              <Link to="/pages/grid">
                <BsArrowLeft />
                <span>Start Shopping!</span>
              </Link>
            </>
          ) : (
            <div className="flex items-center justify-between gap-4">
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
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
