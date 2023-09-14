import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { ReactNode, SyntheticEvent, useState } from 'react';
import { CollectionType } from '../../types/types';

function AddCollectionModal({ children, collections, onAddCollection }: { children: ReactNode; collections: CollectionType[]; onAddCollection: (newCollection: CollectionType) => void }) {
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [formData, setFormData] = useState<{
    name: string;
    description: string;
  }>({
    name: '',
    description: '',
  });

  const handleInputChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    const filteredValue = value.replace(/[^a-zA-Z0-9\s]/g, '');

    setFormData((prev) => ({
      ...prev,
      [name]: filteredValue,
    }));
  };

  const checkDuplicate = (name: string) => {
    return collections.every((collection: CollectionType) => collection.name !== name);
  };

  const handleAddCollection = (e: SyntheticEvent) => {
    e.preventDefault();

    const { name, description } = formData;

    if (!name.trim() || !checkDuplicate(name.trim())) {
      setError('This name already exist.');
      return;
    }

    const collectionId = `collection_${Date.now()}`;
    const newCollection = {
      id: collectionId,
      name: name.trim(),
      description,
      animes: [],
    };

    onAddCollection(newCollection);

    setFormData({
      name: '',
      description: '',
    });

    setOpen(false);
  };

  return (
    <div>
      <AlertDialog.Root open={open} onOpenChange={setOpen}>
        <AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="fixed inset-0 bg-black bg-opacity-60 animate-overlayShow" />
          <AlertDialog.Content className="flex flex-col border border-white bg-[#0f0f0f] gap-3 text-white rounded-md fixed top-[50%] left-[50%] p-6 w-[600px] -translate-x-1/2 -translate-y-1/2">
            <AlertDialog.Title className="text-xl font-semibold">Create a new Collection</AlertDialog.Title>
            <AlertDialog.Description className="">Save your favourite anime to a Collection</AlertDialog.Description>
            <form onSubmit={handleAddCollection}>
              <div className="flex flex-col gap-3">
                <h1>Name</h1>
                <input className="w-full h-[50px] bg-black border border-white rounded-md" type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                <div>{error}</div>
              </div>
              <div className="flex flex-col gap-3">
                <h1>Description</h1>
                <textarea className="w-full h-[60px] bg-black border border-white rounded-md " name="description" id="description" value={formData.description} onChange={handleInputChange} required></textarea>
              </div>

              <div className="pt-4" style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
                <AlertDialog.Cancel asChild>
                  <button className="p-2 border rounded-md">Cancel</button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <button className="p-2 border rounded-md" type="submit">
                    Create
                  </button>
                </AlertDialog.Action>
              </div>
            </form>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
}

export default AddCollectionModal;
