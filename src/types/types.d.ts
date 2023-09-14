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

export interface AnimeCollectionsContextType {
  collections: CollectionType[];
  setCollections: Dispatch<SetStateAction<CollectionType[]>>;
  addNewCollection: (newCollection: CollectionType) => void;
  addAnimeToCollection: (collectionId: string, anime: string, idAnime: string, coverImage: string) => void;
  editCollection: (collectionId: string, anime: string, idAnime: string, coverImage: string) => void;
  removeAnimeFromCollection: (collectionId: string, animeId: string) => void;
  removeCollection: (collectionId: string) => void;
}
