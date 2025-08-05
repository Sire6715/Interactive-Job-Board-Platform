export interface ButtonProps {
  style: string;
  text: string;
  onClick?: () => void;
}

export interface ReactNodeProps {
  children: React.ReactNode;
}

export interface JobListingProps {
  id: number;
  title: string;
  company: string;
  about_company: string;
  job_description: string;
  job_title: string;
  job_type: "Full Time" | "Part Time" | "Contract" | string;
  location: string;
  experience: string;
  role_and_responsibility: string;
  education_and_skills: string;
  apply_link: string;
  posted_date: string;
}

export interface StateContextType {
  jobs: JobListingProps[] | null;
  isLoading: boolean;
  error: string | null;
  noOfJobs: number;
  moreJobs: () => void;
  jobsToDisplay: JobListingProps[] | null;
  selectedJob: JobListingProps | null;
  setSelectedJob: React.Dispatch<React.SetStateAction<JobListingProps | null>>;
  isMobile: boolean;
  query: string,
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  search: (jobsToDisplay: JobListingProps[]) => JobListingProps[];
  filteredJobs: JobListingProps[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedLocation: string;
  setSelectedLocation: React.Dispatch<React.SetStateAction<string>>;
  selectedExperience: string;
  setSelectedExperience: React.Dispatch<React.SetStateAction<string>>
}

// In JobDetail.tsx
export interface JobDetailProps {
  job: JobListingProps | null;
}
