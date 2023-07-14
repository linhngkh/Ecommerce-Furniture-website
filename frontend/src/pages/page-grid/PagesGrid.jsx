import { useState } from "react";

import { BsGridFill } from "react-icons/bs";
import { MdOutlineFormatListBulleted } from "react-icons/md";

import ProductsGrid from "./ProductsGrid";
import SharedBanner from "../../shares/SharedBanner";
import SharedTitle from "../../shares/SharedTitle";
import Sorting from "./Sorting";
import ProductsList from "./ProductsList";
import { useGetAllProductsQuery } from "../../slices/producstApi";

const PagesGrid = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const [viewMode, setViewMode] = useState("grid");

  const [products, setProducts] = useState(data);
  console.log(products);
  const sortProducts = (option) => {
    const sortedProducts = [...products]; // Create a copy of the original products array

    switch (option) {
      case "name-asc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setProducts(sortedProducts);
  };

  const handleSetGrid = () => {
    setViewMode("grid");
  };

  const handleSetList = () => {
    setViewMode("list");
  };

  return (
    <section className="pt-10 md:pt-20">
      {/* banner title */}
      <SharedBanner>Shop Grid Default</SharedBanner>

      <div className="flex h-full w-full items-center justify-center bg-white px-20 md:px-20 ">
        <div className="my-10 md:my-20">
          {/* search bars */}
          <div className="flex flex-col justify-between md:flex md:flex-row ">
            <SharedTitle />
            <div className="subtext-thin flex flex-wrap gap-y-3 md:flex md:flex-row md:items-end md:justify-end md:gap-5">
              <div className="flex  gap-3">
                Per Page:
                <input className="w-20 border-2" />
              </div>
              {/* sorting */}
              <Sorting sortProducts={sortProducts} />

              <div className="flex items-center justify-center gap-1 md:gap-2">
                View:
                <button onClick={handleSetGrid}>
                  <BsGridFill size={30} />
                </button>
                <button onClick={handleSetList}>
                  <MdOutlineFormatListBulleted size={30} />
                </button>
              </div>
            </div>
          </div>

          {/* product grid */}
          {viewMode === "grid" ? (
            <ProductsGrid data={data} isLoading={isLoading} error={error} />
          ) : (
            <ProductsList data={data} isLoading={isLoading} error={error} />
          )}
        </div>
      </div>
    </section>
  );
};

export default PagesGrid;
