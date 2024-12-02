import React, { useEffect, useState } from "react";
import Footer from "src/components/atoms/Footer";
import IntroOverlay from "src/components/atoms/IntroOverlay";
import Menubar from "src/components/atoms/MenuBar";
import ScrollProgressBar from "src/components/atoms/ScrollProgressBar";
import useTitle from "src/utilities/hooks/useTitle";
import "./MainLayout.css";
import ScrollTop from "src/components/atoms/ScrollTop";

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  const [loadedIntro, setLoadedIntro] = useState<boolean>(false);
  useTitle("HTC Studio");

  useEffect(() => {
    !loadedIntro && window.scrollTo(0, 0);

    const timeout = setTimeout(() => {
      !loadedIntro && setLoadedIntro(true);
    }, 4000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <IntroOverlay />
      <div className="main-layout">
        <Menubar />

        <ScrollProgressBar />

        {children}
      </div>

      <Footer />

      <ScrollTop />
    </div>
  );
};

export default MainLayout;
