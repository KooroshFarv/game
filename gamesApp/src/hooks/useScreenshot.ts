import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

interface Screenshot{
    id : number
    width :number
    height : number
    image : string 
}




const useScreenshot = (gameId : number) =>{
    const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
     queryKey : ['screenshot', gameId],
     queryFn : () => apiClient.getAll({})
    })
}

export default useScreenshot