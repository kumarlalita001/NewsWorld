import React from "react";

const Shimmer = () => {
  return (
    <div className="animate-pulse bg-white shadow-lg rounded-lg overflow-hidden w-full h-[200px] mx-auto">
      <div className="bg-gray-300 w-full"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded mb-4 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded mb-4 w-4/5"></div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
