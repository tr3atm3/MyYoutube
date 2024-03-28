import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return;
  return (
    <div className="mx-6 my-8 w-[10%]">
      <ul>
        <Link to="/">
          <li className=" p-2 text-center rounded-full hover:bg-gray-200">
            Home
          </li>
        </Link>
        <li className=" p-2 text-center rounded-full hover:bg-gray-200">
          Shorts
        </li>
        <li className=" p-2 text-center rounded-full hover:bg-gray-200">
          Subscription
        </li>
      </ul>

      <h1 className="mt-4 ml-4 font-bold">You</h1>
      <ul>
        <li className=" p-2 text-center rounded-full hover:bg-gray-200">
          History
        </li>
        <li className=" p-2 text-center rounded-full hover:bg-gray-200">
          Watch later
        </li>
        <li className=" p-2 text-center rounded-full hover:bg-gray-200">
          Downloads
        </li>
        <li className=" p-2 text-center rounded-full hover:bg-gray-200">
          Liked Videos
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
