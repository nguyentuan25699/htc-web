import React from "react";
import ScrollProgressBar from "src/atoms/ScrollProgressBar";
import useTitle from "src/utilities/hooks/useTitle";
import "./MainLayout.css";

type Props = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  useTitle("HTC Team");

  return (
    <div className="main-layout">
      <ScrollProgressBar />

      {children}
    </div>
  );
};

export default MainLayout;
