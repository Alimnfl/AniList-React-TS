import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { ReactNode, SyntheticEvent, useState } from 'react';
import { SyntheticEventData } from 'react-dom/test-utils';

interface CollectionAnimesType {
  coverImage: string;
  id: string;
  id_name: number;
  title: string;
}

interface CollectionType {
  animes: CollectionAnimesType[];
  description: string;
  id: string;
  name: string;
}

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

    const filteredValue = val;
  };

  return (
    <div>
      <AlertDialog.Root open={open} onOpenChange={setOpen}>
        <AlertDialog.Trigger asChild> {children}</AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="AlertDialogOverlay" />
          <AlertDialog.Content className="AlertDialogContent">
            <AlertDialog.Title className="AlertDialogTitle">Create a new Collection</AlertDialog.Title>
            <AlertDialog.Description className="AlertDialogDescription">Save your favourite anime to a Collection</AlertDialog.Description>
            <form action="">
              <div>
                <h1>Name</h1>
                <input type="text" id="name" name="name" value={FormData.name} required />
                <div>{error}</div>
              </div>
              <div>
                <h1>Description</h1>
                <textarea name="description" id="description"></textarea>
              </div>
            </form>

            <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
              <AlertDialog.Cancel asChild>
                <button className="Button mauve">Cancel</button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button className="Button red">Yes, delete account</button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
}

export default AddCollectionModal;
