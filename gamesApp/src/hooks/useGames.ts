import { GameQuery } from '../App';
import searchInput from '../components/searchInput';
import useData from './useData';
import { Genre } from './useGenre';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  background_image: string | undefined;
  id: number;
  name: string;
  parent_platforms: { platform: Platform }[];

}

const useGames = (gameQuery: GameQuery) => {
  const { genre, platform, sortOrder, searchText } = gameQuery;


  return useData<Games>(
    '/games',
    {
      params: {
        
        ...(genre?.id && { genres: genre.id }),
        ...(platform?.id && { platforms: platform.id }),
       ...(sortOrder && {ordering : sortOrder}),
       ...(searchText && { search: searchText})
      },
    },
    [genre?.id, platform?.id, sortOrder, searchText] 
  );
};

export default useGames;
