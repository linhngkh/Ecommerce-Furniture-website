import Blog from "../components/Blog";
import DiscountItem from "../components/DiscountItem";
import Features from "../components/Features";
import Footer from "../components/Footer";
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
      <Footer />
    </section>
  );
};

export default HomeScreen;
