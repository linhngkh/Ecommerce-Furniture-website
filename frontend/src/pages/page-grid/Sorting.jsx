const Sorting = ({ onChangeHandler, sortBy, sorting }) => {
  return (
    <div className="flex gap-3">
      <form action="">
        {" "}
        <label htmlFor="sortby">Sort By:</label>
        <select
          value={sortBy}
          className="w-20 border-2"
          name="products"
          id="products"
          onClick={sorting}
        >
          <option value="price" onChange={onChangeHandler}>
            Sort by Price
          </option>
          <option value="name">Sort by Name</option>
        </select>
      </form>
    </div>
  );
};

export default Sorting;
