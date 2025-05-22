import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const API_URL = "https://newsapi.org/v2/everything";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const HeroLatestNews = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fecthHeadlineNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: "world",
          sortBy: "relevancy",
          apiKey: API_KEY,
        },
      });

      const article = response.data.articles;
      const maxIndex = Math.min(95, article.length - 1);
      const randomIndex = Math.floor(Math.random() * (maxIndex - 1));

      const randomArticle = article[randomIndex];
      setArticle([randomArticle]);
      console.log(randomArticle);

      //   setArticle(response.data);
      //   console.log(response.data.articles);
    } catch (error) {
      setError("Terjadi kesalahan saat mengambil data", error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fecthHeadlineNews();
  }, []);

  return (
    <section className="mt-8">
      <div className="relative">
        {article.map((item) => {
          const { publishedAt } = item;
          const date = new Date(publishedAt);
          const formattedDate = date.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric", 
            month: "long", 
            day: "numeric", 
          });

          return (
            <div key={item.id}>
              <div className="w-full h-[580px]">
                <img
                  src={item.urlToImage}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="mt-7 grid grid-cols-1 lg:flex">
                <div className="flex flex-col w-full">
                  <div className="p-2 border max-w-fit mb-5 lg:mb-2">
                    <span>{item.author ? item.author : "Unknown"}</span>
                  </div>
                  <h3 className="font-bold text-6xl hover:text-orange-700">{item.title}</h3>
                </div>
                <div className="flex w-[50%] mt-5 lg:mt-0 items-start lg:items-end flex-col space-y-5">
                  <span className="text-lg">{formattedDate}</span>
                  <button className="p-2 border hover:text-orange-600 transition-all delay-100 ease-in-out mt-5 lg:mt-0">Read The Article</button>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="w-full h-[580px]">
          <img
            src="src\assets\bg.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>

        <div className="mt-7 grid grid-cols-1 lg:flex">
          <div className="flex flex-col w-full">
            <div className="p-2 border max-w-fit mb-2">
              <span className="font-light">Author Name</span>
            </div>
            <h3 className="font-bold text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur officia optio unde minus ducimus repellat itaque, non
              dicta est repellendus.
            </h3>
          </div>
          <div className="flex w-[50%] items-end flex-col justify-evenly">
            <div>Date News</div>
            <div>Read The Article</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroLatestNews;
