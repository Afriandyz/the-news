import Footer from "../components/Footer"
import Hero from "../components/Hero"
import LatestNews from "../components/LatestNews"
import Navbar from "../components/Navbar"
import Podcast from "../components/Podcast"
import TechnologyNews from "../components/TechnologyNews"
import WorldNews from "../components/WorldNews"

const Homepages = () => {
  return (
    <div className="">
        <Navbar />
        <Hero />
        <LatestNews />
        <WorldNews />
        <TechnologyNews />
        <Podcast />
        <Footer />
    </div>
  )
}

export default Homepages