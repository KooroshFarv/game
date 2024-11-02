
import useData, { FetchRes } from "../services/api-client";
import { useQueries, useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import ms from 'ms';


const apiClient = new ApiClient<Genre>('/genres')

export interface Genre {
    id : number
    name : string
    image_background: string;}

    // const useGenre = () => useData<Genre>('/genres');
  
    const useGenre = () => useQuery({
        queryKey : ['genres'],
        queryFn : () => 
           apiClient
        .getAll({}),
        staleTime : ms('24h'),
      
        
    }) 

export default useGenre;