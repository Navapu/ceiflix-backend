import express from 'express';
const router = express.Router();
import { getMovies } from '../controllers/movies.controller.js';

router.get("/", getMovies);

export default router;