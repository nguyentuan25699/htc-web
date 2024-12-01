import React from "react";
import GalleryTemplate from "./GalleryTemplate";
import { GalleryContextProvider } from "./context";
import { useArtistList } from "./hooks/useArtistList";

const GalleryPage: React.FC = () => {
  const { listArtist, onSelectArtist } = useArtistList();

  return (
    <GalleryContextProvider value={{ listArtist, onSelectArtist }}>
      <GalleryTemplate />
    </GalleryContextProvider>
  );
};

export default GalleryPage;
