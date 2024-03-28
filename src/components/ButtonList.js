import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Songs",
  "Cricket",
  "Cooking",
  "Soccer",
  "Badminton",
  "Current",
  "News",
  "Top",
  "Events",
  "Special",
  "Market",
  "Share Market",
  "Code",
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll no-scrollbar pl-7 whitespace-nowrap">
      {list.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
