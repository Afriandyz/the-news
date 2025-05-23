import React, { useEffect, useState } from "react";
import ImageTextOverlay from "./ImageTextOverlay";
import axios from "axios";
import HorizontalCards from "./HorizontalCards";
import Spinner from "./Spinner";
import VerticalCards from "./VerticalCards";

const API_URL = "https://newsapi.org/v2/everything";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const LatestNews = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fecthLatestNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: "trending",
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
      const selected = shuffled.slice(2, 3);
      setArticle(selected);

      // const maxIndex = article.length - 1;
      // const randomIndex = Math.floor(Math.random() * (maxIndex + 3));

      // const randomArticle = article[randomIndex];
      // setArticle([randomArticle]);
      // console.log(randomArticle)
    } catch (error) {
      setErrorMessage("Terjadi kesalahan saat mengambil data", error);
      console.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fecthLatestNews();
  }, []);

  if (loading) {
    return (
      <div className="p-4 mt-10 text-center">
        <Spinner />
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto mt-8 lg:mt-24 font-newsreader">
      <div className="text-5xl border-b">
        <h1 className="font-bold">Latest News</h1>
      </div>
      {/* Container 1 */}
      <div className="mt-7 grid grid-cols-1 lg:grid-cols-2">
        {/* Container 1.1 */}
        <div className="">
          <ImageTextOverlay articles={article} />
        </div>
        {/* Container 1.2 */}
        <div className="space-y-1.5">
          <HorizontalCards />
          <HorizontalCards />
        </div>
      </div>
      {/* Container 2 */}
      <div>
        <VerticalCards />
      </div>
    </main>
  );
};

export default LatestNews;
