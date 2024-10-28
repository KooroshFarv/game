import { useQuery } from "@tanstack/react-query"
import useData, { FetchRes } from "../services/api-client"
import apiClient from "../services/api-client"


interface Platform {
    id : number
    name : string
    slug : string


}


// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey : ['platform'],
    queryFn : () => apiClient
    .get<FetchRes<Platform>>('/platforms/lists/parents')
    .then(res => res.data),
    staleTime : 24 * 60 * 60 * 1000
    
})


export default usePlatforms