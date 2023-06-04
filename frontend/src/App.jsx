import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.screenY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header isTopOfPage={isTopOfPage} />
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default App;
