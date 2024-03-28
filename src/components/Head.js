import React, { useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API } from "../utils/constants";
import { addVideos } from "../utils/videosSlice";

const Head = () => {
  const searchQuery = useRef("");
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const searchValue = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_API + searchQuery.current.value + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();

    dispatch(addVideos(json.items));
  };
  const handleSearchCLick = () => {
    searchValue();
    searchQuery.current.value = "";
  };

  return (
    <div className="flex justify-between items-center px-6 fixed top-0 left-0 bg-white w-full">
      <div className="flex items-center">
        <RxHamburgerMenu
          className="text-xl mr-4 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img
            className="h-14"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
            alt="youtube logo"
          />
        </a>
      </div>
      <div className="flex items-center w-[40%]">
        <input
          type="text"
          className="rounded-l-3xl border border-gray-400 py-2 px-4 text-l text-gray-500 focus:border-blue-500 focus:outline-none focus:caret- w-[80%]"
          placeholder="Search"
          ref={searchQuery}
        />
        <button
          className="text-l py-3 px-4 rounded-r-3xl bg-slate-100 border border-gray-400 "
          onClick={handleSearchCLick}
        >
          <CiSearch />
        </button>
      </div>
      <div>
        <button className="bg-green-800 py-1 px-3 rounded-full font-10 text-white">
          T
        </button>
      </div>
    </div>
  );
};

export default Head;
