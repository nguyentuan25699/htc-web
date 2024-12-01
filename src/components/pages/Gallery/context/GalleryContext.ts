import React from "react";
import { DetailArtist } from "src/components/atoms/Artist/Artist.type";

export interface GalleryContextProps {
  listArtist: DetailArtist[];
  onSelectArtist: (id: string) => void;
}

export const GalleryContext = React.createContext<GalleryContextProps>({} as GalleryContextProps);
export const GalleryContextProvider = GalleryContext.Provider;
