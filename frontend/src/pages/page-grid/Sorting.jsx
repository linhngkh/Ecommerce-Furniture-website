import { useState } from "react";
const options = [
  { label: "Name (A-Z)", value: "name-asc" },
  { label: "Name (Z-A)", value: "name-desc" },
  { label: "Price (Low to High)", value: "price-asc" },
  { label: "Price (High to Low)", value: "price-desc" },
];
const Sorting = ({ sortProducts }) => {
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  return (
    <div className="flex gap-3">
      <label value="">Sort By</label>
      <select
        value={sortOption}
        onChange={handleSortChange}
        className="w-20 border-2"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sorting;
