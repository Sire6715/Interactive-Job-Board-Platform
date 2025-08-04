import React from 'react'
import Jobs from '../common/Jobs'
import Button from '../common/Button'
import { useStateContext } from '../context/ContextProvider'

const JobListing = () => {
  const { moreJobs } = useStateContext();

  
  return (
    <div className="flex-col scrollbar_hidden h-screen overflow-y-scroll grid-span-1 w-[100%] gap-2 items-center">
     <Jobs />
      <div className="flex justify-around gap-4 w-[100%] my-4 items-center">
        <Button onClick={() => moreJobs()} style="bg-black py-[10px]  cursor-pointer font-Bold lg:text-[20px] text-[15px] rounded-lg w-[50%] text-white" text="Show more jobs" />
      </div>
    </div>
  )
}

export default JobListing