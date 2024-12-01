import React from "react";
import GalleryAction from "../GalleryOrganisms/GalleryAction";
import GalleryBanner from "../GalleryOrganisms/GalleryBanner";
import "./GalleryTemplate.css";

const GalleryTemplate: React.FC = () => {
  return (
    <div className="gallery-template">
      <GalleryBanner />

      <GalleryAction />
    </div>
  );
};

export default GalleryTemplate;
