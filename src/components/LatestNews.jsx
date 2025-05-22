import React from "react";

const LatestNews = () => {
  return (
    <main className="max-w-7xl mx-auto mt-8 lg:mt-24 font-newsreader">
      <div className="text-5xl border-b">
        <h1 className="font-bold">Latest News</h1>
      </div>
      <div className="bg-red-500 mt-7 grid grid-cols-1 lg:grid-cols-2">
        {/* Container 1 */}
        <div className="bg-amber-300"> hello world</div>
        {/* Container 2 */}
        <div className="bg-amber-700"> hello world</div>
      </div>
    </main>
  );
};

export default LatestNews;
