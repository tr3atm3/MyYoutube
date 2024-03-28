import React from "react";

const Shimmer = () => {
  return (
    <div className="m-6">
      <div className="w-72 h-48 rounded-3xl bg-slate-300"></div>
      <div className="w-72 h-10 my-2 rounded-full bg-slate-300"></div>
      <div className="w-72 h-10 my-2 rounded-full bg-slate-300"></div>
    </div>
  );
};
const ShimmerContainer = () => {
  return (
    <div className="flex flex-wrap m-2 justify-center ">
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  );
};

export default ShimmerContainer;
