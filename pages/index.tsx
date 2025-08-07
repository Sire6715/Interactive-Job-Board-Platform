import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import JobListing from "@/components/job/JobListing";
import JobDetail from "@/components/job/JobDetail";
import { League_Spartan } from "next/font/google";
import { useStateContext } from "@/components/context/ContextProvider";
import JobForm from "@/components/job/JobForm";


const league_spartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export default function Home() {
  const { selectedJob, isMobile } = useStateContext();
   


  return (
    <div
      className={`${league_spartan.className} font-sans grid grid-cols-1 lg:grid-cols-3`}
    >
      <JobListing />
      {!isMobile && selectedJob ? (      
          <JobDetail job={selectedJob} />
      ) : null}
      {/* <JobForm job={selectedJob} /> */}
    </div>
  );
}
