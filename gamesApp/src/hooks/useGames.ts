import { GameQuery } from '../App';
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
  const { genre, platform } = gameQuery;

  return useData<Games>(
    '/games',
    {
      params: {
        
        ...(genre?.id && { genres: genre.id }),
        ...(platform?.id && { platforms: platform.id }),
      },
    },
    [genre?.id, platform?.id] 
  );
};

export default useGames;
