
import useData, { FetchRes } from "../services/api-client";
import { useQueries, useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";


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
        staleTime : 24 * 60 * 60 * 1000,
      
        
    }) 

export default useGenre;