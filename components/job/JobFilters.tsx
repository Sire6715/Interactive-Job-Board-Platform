// components/JobFilters.tsx
import React from "react";
import Button from "../common/Button";
import { useStateContext } from "@/components/context/ContextProvider";

const JobFilters: React.FC = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    selectedExperience,
    setSelectedExperience,
    jobsToDisplay,
    clearFilters
  } = useStateContext();


  // Dynamically extract unique values
  const uniqueCategories = [
    ...new Set((jobsToDisplay ?? []).map((job) => job.job_title.split(" ")[0])),
  ];
  const uniqueLocations = [
    ...new Set((jobsToDisplay ?? []).map((job) => job.location)),
  ];
  const uniqueExperiences = [
    ...new Set((jobsToDisplay ?? []).map((job) => job.experience)),
  ];

  return (
    <div className=" lg:w-[95%] px-0 flex scrollbar_hidden overflow-scroll  lg:flex-row gap-4 p-4 bg-white rounded-lg shadow-md mb-4">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm max-w-[300px] outline-none focus:ring-2 focus:ring-teal-400"
      >
        <option value="">All Categories</option>
        {uniqueCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 max-w-[300px] text-sm outline-none focus:ring-2 focus:ring-teal-400"
      >
        <option value="">All Locations</option>
        {uniqueLocations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      {/* Experience Filter */}
      <select
        value={selectedExperience}
        onChange={(e) => setSelectedExperience(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm max-w-[300px] outline-none focus:ring-2 focus:ring-teal-400"
      >
        <option value="">All Experience Levels</option>
        {uniqueExperiences.map((exp) => (
          <option key={exp} value={exp}>
            {exp}
          </option>
        ))}
      </select>

      <Button
        onClick={clearFilters}
        text={"Clear"}
        style={
          "px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition"
        }
      />
    </div>
  );
};

export default JobFilters;
