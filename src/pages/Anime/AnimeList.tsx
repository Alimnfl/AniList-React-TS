import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { GET_TRENDING_ANIME } from '../../queries/Queries';
import { useState } from 'react';
import { useQuery } from '@apollo/client/react';
import { Link } from 'react-router-dom';
import AnimeWrapper from '../../layout/AnimeWrapper';
import AnimeContainer from '../../layout/AnimeContainer';
import { AnimeType } from '../../types/types';

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
          {data?.Page?.media?.map((anime: AnimeType, index: number) => {
            // console.log(anime.coverImage.large);
            return (
              <Link to={`/anime/${anime.id} `}>
                <div key={index} className="flex flex-col max-w-[250px] ">
                  <img alt="Cover Image" src={anime.coverImage.large} className="object-cover  w-[400px] h-[500px] sm:w-[250px] sm:h-[400px] border rounded-xl " />
                  <p className="md:w-[250px]  mt-2 text-xl font-semibold w-[350px] flex items-center">{anime.title.romaji}</p>
                </div>
              </Link>
            );
          })}
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
