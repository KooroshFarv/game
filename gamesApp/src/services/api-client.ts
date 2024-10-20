import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : '1e6fa9b28baf47e1977e1dea94c1a22a'
    }
})