import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { GameQuery } from '../pages/HomePage';
import { FetchRes } from '../services/api-client';
import { Genre } from './useGenre';
import ApiClient from '../services/api-client';
import { Platform}  from '../hooks/usePlatfroms'
import ms from 'ms';
import { Publisher } from '../pages/Publishers';

const apiClient = new ApiClient<Games>('/games')


export interface Games {
  metacritic: any;
  slug: string;
  background_image: string | undefined;
  id: number;
  genres : Genre[]
  name: string;
  description_raw : string;
  parent_platforms: { platform: Platform }[];
  rating_top : number
  publishers : Publisher[]

}


const useGames = (gameQuery : GameQuery) => useInfiniteQuery<FetchRes<Games>, Error>({
  queryKey: ['games', gameQuery ],
  queryFn : ({pageParam = 1}) => apiClient.getAll({
    params: {
      genres : gameQuery.genreId,
      parent_platforms : gameQuery.platformId,
      oredring : gameQuery.sortOrder,
     search : gameQuery.searchText ,
     page : pageParam
},
  }),
  getNextPageParam: (lastPage, allPages) => {
    return lastPage.next ? allPages.length + 1 : undefined;
  },
  staleTime : ms('24h')
})

export default useGames;
