import mongoose from "mongoose";

const options = {
    collection: 'movies',
    strict: true,
    collation: {
        locale: "en",
        strength: 1
    }
}
const movieSchema = new mongoose.Schema({
    title: String,
    poster: String,
    value: Number,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, options);

export const Movie = mongoose.model('Movie', movieSchema);