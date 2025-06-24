import express from 'express';
const router = express.Router();
import { getMovies, watchedMovie } from '../controllers/movies.controller.js';

router.get("/", getMovies);
router.post("/", watchedMovie);


export default router;