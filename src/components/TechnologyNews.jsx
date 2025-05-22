import React from "react";
import VerticalCards from "./VerticalCards";

const TechnologyNews = () => {
  return (
    <main className="max-w-7xl mx-auto mt-8 lg:mt-24 font-newsreader">
      <div className="text-5xl border-b">
        <h1 className="font-bold">Technology News</h1>
      </div>
      <div className="mt-7">
        <VerticalCards />
      </div>
    </main>
  );
};

export default TechnologyNews;
