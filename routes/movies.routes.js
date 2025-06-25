import express from 'express';
const router = express.Router();
import { getMovies, watchedMovie, getMovieById, getWatchedMovies } from '../controllers/movies.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

router.get("/me", authMiddleware, getWatchedMovies);
router.get("/", getMovies);
router.post("/", authMiddleware, watchedMovie);
router.get("/:id", getMovieById);


export default router;