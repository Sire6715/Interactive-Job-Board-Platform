import React from "react";
import Image from "next/image";
import { Icons } from "@/constants";
import { useStateContext } from "../context/ContextProvider";
import Link from "next/link";
import { motion } from "framer-motion";
import PostedDate from "./PostedDate";

const Jobs: React.FC = () => {
  const {
    isLoading,
    setSelectedJob,
    isMobile,
    filteredJobs,
    setIsOpen,
    selectedJob,
  } = useStateContext();

  if (isLoading) return <p className="text-center mt-4">Loading jobs...</p>;
  if (filteredJobs.length === 0)
    return <p className="text-center mt-4">No jobs ...</p>;

  return (
    <div onClick={() => setIsOpen(false)} className="w-full mx-4 lg:ml-0">
      {filteredJobs.map((job) => {
        const isSelected = selectedJob?.id === job?.id;
        const JobCard = (
          <motion.div
            key={job.id}
            onClick={() => {
              if (!isMobile) {
                setIsOpen(false);
                setSelectedJob(job);
              }
            }}
            className={`grid cursor-pointer w-[95%] p-4 lg:px-12 lg:py-7 hover:border-l-4 relative mt-4  rounded-lg shadow-lg shadow-black/10 transition-all duration-200 
        ${
          isSelected ? "bg-[#e0f0f0] border-l-4 border-[#56b8b5]" : "bg-white"
        }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-1 lg:gap-2">
              <h1 className="text-[17px] lg:text-[20px] font-bold text-[#56b8b5]">
                {job.company}
              </h1>
              <p className="text-gray-600 text-[15px] lg:text-[25px] font-bold">
                {job.job_title}
              </p>
              <p className="text-gray-600 text-[14px] lg:text-[17px]">
                {job.title}
              </p>
              <ul className="flex text-[10px] lg:text-[15px] font-semibold lg:gap-4 neutral-gray-400">
                <PostedDate dateString={job.posted_date} />
                <li className="relative before:content-['•'] before:mx-2 first:before:content-none">
                  {job.job_type}
                </li>
                <li className="relative before:content-['•'] before:mx-2 first:before:content-none">
                  {job.location}
                </li>
              </ul>
            </div>
          </motion.div>
        );

        // mobile
        return isMobile ? (
          <Link
            key={job.id}
            href={`/jobs/${job.id}`}
            onClick={() => setSelectedJob(job)}
          >
            {" "}
            {JobCard}
          </Link>
        ) : (
          JobCard
        );
      })}
    </div>
  );
};

export default Jobs;
