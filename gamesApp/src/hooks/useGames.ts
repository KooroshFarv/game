import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { FetchRes } from '../services/api-client';
import { Genre } from './useGenre';
import apiClient from '../services/api-client';
import { Platform}  from '../hooks/usePlatfroms'


export interface Games {
  background_image: string | undefined;
  id: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  rating_top : number

}




const useGames = (gameQuery : GameQuery) => useQuery<FetchRes<Games>, Error>({
  queryKey: ['games', gameQuery ],
  queryFn : () => apiClient
  .get<FetchRes<Games>>('/games', {
    params: {
        
           genres : gameQuery.genre?.id,
           parent_platforms : gameQuery.platform?.id,
           oredring : gameQuery.sortOrder,
          search : gameQuery.searchText
            
    },
  })
  .then(res => res.data)
})

export default useGames;
