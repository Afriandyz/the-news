import React from "react";

const PodcastCard = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((item, index) => {
        const { publishedAt } = item;
        const date = new Date(publishedAt);
        const formattedDate = date.toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        return (
          <>
            <div
              key={index}
              className="flex items-center w-fit p-1.5 mt-2"
            >
              <div className="w-full md:w-[200px]">
                <img
                  src={item.urlToImage}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />
              </div>
              <div className="flex w-full md:max-w-[200px] flex-wrap justify-center ml-3 gap-5 flex-col">
                <p className="line-clamp-1 font-semibold">{item.title}</p>
                <p className="line-clamp-2">{item.description}</p>
                <div className="flex">
                  <span className="font-light">{formattedDate}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default PodcastCard;
