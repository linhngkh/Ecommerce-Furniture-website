import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="flex w-[300px] items-center justify-center">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 outline-none"
      />
      <button className=" border p-2 text-subtext">
        <BiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
