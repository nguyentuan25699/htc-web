import React from "react";
import { HomeContextProvider } from "./context/HomeContext";
import "./HomePage.css";
import HomeTemplate from "./HomeTemplate";
import { useHandleScroll } from "./hooks/useHandleScroll";

const HomePage: React.FC = () => {
  const { scrollPosition } = useHandleScroll();

  return (
    <HomeContextProvider value={{ scrollPosition }}>
      <div className="home-container">
        <HomeTemplate />
      </div>
    </HomeContextProvider>
  );
};

export default HomePage;
