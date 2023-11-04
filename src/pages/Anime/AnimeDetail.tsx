import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { GET_ANIME_DETAIL } from '../../queries/Queries';
import AnimeWrapper from '../../layout/AnimeWrapper';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import TruncateText from '../../component/TruncateText';
import { useStripTags } from '../../hooks/useStripTags';
import AddToCollection from '../../component/DropdownMenu/AddToCollection';

function AnimeDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ANIME_DETAIL, {
    variables: { id },
  });

  return (
    <>
      {!loading && !error && (
        <AnimeWrapper>
          <div className=" -translate-x-[20px] -translate-y-[20px] flex flex-col bg-[#0f0f0f] w-full p-6 gap-6 rounded-md">
            <div className="flex flex-row items-center gap-2">
              <AiOutlineArrowLeft />
              <Link className="text-lg font-semibold" to="/">
                Back
              </Link>
            </div>
            <div className="flex gap-6 ">
              <div className="flex flex-col gap-3 w-[250px] items-center">
                <img src={data.Media.coverImage.large} className="flex w-[220px] h-[330px] rounded-md" alt="" />
                <AddToCollection coverImage={data.Media.coverImage.large} anime={data.Media.title.romaji} idAnime={data.Media.id} />
              </div>
              <div className="flex flex-col w-[1000px] gap-2 ">
                <div className="flex flex-col w-full gap-5">
                  <h1 className="text-3xl font-semibold">{data.Media.title.romaji}</h1>
                  <p className="pr-8 text-sm text-slate-500">
                    <TruncateText text={data.Media.description === null ? 'N/A' : useStripTags(data.Media.description)} maxLength={600} />
                  </p>
                </div>
                <div className="flex flex-row gap-12 pt-4">
                  <div>
                    <h3 className="font-semibold">Episodes</h3>
                    <p>{data.Media.episodes === null ? 'N/A' : data.Media.episodes}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Genres</h3>
                    <p>{data.Media.genres === 0 ? 'N/A' : data.Media.genres.join(', ')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Status</h3>
                    <p>{data.Media.status === null ? 'N/A' : data.Media.status}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimeWrapper>
      )}
    </>
  );
}

export default AnimeDetail;
