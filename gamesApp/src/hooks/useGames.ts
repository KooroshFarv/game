import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { FetchRes } from '../services/api-client';
import { Genre } from './useGenre';
import ApiClient from '../services/api-client';
import { Platform}  from '../hooks/usePlatfroms'
import { MdLastPage } from 'react-icons/md';


const apiClient = new ApiClient<Games>('/games')


export interface Games {
  background_image: string | undefined;
  id: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  rating_top : number

}





const useGames = (gameQuery : GameQuery) => useInfiniteQuery<FetchRes<Games>, Error>({
  queryKey: ['games', gameQuery ],
  queryFn : ({pageParam = 1}) => apiClient.getAll({
    params: {
      genres : gameQuery.genre?.id,
      parent_platforms : gameQuery.platform?.id,
      oredring : gameQuery.sortOrder,
     search : gameQuery.searchText ,
     page : pageParam
},
  }),
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined;
  },
  staleTime : 26 * 60 * 60 * 1000 //24 hours
})

export default useGames;
