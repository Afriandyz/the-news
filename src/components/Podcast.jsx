import React, { useEffect, useState } from "react";
import PodcastCard from "./PodcastCard";
import axios from "axios";

const API_URL = "https://newsapi.org/v2/everything";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const Podcast = () => {
  const [article, setArticle] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fecthPodcastNews = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: "Podcast",
          sortBy: "publishedAt",
          pageSize: 20,
          apiKey: API_KEY,
        },
      });

      const article = response.data.articles;

      const validArticles = article.filter(
        (article) =>
          article.urlToImage &&
          article.title &&
          article.title !== "[Removed]" &&
          article.description &&
          article.description !== "[Removed]"
      );

      if (validArticles.length < 3) {
        setErrorMessage("Tidak cukup artikel valid yang ditemukan");
        return;
      }

      const shuffled = [...validArticles].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 6);
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
    fecthPodcastNews();
  }, []);

  return (
    <main className="max-w-7xl mx-auto mt-8 lg:mt-24 font-newsreader">
      <div className="text-5xl border-b">
        <h1 className="font-bold">Podcast</h1>
      </div>
      <div className="mt-7">
        <div>
          <PodcastCard articles={article} />
        </div>
      </div>
    </main>
  );
};

export default Podcast;
