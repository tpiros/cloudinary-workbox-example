const express = require('express');
const app = express();
const news = require('./data').news;

app.get('/api/news', (req, res) => res.status(200).json(news));

app.use(express.static(`${__dirname}/build`));

const server = app.listen(8081, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`App listening at http://${host}:${port}`);
});
