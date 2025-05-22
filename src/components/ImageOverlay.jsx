import React from "react";

const ImageOverlay = ({ articles }) => {
  return (
    <div className="relative w-full">
      {articles.map((item) => {
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
            <div className="relative overflow-hidden cursor-pointer">
              <img
                src={item.urlToImage}
                alt={item.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 top-0 left-0 right-0 p-6">
              <div className="bg-slate-100 max-w-[70%] lg:max-w-[60%] p-2 rounded-md">
                <div className="bg-slate-900 w-fit p-2 rounded-md text-white">
                  <span>{formattedDate}</span>
                </div>
                <div className="mt-2 h-64 p-2 flex flex-wrap flex-col justify-between">
                    <span className="font-semibold">{item.title}</span>
                    <span className="underline">{item.author}</span>
                </div>
              </div>
            </div>
          </>

          //   Text Overla
        );
      })}
      {/* <div className="relative overflow-hidden cursor-pointer">
        <img
          src="src\assets\bg.jpg"
          alt=""
          className="w-full h-96 object-cover"
        />
      </div> */}

      {/* Text Overlay */}
      {/* <div className="absolute bottom-0 top-0 left-0 right-0 p-6">
        <div className="bg-slate-100 max-w-sm p-2 rounded-md">
          <div className="bg-slate-900 w-fit p-2 rounded-md text-white">
            <p>Date</p>
          </div>

          <div className="bg-red-400 mt-2 h-64 p-2 flex flex-col justify-between">
            <p className="font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
              culpa?
            </p>
            <p>Author</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ImageOverlay;
