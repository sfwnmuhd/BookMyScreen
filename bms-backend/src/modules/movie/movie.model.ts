import mongoose from "mongoose";
import { IMOvie } from "./movie.interface";

const movieSchema = new mongoose.Schema<IMOvie>({
    title: { type: String, required: true},
    description: {type: String,  required: true},
    duration: {type: String, required: true},
    genre: {type: [String], required: true},
    releaseDate: {type: Date, required: true},
    languages: {type: [String], required: true},
    certification: {type: String, required: true},
    posterUrl: {type: String, required: true},
    rating: { type: Number, required: true},
    votes: {type: Number, required: true},
    format: {type: [String], default: ["2D"]}
},{timestamps: true});

export const MovieModel = mongoose.model<IMOvie>("Movie", movieSchema);