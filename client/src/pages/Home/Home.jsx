import React, { useEffect, useRef, useState } from "react";
import { CategoryButton } from "../../components";
import { FiChevronLeft, FiSearch } from "react-icons/fi";
import Shimmer from "../../components/Shimmer/Shimmer";
import ArticleCard from "../../components/Card";

import "./style.css";
import AdBanner from "../../components/AdBanner/AddBanner";
import SearchNotFound from "../../components/SearchNotFound/SearchNotFound";

const categories = [
  "general",
  "world",
  "nation",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
];

//b199ebf8319e786fabba824c668bcdb1

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  const [page, setPage] = useState(1);

  const [searchParam, setSearchParam] = useState("example");
  const [category, setCategory] = useState("general");

  const topHeadline = `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=4349df912b7dfd1e6d3c22d5dbf0e584`;

  const url = `https://gnews.io/api/v4/search?q=${searchParam}&apikey=4349df912b7dfd1e6d3c22d5dbf0e584`;

  const handlePrevNext = (x) => {
    setPage((prev) => {
      if ((prev == 1 && x == -1) || (prev == 2 && x == 1)) return prev;
      return prev + x;
    });
  };
  const searchFunc = async () => {
    if (!searchParam?.trim()) {
      return;
    }
    try {
      const data = await fetch(url);
      const json = await data.json();

      setSearchResults(json);

      setIsLoading(false);

      if (json.totalArticles === 0) {
        setSearchParam("example");
      }
    } catch (err) {
      console.log("ERROR IN SERACH", err.message);
    }
  };

  const fetchCategoryFunc = async () => {
    if (!searchParam?.trim()) {
      return;
    }
    try {
      const data = await fetch(topHeadline);
      const json = await data.json();

      setSearchResults(json);

      setIsLoading(false);
    } catch (err) {
      console.log("ERROR IN CATEGORY", err.message);
    }
  };

  useEffect(() => {
    searchFunc();
  }, []);

  useEffect(() => {
    fetchCategoryFunc();
  }, [category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className={`w-full  p-4 md:p-10  bg-gray-300 `}>
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold">Discover</h2>
        </div>
        <p className="text-gray-500 mb-4">News from all around the world</p>
        <div className="flex items-center bg-white rounded-md p-2 mb-6">
          <input
            onChange={(e) => setSearchParam(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none "
          />
          <button
            onClick={() => {
              setIsLoading(true);
              searchFunc();
            }}
          >
            <FiSearch size={24} className="text-gray-400 mr-2" />
          </button>
        </div>
        <div className="flex space-x-2 mb-6 overflow-x-auto container">
          {categories.length > 0 &&
            categories.map((item, index) => {
              return (
                <CategoryButton
                  key={index}
                  setIsLoading={setIsLoading}
                  setSearchCategory={setCategory}
                  label={item}
                />
              );
            })}
        </div>
        <div className="space-y-4">
          {isLoading
            ? Array(5)
                .fill("")
                .map((_, index) => <Shimmer key={index} />)
            : searchResults?.articles?.length > 0 &&
              searchResults?.articles
                .slice(page * 2 - 2, page * 2)
                ?.map((item, index) => {
                  return <ArticleCard key={index} data={item} />;
                })}
        </div>
        <div>
          {searchResults?.articles?.length === 0 && (
            <SearchNotFound tryAgain={searchFunc} />
          )}
        </div>

        {searchResults?.articles?.length > 0 && (
          <div className="w-full flex gap-1 justify-center items-center mt-4 mb-4  ">
            <span
              onClick={() => {
                handlePrevNext(-1);
              }}
              className={
                page == 1
                  ? "p-2 md:p-3 opacity-0"
                  : "p-2 md:p-3 bg-blue-950 text-white cursor-pointer"
              }
            >
              Prev
            </span>
            {Array(searchResults?.articles?.length / 2)
              .fill(0)
              .map((_, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => setPage(index + 1)}
                    className={
                      page === index + 1
                        ? "p-2 md:p-3 bg-gray-400 text-yellow-100 cursor-pointer"
                        : "p-2 md:p-3 bg-gray-900 text-yellow-100 cursor-pointer"
                    }
                  >
                    {index + 1}
                  </span>
                );
              })}
            <span
              onClick={() => handlePrevNext(1)}
              className={
                page == searchResults?.articles?.length / 2
                  ? "p-2 md:p-3 opacity-0"
                  : "p-2 md:p-3 bg-blue-950 text-white cursor-pointer"
              }
            >
              Next
            </span>
          </div>
        )}
      </div>
      <div className="bg-gray-100 overflow-hidden hidden  md:flex md:gap-3 md:flex-col">
        {Array(7)
          .fill("")
          .map((_, index) => (
            <Shimmer key={index} />
          ))}
      </div>
    </div>
  );
};

export default Home;
