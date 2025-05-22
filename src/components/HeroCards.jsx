import { Link } from "react-router-dom";

const HeroCards = () => {
  const cardItems = [
    {
      title: "World Wide",
      description: "Economic policies are shaping international markets",
      image: `src/assets/worldwide.jpg`,
      path: "/world-news",
    },
    {
      title: "Technology",
      description: "The latest trends in AI and innovation",
      image: `src/assets/technology.jpg`,
      path: "/technology",
    },
    {
      title: "Health",
      description: "Analyzing the effects of global health policies",
      image: `src/assets/health.jpg`,
      path: "/health",
    },
    {
      title: "Sports",
      description: "Affect the integrity and future of professional sports",
      image: `src/assets/sports.jpg`,
      path: "/sports",
    },
  ];

  return (
    <div className="">
      <section className=" grid grid-cols-2 md:flex justify-center">
        {cardItems.map((item, index) => {
          return (
            <Link
              to={item.path}
              key={index}
              className="flex items-center gap-2 max-w-[300px] hover:text-orange-700"
            >
              <img src={item.image} alt={item.title} className="size-20" />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default HeroCards;
