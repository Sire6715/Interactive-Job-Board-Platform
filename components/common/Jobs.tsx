import React from "react";
import Image from "next/image";
import { Icons } from "@/constants";

const Jobs = () => {
  return (
    <div className="w-full ml-4 lg:ml-0">
      <div className="grid  w-[95%] p-4 lg:px-12 lg:py-7 relative mt-4 bg-white rounded-lg shadow-lg shadow-black/10">
        <div className="flex flex-col gap-1 lg:gap-2 ">
          <h1 className="text-[17px] lg:text-[20px] font-bold text-[#56b8b5]">Aspentech</h1>
          <p className="text-gray-600 text-[15px] lg:text-[25px] font-bold">
            Associate Field Support Engineer I
          </p>
          <p className="text-gray-600 text-[14px] lg:text-[17px] ">
            Aspentech hiring fresher for associate field support engineer i |
            bengaluru
          </p>
          <ul className="flex text-[10px] lg:text-[12px] font-semibold lg:gap-4 neutral-gray-400">
            <li>1d ago</li>
            <li className="relative before:content-['•'] before:mx-2 first:before:content-none">
              Full Time
            </li>
            <li className="relative before:content-['•'] before:mx-2 first:before:content-none">
              Bengaluru
            </li>
          </ul>
        </div>
        <div className="lg:hidden bg-[#5ba4a4] hover:bg-[#579a9a] transition-transform duration-300 cursor-pointer flex flex-col justify-center items-center absolute w-[7%] h-full right-0 rounded-r-lg">
          <Image
            src={Icons.arrow_right}
            alt="Arrow Right"
            height={35}
            width={35}
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="grid  w-[95%] px-12 py-7 relative mt-4 bg-white rounded-lg shadow-lg shadow-black/10">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-[20px] font-bold text-[#56b8b5]">Salesforce</h1>
          <p className="text-gray-600 text-[25px] font-bold">
            Kone hiring fresher for data analyst | chennai
          </p>
          <p className="text-gray-600 text-[15px] ">
            Salesforce hiring fresher for associate technical support engineer |
            hyderabad /bangalore
          </p>
          <ul className="flex text-[12px] font-semibold gap-4 neutral-gray-400">
            <li>3d ago</li>
            <li className="relative before:content-['•'] before:mx-2 first:before:content-none">
              Full Time
            </li>
            <li className="relative before:content-['•'] before:mx-2 first:before:content-none">
              Bengaluru
            </li>
          </ul>
        </div>
        <div className="lg:hidden bg-[#5ba4a4] hover:bg-[#579a9a] transition-transform duration-300 cursor-pointer flex flex-col justify-center items-center absolute w-[7%] h-full right-0 rounded-r-lg">
          <Image
            src={Icons.arrow_right}
            alt="Arrow Right"
            height={35}
            width={35}
            className="hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
