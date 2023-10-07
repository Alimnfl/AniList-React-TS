import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useAnimecollections } from '../../context/animeCollections';
import { AddToCollectionType, CollectionAnimesType, CollectionType } from '../../types/types';
import AddCollectionModal from '../Modal/AddCollectionModal';
import { AiOutlinePlus } from 'react-icons/ai';
import './RadixDropdown.css';

const AddToCollection = ({ anime, coverImage, idAnime }: AddToCollectionType) => {
  const { addAnimeToCollection, addNewCollection, collections } = useAnimecollections();

  const handleAddAnime = (collectionId: string) => {
    addAnimeToCollection(collectionId, anime, idAnime, coverImage);
  };

  const animeAlreadyInCollection = (collectionId: string, anime: string) => {
    const targetcollection = collections.find((collection: CollectionType) => collection.id === collectionId);

    if (!targetcollection) {
      return false;
    }

    return targetcollection.animes.some((collectionAnime: CollectionAnimesType) => collectionAnime.title === anime);
  };
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex justify-center w-full p-2 font-semibold text-black bg-white rounded-md" aria-label="Customise options">
          Add to Collection
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <AddCollectionModal collections={collections} onAddCollections={addNewCollection}>
            <p className="flex flex-row items-center justify-between text-white">
              <AiOutlinePlus size={14} className="ml-[80px] cursor-pointer" />
              New collection
            </p>
          </AddCollectionModal>
          {collections.map((collection: CollectionType) => {
            return !animeAlreadyInCollection(collection.id, anime) ? (
              <DropdownMenu.Item className="DropdownMenuItem">
                <button onClick={() => handleAddAnime(collection.id)}>{collection.name}</button>
              </DropdownMenu.Item>
            ) : (
              <DropdownMenu.Item disabled className="DropdownMenuItem">
                <button onClick={() => handleAddAnime(collection.id)}>{collection.name}</button>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default AddToCollection;
