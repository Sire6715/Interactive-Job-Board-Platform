import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import { Icons } from "@/constants";

const JobDetail = () => {
  return (
    <div className="hidden col-span-2 p-10 lg:p-20 mt-4 lg:flex flex-col gap-8 bg-white h-screen scrollbar_hidden overflow-y-scroll">
      <div className="">
        <div className="flex lg:hidden gap-4 mb-6 bg-white">
          <Image
            src={Icons.back_arrow}
            alt="Back Arrow"
            height={44}
            width={44}
          />
        </div>
        <h1 className="text-[30px] font-bold text-[#56b8b5]">Anz</h1>
        <span className="flex flex-col gap-1">
          <p className="text-gray-600 text-[35px] font-bold">
            Software Engineer
          </p>
          <p className="text-[17px] font-semibold neutral-gray-400">
            Location: Bengaluru
          </p>
        </span>
        <p className="text-[17px] font-semibold gap-4 ">
          <span className="text-[17px] font-semibold neutral-gray-400">
            Posted On:
          </span>{" "}
          01-Jan-2023
        </p>
      </div>
      <div className="w-[95%] m-6">
        <hr className="border-gray-300" />
      </div>
      <div>
        <h1 className="text-gray-600 text-[30px] font-bold mb-4">
          Job Description/Requirements
        </h1>
        <ul className=" flex flex-col lg:text-[20px] my-8">
          <li>
            <span className="font-bold text-gray-600">Job title:</span> Software
            Engineer
          </li>
          <li>
            <span className="font-bold text-gray-600">Job type:</span> Full Time
          </li>
          <li>
            <span className="font-bold text-gray-600">Location:</span> Bangalore
          </li>
          <li>
            <span className="font-bold text-gray-600">Experience:</span> Fresher
            - 3 Years
          </li>
          <li>
            <span className="font-bold text-gray-600">
              Role and Responsibility:
            </span>{" "}
            Not specified
          </li>
        </ul>
        <h2 className="text-gray-600 text-[30px] font-bold">Job Description</h2>
        <p className="text-gray-600 text-[17px] lg:text-[20px] mb-8 leading-6 lg:leading-7 lg:w-[75%]">
          As a L1 Support you will be part of CMS- command centre you will work
          in Australia Operations Banking domain on rotational shifts. You will
          support multiple critical C1 applications on production environment.
          Ability to interact with individuals at all levels and can work as a
          part of a team, as well as independently.
        </p>
        <h3 className="text-gray-600 text-[30px] font-bold">
          Education and Skills
        </h3>
        <p className="text-gray-600 lg:text-[20px] mb-8 leading-6 lg:leading-7 lg:w-[75%]">
          0-3 years of experience in SQL, Unix/Linux. Hands on knowledge on
          Shell scripting or python will be advantage. Continuous measurement of
          SLA Response and Resolution Service improvements activities like,
          Incident’s reduction, AI and innovation for application stability.
          Batch monitoring and workflow knowledge would be great. Knowledge of
          Incident management and ITIL process.
        </p>
      </div>
      <div>
        <h2 className="text-gray-600 text-[30px] font-bold">About Company</h2>
        <p className="text-gray-600 lg:text-[20px] mb-8 leading-6 lg:leading-7 lg:w-[75%]">
          ANZ is a place where big things happen as we work together to provide
          banking and financial services across more than 30 markets. With more
          than 7,500 people, our Bengaluru team is the bank’s largest
          technology, data & operations centre outside Australia. In operation
          for over 33 years, the centre is critical in delivering the bank’s
          strategy and making an impact for our millions of customers around the
          world. Our Bengaluru team not only drives the transformation
          initiatives of the bank, it also drives a culture that makes ANZ a
          great place to be. We’re proud that people feel they can be themselves
          at ANZ and 90% of our people feel they belong.
        </p>
      </div>
      <div className="w-[95%] my-6">
        <hr className="border-gray-300" />
      </div>
      <div className="flex justify-around gap-4 w-[100%] lg:w-[60%] items-center">
        <Button
          style="bg-[#56b8b5] py-[10px] cursor-pointer font-Bold lg:text-[20px] rounded-lg w-[50%] text-white"
          text="Apply Now"
        />
        <Button
          style="bg-[#FFA800] py-[10px] cursor-pointer  font-Bold lg:text-[20px] rounded-lg w-[50%] text-white"
          text="Apply on employer site"
        />
      </div>
    </div>
  );
};

export default JobDetail;
