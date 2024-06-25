import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div className="bg-white w-[90%] md:w-3/4 lg:w-1/2 mt-8 p-4 rounded-lg shadow-lg flex items-center justify-between">
      <div
        className="flex items-center border-green-700" >
        <FaLocationDot />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 text-lg   focus:outline-none border-green-400"
        />
      </div>

      <button className="bg-blue-500 text-white p-2 rounded-r-lg flex items-center justify-center">
        <FaSearch size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
