import { featureProducts, newProducts } from "../../data";

const Product = () => {
  return (
    <>
      <div>
        {featureProducts.map((product) => (
          <div key={product.index}>
            {" "}
            <img src={product.img} alt="" />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <div>
        {newProducts.map((product) => (
          <div key={product.index}>
            {" "}
            <img src={product.img} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
