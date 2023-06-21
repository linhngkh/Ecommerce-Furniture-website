import Blog from "../components/Blog";
import DiscountItem from "../components/DiscountItem";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Product from "../components/Product";
import Trending from "../components/Trending";

const HomeScreen = () => {
  return (
    <section>
      <HeroSection />
      <Product />
      <Features />
      <Trending />
      <DiscountItem />
      <Blog />
    </section>
  );
};

export default HomeScreen;
