import React, { useContext } from "react";
import "./GalleryAction.css";
import { Tab, Tabs } from "react-bootstrap";
import GalleryList from "../GalleryList";
import ArtistList from "../ArtistList";
import { GalleryContext } from "../../context";

const GalleryAction: React.FC = () => {
  const { listArtist } = useContext(GalleryContext);
  return (
    <div className="gallery-action-container">
      <Tabs>
        <Tab
          eventKey="Gallery"
          title={
            <>
              Gallery <span style={{ fontSize: "15px" }}>(1)</span>
            </>
          }
        >
          <GalleryList />
        </Tab>
        <Tab
          eventKey="Artist"
          title={
            <>
              Artist <span style={{ fontSize: "15px" }}>({listArtist?.length})</span>
            </>
          }
        >
          <ArtistList />
        </Tab>
      </Tabs>
    </div>
  );
};

export default GalleryAction;
