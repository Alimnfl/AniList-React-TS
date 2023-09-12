import { AiFillHome, AiOutlineBars, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AddCollectionModal from '../Modal/AddCollectionModal';

function Sidebar() {
  const { addNewCollection, collections } = useAnimeCollections();

  return (
    <div className="flex flex-row items-center gap-5 text-white p-7">
      <AiOutlineBars size={30} />
      <h1 className="text-xl font-bold ">Your Collection</h1>
      <AddCollectionModal collections={collections} onAddCollection={addNewCollection}>
        <AiOutlinePlus size={30} className="ml-[80px]" />
      </AddCollectionModal>
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex flex-col justify-between py-14 px-5 w-[400px] h-[300px]  rounded-r-lg  bg-zinc-950">
        <div className="flex flex-row gap-8 ml-4">
          <img className="rounded-lg w-7" src="/logo-lim.svg" />
          <Link to="/">
            <p className="text-2xl font-bold text-white">LimNfl</p>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-8 ml-4">
          <AiFillHome size={28} className="text-white" />
          <p className="text-2xl font-bold text-white">Anime</p>
        </div>
      </div>
      <div className="w-[400px] h-[700px] rounded-tr-lg  bg-zinc-950">
        <Sidebar />
      </div>
    </div>
  );
}

export default Navbar;
