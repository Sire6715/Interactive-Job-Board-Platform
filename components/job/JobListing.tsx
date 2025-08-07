import React from "react";
import Jobs from "../common/Jobs";
import Button from "../common/Button";
import { useStateContext } from "../context/ContextProvider";
import JobFilters from "./JobFilters";

const JobListing = () => {
  const { moreJobs, filteredJobs, query } = useStateContext();
  const shouldShowMoreButton = query.length > 0 || filteredJobs.length > 0;
  

  return (
    <div className="flex-col scrollbar_hidden h-screen overflow-x-hidden overflow-y-scroll grid-span-1 w-[100%] gap-2 items-center">
      <JobFilters />
      <Jobs />
      {shouldShowMoreButton && (
        <div className="flex justify-around gap-4 w-full my-4 items-center">
          <Button
            onClick={moreJobs}
            style="bg-black py-[10px] cursor-pointer font-bold lg:text-[20px] text-[15px] rounded-lg w-[50%] text-white"
            text="Show more jobs"
          />
        </div>
      )}
    </div>
  );
};

export default JobListing;
