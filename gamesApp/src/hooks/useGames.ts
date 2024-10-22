
import useData from './useData';


export interface Platform {
    id : number
    name : string
    slug : string
}

export interface Games {
    background_image: string | undefined;
    id : number;
    name : string;
    parent_platforms : {platform : Platform}[]
}


const useGames = () => useData<Games>('/games');
   


export default useGames;