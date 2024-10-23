
import useData from './useData';
import { Genre } from './useGenre';


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


const useGames = (selectedGenre : Genre | null, selectedPlatform : Platform | null) =>
     useData<Games>('/games', {
        params : {
            genres : selectedGenre?.id, platforms : selectedPlatform?.id}},
             [selectedGenre?.id, selectedPlatform?.id]);
   


export default useGames;