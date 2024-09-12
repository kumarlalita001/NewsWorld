import React from "react";

const SearchNotFound = ({ tryAgain }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        No Results Found
      </h2>
      <p className="text-gray-500 mb-6">
        We couldn’t find any articles matching your search. Please try again.
      </p>
      <button
        onClick={() => {
          console.log("try again");
          tryAgain();
        }}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Try Again
      </button>
    </div>
  );
};

export default SearchNotFound;
