import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const navList = [
    {
      name: "World News",
      to: "/world-news",
    },
    {
      name: "Politics",
      to: "/politics",
    },
    {
      name: "Business",
      to: "/business",
    },
    {
      name: "Technology",
      to: "/technology",
    },
    {
      name: "Health",
      to: "/health",
    },
    {
      name: "Sports",
      to: "/sports",
    },
    {
      name: "Podcast",
      to: "/podcast",
    },
  ];

  return (
    <nav className="max-w-7xl mx-auto mt-2 font-newsreader">
      <div className="flex items-center justify-center mb-2 border-b border-t p-2">
        <CiSearch className="w-5 h-5" />
        <input type="text" placeholder="What's happening in the world?" className="focus:outline-none w-[320px] p-2" />
      </div>
      <div className="text-center">
        <h1 className="font-bokor text-8xl">The News</h1>
      </div>
      <div className="border-b border-t p-3">
        <ul className="flex flex-wrap justify-center">
          {navList.map((item, index) => {
            return (
              <li key={index} className="mr-12 text-lg hover:text-orange-700">
                <Link to={item.to}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
