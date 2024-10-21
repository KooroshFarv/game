import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';  


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

interface FetchGamesRes {
    count : number ;
    results : Games[]; 
}


const useGames = () => {
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);



        apiClient.get<FetchGamesRes>('/games', { signal: controller.signal })
            .then(res => {
                setGames(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
    
        return () => controller.abort();
    }, []);
    
    return{ games ,  error, isLoading};
}

export default useGames;