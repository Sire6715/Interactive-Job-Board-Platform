import React from "react";
import Image from "next/image";
import { Icons } from "@/constants";
import { useStateContext } from "../context/ContextProvider";
import Link from "next/link";


const Jobs: React.FC = () => {
  const { isLoading, setSelectedJob, isMobile, filteredJobs } = useStateContext();


  if (isLoading) return <p className="text-center mt-4">Loading jobs...</p>;
  if (filteredJobs.length === 0) return <p className="text-center mt-4">No jobs ...</p>;

  return (
    <div className="w-full ml-4 lg:ml-0">
      {filteredJobs.map((job) => {
        const JobCard = (
          <div
            key={job.id}
            onClick={() => {
              if (!isMobile) {
                setSelectedJob(job);
              }
            }}
            className="grid cursor-pointer w-[95%] p-4 lg:px-12 lg:py-7 relative mt-4 bg-white rounded-lg shadow-lg shadow-black/10"
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
                <li>1d ago</li>
                <li className="relative before:content-['•'] before:mx-2 first:before:content-none">
                  {job.job_type}
                </li>
                <li className="relative before:content-['•'] before:mx-2 first:before:content-none">
                  {job.location}
                </li>
              </ul>
            </div>

            {isMobile && (
              <div className="lg:hidden bg-[#5ba4a4] hover:bg-[#579a9a] transition-transform duration-300 cursor-pointer flex flex-col justify-center items-center absolute w-[7%] h-full right-0 rounded-r-lg">
                <Image
                  src={Icons.arrow_right}
                  alt="Arrow Right"
                  height={35}
                  width={35}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </div>
            )}
          </div>
        );

        // Wrap in <Link> only on mobile
        return isMobile ? (
          <Link key={job.id} href={`/jobs/${job.id}`} onClick={() => setSelectedJob(job)}>
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
