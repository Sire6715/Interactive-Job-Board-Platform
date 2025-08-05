import React, { createContext, useContext, useEffect, useState } from "react";
import { ReactNodeProps } from "@/interfaces/index";
import useFetchData from "@/hooks/useFetchData";
import { JobListingProps, StateContextType } from "@/interfaces/index";
import { Job_Data } from "@/constants";
import { useScreenSize } from "@/hooks/useScreenSize";

const StateContext = createContext<StateContextType | undefined>(undefined);
export const ContextProvider: React.FC<ReactNodeProps> = ({ children }) => {
  const {
    isLoading,
    data: jobs,
    error,
    fetchData,
  } = useFetchData<JobListingProps[]>();
  const screenSize = useScreenSize();

  const [noOfJobs, setNoOfJobs] = useState(5);
  const [selectedJob, setSelectedJob] = useState<JobListingProps | null>(null);
  const isMobile = screenSize === "xs" || screenSize === "sm";
  const moreJobs = () => {
    setNoOfJobs((prev) => prev + 5);
  };
  const [query, setQuery] = React.useState<string>("");
  const keys = ["job_title", "company", "location"];
  const jobsToDisplay = !jobs || jobs.length === 0 ? Job_Data : jobs; ///fallback Data if fetching fails
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const search = (jobsToDisplay: JobListingProps[]) => {
    return jobsToDisplay.filter((job) => {
      const matchesQuery = keys.some((key) =>
        String(job[key as keyof JobListingProps])
          .toLowerCase()
          .includes(query.toLowerCase())
      );

      const matchesCategory =
        !selectedCategory ||
        job.job_title.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesLocation =
        !selectedLocation ||
        job.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesExperience =
        !selectedExperience ||
        job.experience.toLowerCase().includes(selectedExperience.toLowerCase());

      return (
        matchesQuery && matchesCategory && matchesLocation && matchesExperience
      );
    });
  };

  

  const filteredJobs = search(jobsToDisplay ?? []).slice(0, noOfJobs);

  useEffect(() => {
    const url = "https://jobs-api19.p.rapidapi.com/jobs?limit=16";
    const headers = {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY!,
      "x-rapidapi-host": "jobs-api19.p.rapidapi.com",
    };

    fetchData(url, headers);
  }, []);

  return (
    <StateContext.Provider
      value={{
        jobs,
        isLoading,
        error,
        noOfJobs,
        moreJobs,
        jobsToDisplay,
        selectedJob,
        setSelectedJob,
        isMobile,
        query,
        setQuery,
        search: (jobsToDisplay) => search(jobsToDisplay),
        filteredJobs,
        selectedCategory,
        setSelectedCategory,
        selectedLocation,
        setSelectedLocation,
        selectedExperience,
        setSelectedExperience,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context)
    throw new Error("useStateContext must be used within a ContextProvider");
  return context;
};
