import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/', (req,res) => {
    res.send('<h1>Sayt ishlavoti</h1>');
})

app.get('/all', (req,res) => {
    res.json({
        name: "Mirfozil",
        job: "Programming",
        hobby: "Music"
    })
})

export const handler = serverless(app);