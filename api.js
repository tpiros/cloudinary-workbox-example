const express = require('express');
const app = express();
const cors = require('cors');
const news = require('./data').news;

app.use(cors());

app.get('/api/news', (req, res) => res.status(200).json(news));

app.listen(3000, () => console.log('API server running'));