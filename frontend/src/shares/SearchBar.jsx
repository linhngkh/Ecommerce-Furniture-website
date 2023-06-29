import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="flex w-[300px] items-center justify-center border border-subtext">
      <input type="text" placeholder="Search..." className="p-1 outline-none" />
      <button className=" p-2 text-subtext">
        <BiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
