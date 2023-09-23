interface AnimeType {
  id: number;
  coverImage: {
    color: string;
    large: string;
    medium: string;
    extraLarge: string;
    __typename: string;
  };
  description: string;
  popularity: number;
  title: {
    romaji: string;
    __typename: string;
  };
}

export interface AnimeCollectionsContextType {
  collections: CollectionType[];
  setCollections: Dispatch<SetStateAction<CollectionType[]>>;
  addNewCollection: (newCollection: CollectionType) => void;
  addAnimeToCollection: (collectionId: string, anime: string, idAnime: string, coverImage: string) => void;
  editCollection: (collectionId: string, anime: string, idAnime: string, coverImage: string) => void;
  removeAnimeFromCollection: (collectionId: string, animeId: string) => void;
  removeCollection: (collectionId: string) => void;
}

export interface CollectionAnimesType {
  coverImage: string;
  id: string;
  id_anime: number;
  title: string;
}

export interface CollectionType {
  animes: CollectionAnimesType[];
  description: string;
  id: string;
  name: string;
}

export interface AddToCollectionType {
  anime: string;
  coverImage: string;
  idAnime: string;
}
