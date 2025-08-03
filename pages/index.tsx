import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import JobListing from "@/components/job/JobListing";
import JobDetail from "@/components/job/JobDetail";
import { League_Spartan } from "next/font/google";


const league_spartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${league_spartan.className} font-sans grid grid-cols-1 lg:grid-cols-3`}
    >
      <JobListing />
      <JobDetail />
    </div>
  );
}
