import React, { useEffect, useState } from "react";
import IntroOverlay from "src/atoms/IntroOverlay";
import MenuBar from "src/atoms/MenuBar";
import ScrollProgressBar from "src/atoms/ScrollProgressBar";
import useTitle from "src/utilities/hooks/useTitle";
import "./MainLayout.css";
import Footer from "src/atoms/Footer";

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  const [loadedIntro, setLoadedIntro] = useState<boolean>(false);
  useTitle("HTC Team");

  useEffect(() => {
    !loadedIntro && window.scrollTo(0, 0);

    const timeout = setTimeout(() => {
      !loadedIntro && setLoadedIntro(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <IntroOverlay />
      <div className="main-layout">
        <MenuBar />

        <ScrollProgressBar />

        {children}
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
