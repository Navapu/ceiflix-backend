import express from 'express';
import cors from 'cors';
const app = express();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));


app.get("/", (req, res) => {
    res.send('Welcome to CEIFLiX API - A web app to discover and track movies.')
})

app.listen(3001, () => {
    console.log('Listening in port 3001')
})