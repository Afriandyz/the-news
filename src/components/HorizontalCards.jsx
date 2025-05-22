import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const API_URL = "https://newsapi.org/v2/everything";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const HorizontalCards = () => {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState("");
  const fecthLatestNews = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: "tragedy",
          sortBy: "publishedAt",
          pageSize: 20,
          apiKey: API_KEY,
        },
      });

      const article = response.data.articles;
      const shuffled = [...article].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 1);
      setArticle(selected);

      // const maxIndex = article.length - 1;
      // const randomIndex = Math.floor(Math.random() * (maxIndex + 3));

      // const randomArticle = article[randomIndex];
      // setArticle([randomArticle]);
      // console.log(randomArticle)
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data", error);
      console.error(error);
    }
  };

  useEffect(() => {
    fecthLatestNews();
  }, []);

  return (
    <div className="h-48 flex items-center mb-3 mt-2 lg:mt-0">
      {article.map((item, index) => {
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
              className="max-w-1/2 h-full flex flex-col justify-center"
            >
              <h1 className="text-lg font-semibold hover:text-orange-700 cursor-pointer">{item.title}</h1>
              <div className="flex flex-wrap gap-3 items-center text-sm">
                <span>{item.author ? item.author : "Unknown"}</span>
                <span> - </span>
                <span>{formattedDate}</span>
              </div>
            </div>
            <div className="max-w-1/2 w-full ml-2">
              <img
                src={item.urlToImage}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          </>
        );
      })}
      {/* Left */}
      {/* <div className="max-w-1/2 h-full flex flex-col justify-center">
        <h1 className="text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          sed!
        </h1>
        <div className="flex gap-3 items-center text-sm">
          <span>Author</span>
          <span> - </span>
          <span>Date</span>
        </div>
      </div> */}
      {/* Right */}
      {/* <div className="max-w-1/2 w-full">
        <div className="relative overflow-hidden">
          <img
            src="src\assets\bg.jpg"
            alt=""
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      </div> */}
    </div>
  );
};

export default HorizontalCards;
