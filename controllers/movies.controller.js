import { TOKEN_API_TMDB } from '../config/config.js'
import { Movie, User } from '../db/models/index.js';
const ResponseAPI = {
    msg: "",
    data: [],
    status: 'ok'
}
export const getMovies = async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=es&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TOKEN_API_TMDB}`
            }
        };

        const response = await fetch(url, options)
        const responseJSON = await response.json();

        if (!response.ok) {
            ResponseAPI.msg = "Something went wrong";
            ResponseAPI.status = "error";
            return res.status(400).json(ResponseAPI);
        }

        ResponseAPI.msg = "Movies obtained";
        ResponseAPI.data = responseJSON;
        return res.status(200).json(ResponseAPI);
    } catch (error) {
        next(error)
    }

}
export const watchedMovie = async (req, res) => {
    try{
        const userId = req.userId;
        const {title, poster, value} = req.body;
        const existingMovie = await Movie.findOne({ title });

        if(existingMovie){
            const currentUser = await User.findByIdAndUpdate(
                userId,
                { $push: { movies: existingMovie._id } },
                { new: true }
              );
              ResponseAPI.msg = `${title} has been aded to watched`;
              ResponseAPI.data = currentUser;
              return res.status(200).json(ResponseAPI);
        }
        const movie = await Movie.create({
            title,
            poster,
            value
        })

        const currentUser = await User.findByIdAndUpdate(
            userId,
            { $push: { movies: movie._id } },
            { new: true }
          );
          ResponseAPI.msg = `${title} has been aded to watched`;
          ResponseAPI.data = currentUser;
          return res.status(200).json(ResponseAPI);
    }catch(error){
        next(error)
    }
}