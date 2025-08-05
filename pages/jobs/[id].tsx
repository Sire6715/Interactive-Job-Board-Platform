import { useRouter } from "next/router";
import { useStateContext } from "@/components/context/ContextProvider";
import JobDetail from "@/components/job/JobDetail";
import { League_Spartan } from "next/font/google";
import { JobDetailProps } from "@/interfaces";

const league_spartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});


export default function JobDetailPage() {   
     const router = useRouter();
     const { id } = router.query;
     const { jobsToDisplay } = useStateContext();

     const job = jobsToDisplay?.find(job => job.id.toString() === id?.toString()) ?? null;


     return (
        <div className={`${league_spartan.className} col-span-2  p-10 lg:p-20 mt-4 lg:flex flex-col gap-8 bg-white h-screen scrollbar_hidden overflow-y-scroll`}>
          <JobDetail job={job} />
        </div>)
}

