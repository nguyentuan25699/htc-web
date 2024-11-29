import React from "react";
import HomeBanner from "../HomeOrganisms/HomeBanner";
import HomeSubBanner from "../HomeOrganisms/HomeSubBanner";
import BackdropSection from "../HomeOrganisms/BackdropSection";

const HomeTemplate: React.FC = () => {
  return (
    <>
      <HomeBanner />

      <HomeSubBanner />

      <BackdropSection />
    </>
  );
};

export default HomeTemplate;
