import express from 'express';
const IndexRouter = express.Router();



IndexRouter.get('/test', (req, res) => {
    const data = {
        "name" : "Gera",
        "edad" : "31"
    }
    res.json(data);
});

export default IndexRouter;