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
    </section>
  );
};

export default HomeScreen;
