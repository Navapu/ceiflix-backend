import { TOKEN_API_TMDB } from '../config/config.js'
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