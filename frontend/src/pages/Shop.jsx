import SharedBanner from "../shares/SharedBanner";

const Shop = () => {
  return (
    <section className="pt-10 md:pt-20">
      <SharedBanner>Shopping Cart</SharedBanner>
      <div>
        <div></div>
        <div>
          <div>
            <h1>Cart Totals</h1>
            <div></div>
          </div>
          <div>
            <h1>Calculate Shopping</h1>

            <form action="" className="bg-[#f4f4fc]">
              <input type="text" name="city" placeholder="City" />
              <input type="text" name="address" placeholder="Address" />
              <input type="text" name="postal-code" placeholder="Postal code" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
