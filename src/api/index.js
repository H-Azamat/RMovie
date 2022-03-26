import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

const API_KEY = '8e79fb2d12e11710b88cc2396b0e2e25'

export const getMoviePopular = async (page = 1) => {
    return await instance.get(`movie/popular?api_key=${API_KEY}&language=ru&page=${page}`)
}

export const getMovieDetails = async (id) => {
    return await instance.get(`movie/${id}?api_key=${API_KEY}&language=ru`)
}