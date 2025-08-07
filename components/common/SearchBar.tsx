import React from "react";
import { useStateContext } from "@/components/context/ContextProvider";
import Image from "next/image";
import { Icons } from "@/constants";

const SearchBar = () => {
  const { setQuery } = useStateContext();
  return (
    <div className={"flex w-[80%] relative search-input"}>
      <input
        type="text"
        placeholder="Search for jobs, companies, or locations"
        className="w-full p-1 lg:p-2 search bg-white !rounded-full border placeholder:text-gray-400 placeholder:text-[15px] lg:placeholder:text-[20px] tracking-wider border-gray-300"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="bg-[#FFA800] absolute right-[5px] cursor-pointer p-0.5 lg:p-1 bottom-[7px] rounded-full ml-2">
        <Image src={Icons.search} alt="Search Icon" height={24} width={24} />
      </div>
    </div>
  );
};

export default SearchBar;
