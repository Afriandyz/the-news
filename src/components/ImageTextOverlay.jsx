import React from "react";

const ImageTextOverlay = ({ articles }) => {
  return (
    <div className="relative w-full">
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
          <div key={index}>
            <div className="relative overflow-hidden cursor-pointer ">
              <img
                src={item.urlToImage}
                alt={item.title}
                className="w-full h-96 object-cover"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-3 leading-tight hover:text-orange-500">
                  {item.title}
                </h2>
                <div className="flex items-center gap-3 text-sm">
                  <span>{item.author}</span>
                  <span> - </span>
                  <span>{formattedDate}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="relative overflow-hidden">
        <img
          src={article.urlToImage}
          alt=""
          className="w-full h-96 object-cover"
        />

        {/* Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>  */}

      {/* Text Overlay */}
      {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-2xl font-bold mb-3 leading-tight">
            Hello World
          </h2>
          <div className="flex items-center gap-3 text-sm">
            <span>Category</span>
            <span> - </span>
            <span>Date</span>
          </div>
        </div>
      </div>  */}
    </div>
  );
};

export default ImageTextOverlay;
