const Sorting = ({ sortOptions, handleSortChange, options }) => {
  return (
    <div className="flex gap-3">
      <label value="">Sort By</label>
      <select
        value={options}
        onChange={handleSortChange}
        className="w-20 border-2"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sorting;
