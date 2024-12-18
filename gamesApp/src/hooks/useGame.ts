import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Games } from "./useGames";



const apiClient = new ApiClient<Games>('/games') 
const useGame =(slug : string) => useQuery({ 
    queryKey:['games', slug],
    queryFn : () => apiClient.get(slug)


})

export default useGame;