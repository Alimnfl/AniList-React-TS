import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { GET_TRENDING_ANIME } from '../../queries/Queries';
import { useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { Link } from 'react-router-dom';
import AnimeWrapper from '../../layout/AnimeWrapper';
import AnimeContainer from '../../layout/AnimeContainer';

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

function AnimeList() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const animePerPage: number = 10;
  const totalPages: number = 50;

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.max(prev + 1, 1));
  };

  const { loading, error, data } = useQuery(GET_TRENDING_ANIME, {
    variables: {
      page: currentPage,
      perPage: animePerPage,
      type: 'ANIME',
      sort: 'TRENDING_DESC',
    },
  });

  if (loading) console.log('Loading....');
  if (error) console.log('Error....');

  if (!error && !loading) {
    return (
      <AnimeWrapper>
        <h1 className="mb-8 text-5xl font-bold ">Trending Anime</h1>
        <AnimeContainer>
          {data?.page?.media?.map((anime: AnimeType, index: number) => {
            console.log(anime.coverImage.large);
            return (
              <Link to={`/anime/${anime.id} `}>
                <div key={index} className="flex flex-col items-center ">
                  <img alt="Cover Image" src={anime.coverImage.large} className="w-[300px] h-[400px] border rounded-xl " />
                  <p className="mt-2 text-xl font-semibold">{anime.title.romaji}</p>
                </div>
              </Link>
            );
          })}
          <div className="flex flex-col items-center ">
            <div className="w-[300px] h-[400px] border border-red-500 rounded-xl "></div>
            <p className="mt-2 text-xl font-semibold">Anime List - Blabla</p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="w-[300px] h-[400px] border border-red-500 rounded-xl "></div>
            <p className="mt-2 text-xl font-semibold">Anime List - Blabla</p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="w-[300px] h-[400px] border border-red-500 rounded-xl "></div>
            <p className="mt-2 text-xl font-semibold">Anime List - Blabla</p>
          </div>
        </AnimeContainer>

        <div className="justify-center mt-6 flex w-[1000px]">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            <BiChevronLeft fill={currentPage === 1 ? '#5a5a5a' : '#fff'} size={40} />
          </button>
          <p className="flex flex-row items-center text-xl font-semibold">{`Page ${currentPage} of ${totalPages}`}</p>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            <BiChevronRight fill={currentPage === totalPages ? '#5a5a5a' : '#fff'} size={40} />
          </button>
        </div>
      </AnimeWrapper>
    );
  }
}

export default AnimeList;
