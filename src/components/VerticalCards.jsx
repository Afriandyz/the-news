import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = "https://newsapi.org/v2/everything";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const VerticalCards = () => {
  const [article, setArticle] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fecthLatestNews = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: "technology",
          sortBy: "publishedAt",
          pageSize: 20,
          apiKey: API_KEY,
        },
      });

      const article = response.data.articles;
      const shuffled = [...article].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);
      setArticle(selected);

      // const maxIndex = article.length - 1;
      // const randomIndex = Math.floor(Math.random() * (maxIndex + 3));

      // const randomArticle = article[randomIndex];
      // setArticle([randomArticle]);
      // console.log(randomArticle)
    } catch (error) {
      setErrorMessage("Terjadi kesalahan saat mengambil data", error);
      console.error(errorMessage);
    }
  };

  useEffect(() => {
    fecthLatestNews();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
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
          <div key={index} className="w-full p-1.5 mt-2">
            <div className="w-full">
              <img
                src={item.urlToImage}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="flex flex-col mt-2">
              <p className="font-semibold hover:text-orange-600 cursor-pointer">
                {item.title}
              </p>
              <div className="flex flex-wrap gap-3">
                <span>{item.author ? item.author : 'Unknown'}</span>
                <span> - </span>
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalCards;
