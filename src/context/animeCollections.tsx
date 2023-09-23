import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { AnimeCollectionsContextType, CollectionAnimesType, CollectionType } from '../types/types';

const AnimeCollectionsContext = createContext<AnimeCollectionsContextType>({
  collections: [],
  setCollections: () => {},
  addNewCollection: () => {},
  addAnimeToCollection: () => {},
  editCollection: () => {},
  removeAnimeFromCollection: () => {},
  removeCollection: () => {},
});

const AnimeCollectionsProvider = ({ children }: { children: ReactNode }) => {
  const [collections, setCollections] = useState(() => {
    // Ngambil data di local storage
    const storedCollections = JSON.parse(localStorage.getItem('myAnimeCollections')!) || [];
    return storedCollections;
  });

  // Nambah koleksi
  const addNewCollection = (newCollection: CollectionType) => {
    setCollections((prev: any) => [...prev, newCollection]);
  };

  // Nambahin anime ke koleksi
  const addAnimeToCollection = (collectionId: string, anime: string, idAnime: string, coverImage: string) => {
    const addAnime = {
      id: `${Date.now()}`,
      id_anime: idAnime,
      title: anime,
      coverImage,
    };
    setCollections((prevCollections: CollectionType[]) =>
      prevCollections.map((collection: CollectionType) => {
        collection.id === collectionId ? { ...collection, animes: [...collection.animes, addAnime] } : collection;
      })
    );
  };

  // Edit Koleksi
  const editCollection = (collectionId: string, newName: string, newDescription: string) => {
    setCollections((prevCollections: CollectionType[]) =>
      prevCollections.map((collection: CollectionType) =>
        collection.id === collectionId
          ? {
              ...collection,
              name: newName,
              description: newDescription,
            }
          : collection
      )
    );
  };

  // Menghapus anime dari collection
  const removeAnimeFromCollection = (collectionId: string, animeId: string) => {
    setCollections((prevCollections: CollectionType[]) =>
      prevCollections.map((collection: CollectionType) =>
        collection.id === collectionId
          ? {
              ...collection,
              animes: collection.animes.filter((anime: CollectionAnimesType) => anime.id !== animeId),
            }
          : collection
      )
    );
  };

  // Menghapus Collection
  const removeCollection = (collectionId: string) => {
    setCollections((prevCollections: CollectionType[]) => prevCollections.filter((collection: CollectionType) => collection.id !== collectionId));
  };

  useEffect(() => {
    localStorage.setItem('myAnimeCollections', JSON.stringify(collections));
  }, [collections]);

  return (
    <>
      <AnimeCollectionsContext.Provider value={{ collections, setCollections, addNewCollection, addAnimeToCollection, editCollection, removeAnimeFromCollection, removeCollection }}>{children}</AnimeCollectionsContext.Provider>
    </>
  );
};

const useAnimecollections = () => {
  const context = useContext(AnimeCollectionsContext);

  if (!context) throw new Error('useAnimeCollections must be used inside provider!');

  return context;
};

export { useAnimecollections, AnimeCollectionsProvider };
