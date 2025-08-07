import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import { Icons } from "@/constants";
import { JobDetailProps } from "@/interfaces";
import { useRouter } from "next/router";
import { useStateContext } from "@/components/context/ContextProvider";
import JobForm from "./JobForm";
import { motion } from "framer-motion";

const JobDetail: React.FC<JobDetailProps> = ({ job }) => {
  const { setSelectedJob, isOpen, setIsOpen, selectedJob } = useStateContext();
  const router = useRouter();
  if (!job) return <p>Job not found.</p>;

  if (isOpen)
    return (
      <div className="col-span-2 scrollbar_hidden  h-screen overflow-y-scroll">
        <JobForm job={selectedJob} />
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`col-span-2 lg:p-15 mt-4 lg:flex flex-col gap-8 bg-white h-screen scrollbar_hidden overflow-x-hidden overflow-y-scroll`}
    >
      <div>
        <div
          onClick={() => router.back()}
          className="flex lg:hidden gap-4 mb-2 bg-white"
        >
          <Image
            src={Icons.back_arrow}
            alt="Back Arrow"
            height={44}
            width={44}
          />
        </div>
        <h1 className="text-[25px] lg:text-[30px] font-bold text-[#56b8b5]">
          {job.company}
        </h1>
        <span className="flex flex-col gap-1">
          <p className="text-gray-600 text-[25px] lg:text-[35px] font-bold">
            {job.job_title}
          </p>
          <p className="text-[17px] font-semibold neutral-gray-400">
            {job.location}
          </p>
        </span>
        <p className="text-[17px] font-semibold gap-4 ">
          <span className="text-[17px] font-semibold neutral-gray-400">
            Posted On:
          </span>{" "}
          {job.posted_date}
        </p>
      </div>
      <div className="w-[95%] m-6">
        <hr className="border-gray-300" />
      </div>
      <div>
        <h1 className="text-gray-600 text-[25px] lg:text-[35px] font-bold mb-4">
          Job Description/Requirements
        </h1>
        <ul className=" flex flex-col lg:text-[20px] my-8">
          <li>
            <span className="font-bold text-gray-600">Job title:</span>{" "}
            {job.title}
          </li>
          <li>
            <span className="font-bold text-gray-600">Job type:</span>{" "}
            {job.job_type}
          </li>
          <li>
            <span className="font-bold text-gray-600">Location:</span>{" "}
            {job.location}
          </li>
          <li>
            <span className="font-bold text-gray-600">Experience:</span>{" "}
            {job.experience}
          </li>
          <li>
            <span className="font-bold text-gray-600">
              Role and Responsibility:
            </span>{" "}
            {job.role_and_responsibility}
          </li>
        </ul>
        <h2 className="text-gray-600 text-[25px] lg:text-[35px] font-bold">
          Job Description
        </h2>
        <p className="text-gray-600 text-[17px] lg:text-[20px] mb-8 leading-6 lg:leading-7 lg:w-[75%]">
          {job.job_description}
        </p>
        <h3 className="text-gray-600 text-[25px] lg:text-[35px] font-bold">
          Education and Skills
        </h3>
        <p className="text-gray-600 lg:text-[20px] mb-8 leading-6 lg:leading-7 lg:w-[75%]">
          {job.education_and_skills}
        </p>
      </div>
      <div>
        <h2 className="text-gray-600 text-[25px] lg:text-[35px] font-bold">
          About Company
        </h2>
        <p className="text-gray-600 lg:text-[20px] mb-8 leading-6 lg:leading-7 lg:w-[75%]">
          {job.about_company}
        </p>
      </div>
      <div className="w-[95%] my-6">
        <hr className="border-gray-300" />
      </div>
      <div className="flex justify-around gap-4 w-[100%] lg:w-[60%] items-center">
        <Button
          style="bg-[#56b8b5] py-[10px] cursor-pointer font-Bold text-[15px] lg:text-[20px] rounded-lg w-[50%] text-white"
          text="Apply Now"
          onClick={() => {
            setSelectedJob(job);
            setIsOpen(!isOpen);
          }}
        />
        <Button
          style="bg-[#FFA800] py-[10px] cursor-pointer  font-Bold text-[15px] lg:text-[20px] rounded-lg w-[50%] text-white"
          text="Apply on employer site"
          onClick={() => router.push(`${job.apply_link}`)}
        />
      </div>
    </motion.div>
  );
};

export default JobDetail;
