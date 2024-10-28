import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { FetchRes } from '../services/api-client';
import { Genre } from './useGenre';
import ApiClient from '../services/api-client';
import { Platform}  from '../hooks/usePlatfroms'


const apiClient = new ApiClient<Games>('/games')


export interface Games {
  background_image: string | undefined;
  id: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  rating_top : number

}





const useGames = (gameQuery : GameQuery) => useQuery<FetchRes<Games>, Error>({
  queryKey: ['games', gameQuery ],
  queryFn : () => apiClient.getAll({
    params: {
      genres : gameQuery.genre?.id,
      parent_platforms : gameQuery.platform?.id,
      oredring : gameQuery.sortOrder,
     search : gameQuery.searchText 
},
  }),
})

export default useGames;
