import axios from "axios";

const URI = axios.create({
    baseURL : "https://api.themoviedb.org/3"
})

export default URI;