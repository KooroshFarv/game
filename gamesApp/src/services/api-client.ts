import axios, { Axios, AxiosRequestConfig } from "axios";


export interface FetchRes<T> {
    count : number
    next : string | null
    results : T[]
   
}



const axiosInstance =  axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : '1e6fa9b28baf47e1977e1dea94c1a22a'
    }
})

class ApiClient<T>{
    static getAll(): import("@tanstack/query-core").QueryFunction<unknown, (string | number)[]> | undefined {
        throw new Error("Method not implemented.");
    }
    endpoint : string
    constructor(endpoint : string){
        this.endpoint = endpoint
    }

    getAll = (config : AxiosRequestConfig) => {
        return axiosInstance
        .get<FetchRes<T>>(this.endpoint)
        .then(res => res.data )
    }
    get = (id : number | string) => {
       return axiosInstance
       .get<T>(this.endpoint + '/' + id )
        .then(res => res.data) ;
    }
}

export default ApiClient 