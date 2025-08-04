import React, { createContext, useContext, useEffect, useState } from "react";
import { ReactNodeProps } from "@/interfaces/index";
import useFetchData from "@/hooks/useFetchData";
import { JobListingProps, StateContextType } from "@/interfaces/index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any

const StateContext = createContext<StateContextType | undefined>(undefined);

export const ContextProvider: React.FC<ReactNodeProps> = ({ children }) => {
  const {
    isLoading,
    data: jobs,
    error,
    fetchData,
  } = useFetchData<JobListingProps[]>();

  const [noOfJobs, setNoOfJobs] = useState(6);

  const moreJobs = () => {
    setNoOfJobs((prev) => prev + 6);
  };

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
      value={{ jobs, isLoading, error, noOfJobs, moreJobs }}
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
