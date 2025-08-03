import React from "react";
import { Image_path, Icons } from "@/constants";
import Image from "next/image";
import { League_Spartan } from "next/font/google";


const league_spartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});


const Header: React.FC = () => {
  return (
    <div
      className={`${league_spartan.className} h-[100px] lg:h-[200px] w-screen flex justify-center items-center bg-cover bg-center primary-green`}
      style={{ backgroundImage: `url(${Image_path.background_Desktop})` }}
    >
     <input
     type= "text"
     placeholder="Search for jobs, companies, or locations"
     className="w-[70%] p-1 lg:p-2  bg-white rounded-full border placeholder:text-gray-400 placeholder:text-[15px] border-gray-300"
     />
     <div className="bg-[#FFA800] cursor-pointer p-1 lg:p-2 rounded-full ml-2">
       <Image
         src={Icons.search}
         alt="Search Icon"
         height={24}
         width={24}
       />
     </div>
    </div>
  );
};

export default Header;
