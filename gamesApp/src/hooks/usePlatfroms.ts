import { useQuery } from "@tanstack/react-query"
import useData, { FetchRes } from "../services/api-client"
import ApiClient from "../services/api-client"



const apiClient = new ApiClient<Platform>('/platforms/lists/parents')


export interface Platform {
    id : number
    name : string
    slug : string


}


// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey : ['platform'],
    queryFn : () => 
        apiClient.getAll({}),
    staleTime : 24 * 60 * 60 * 1000
    
})


export default usePlatforms