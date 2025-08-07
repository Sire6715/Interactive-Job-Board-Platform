import React, { createContext, useContext, useEffect, useState } from "react";
import { ReactNodeProps } from "@/interfaces/index";
import useFetchData from "@/hooks/useFetchData";
import { JobListingProps, StateContextType } from "@/interfaces/index";
import { Job_Data } from "@/constants";
import { useScreenSize } from "@/hooks/useScreenSize";

const StateContext = createContext<StateContextType | undefined>(undefined);
export const ContextProvider: React.FC<ReactNodeProps> = ({ children }) => {
  // Custom hook to fetch job listings
  const {
    isLoading,
    data: jobs,
    error,
    fetchData,
  } = useFetchData<JobListingProps[]>();
  const screenSize = useScreenSize();

  // State variables for managing job listings and filters
  const [noOfJobs, setNoOfJobs] = useState(5);
  const [selectedJob, setSelectedJob] = useState<JobListingProps | null>(null);

  // Determine if the device is mobile based on screen size
  const isMobile =
    screenSize === "xs" || screenSize === "sm" || screenSize === "md";

  // Function to clear all filters
  const clearFilters = () => {
    setQuery("");
    setSelectedCategory("");
    setSelectedLocation("");
    setSelectedExperience("");
  };

  // Function to load more jobs
  const moreJobs = () => {
    setNoOfJobs((prev) => prev + 5);
    if (filteredJobs.length < 5) {
      clearFilters();
    }
  };

  ///fallback Data if fetching fails
  // Use fallback data if jobs are not available
  // This is useful for development or when the API is down
  const jobsToDisplay = !jobs || jobs.length === 0 ? Job_Data : jobs;

  // State variables for search query and filters
  // Initialize query state and keys for filtering
  // This will be used to filter jobs based on user input
  const keys = ["job_title", "company", "location"];
  const [query, setQuery] = React.useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedExperience, setSelectedExperience] = useState<string>("");

  // Function to filter jobs based on search query and selected filters
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

  // Filter jobs based on the search query and selected filters
  const filteredJobs = search(jobsToDisplay ?? []).slice(0, noOfJobs);

  // State to manage the open/close state of job details
  // This is used to toggle the visibility of job details when a job is selected
  const [isOpen, setIsOpen] = useState(false);

  // Effect to fetch job listings when the component mounts
  // It uses the custom fetchData hook to get job listings from the API
  useEffect(() => {
    const url = "https://jobs-api19.p.rapidapi.com/jobs?limit=16";
    const headers = {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY!,
      "x-rapidapi-host": "jobs-api19.p.rapidapi.com",
    };

    fetchData(url, headers);
  }, []);

  //display first job onMount
  // This ensures that when the component mounts, the first job is selected by default either from the fetched data or the fallback data
  useEffect(() => {
    if (jobsToDisplay && jobsToDisplay.length > 0) {
      setSelectedJob(jobsToDisplay[0]);
    }
  }, [jobsToDisplay]);

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
        clearFilters,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the state context
// This hook allows components to access the state context without needing to use useContext directly
export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context)
    throw new Error("useStateContext must be used within a ContextProvider");
  return context;
};
