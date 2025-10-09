import { IMOvie } from "./movie.interface";
import { MovieModel } from "./movie.model";

// 1. createMovie
export const createMovie = async (movie: IMOvie) => {
    return await MovieModel.create(movie);
}

// 2. getAllMovies
export const getAllMovies = async () => {
    return await MovieModel.find().sort({releaseDate: -1});
}

// 3. getMovieById
export const getMovieById = async (id: string) => {
    return await MovieModel.findById(id);
}
// 4. getTopMovieByVotes
export const getTopMovieByVotes = async (limit: number) => {
    return await MovieModel.find().sort({ votes: -1}).limit(limit);
}