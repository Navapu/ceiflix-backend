import express from 'express';
const router = express.Router();
import { getMovies, watchedMovie, getMovieById } from '../controllers/movies.controller.js';

router.get("/", getMovies);
router.post("/", watchedMovie);
router.get("/:id", getMovieById);


export default router;