export interface ButtonProps {
  style: string;
  text: string;
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
  posted_date: string; // ISO format (e.g., "2024-07-09T02:21:00")
}

export interface StateContextType {
  jobs: JobListingProps[] | null;
  isLoading: boolean;
  error: string | null;
  noOfJobs: number;
  moreJobs: () => void;
}
