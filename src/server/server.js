const express = require('express');
const app = express();

const { api } = require('./apiRoute');

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use('/api', api);

app.listen(3001, () => console.log(`Listening on port 3001`));
