import { createContext, useContext } from 'react';
import { AnimeCollectionsContextType } from '../types/types';

const AnimeCollectionsContext = createContext<AnimeCollectionsContextType>({
  collections: [],
  setCollections: () => {},
  addNewCollection: () => {},
  addAnimeToCollection: () => {},
  editCollection: () => {},
  removeAnimeFromCollection: () => {},
  removeCollection: () => {},
});

const useAnimecollections = () => {
  const context = useContext(AnimeCollectionsContext);

  if (!context) throw new Error('useAnimeCollections must be used inside provider!');

  return context;
};

export { useAnimecollections };
