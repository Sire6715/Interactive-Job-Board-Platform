import React from "react";
import { Image_path} from "@/constants";
import { League_Spartan } from "next/font/google";
import { useStateContext } from "@/components/context/ContextProvider";
import SearchBar from "../common/SearchBar";
import { useRouter } from "next/router";



const league_spartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

const Header: React.FC = () => {
  const router = useRouter();
  const { isOpen, isMobile } = useStateContext();
  // Check if the current path is a job detail page on mobile
  // This is done by checking if the path matches the pattern for job detail pages
   const isJobDetailMobile =
    isMobile && /^\/jobs\/[^/]+$/.test(router.asPath);

  return (
    <div
      className={`${league_spartan.className} h-[100px] lg:h-[200px] w-screen flex flex-col justify-center items-center bg-cover bg-center primary-green`}
      style={{ backgroundImage: `url(${Image_path.background_Desktop})` }}
    >
       <h1 className="font-bold text-white text-[25px] lg:text-[45px]">JobBoard</h1>
      {!isOpen && !isJobDetailMobile && <SearchBar />}
    </div>
  );
};

export default Header;
