import express from 'express';
import path from 'path';
import open from 'open';
import config  from '../webpack.config.dev';
import webpack from 'webpack';

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  // noInfo:
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {
      "id": 1,
      "firstName": "Bob",
      "lastName": "Smith",
      "email": "bob@gmail.com"
    },
    {
      "id": 2,
      "firstName": "Tammy",
      "lastName": "Norton",
      "email": "tnorton@yahoo.com"
    },
    {
      "id": 3,
      "firstName": "Tina",
      "lastName": "Lee",
      "email": "lee.tina@hotmail.com"
    }
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
});
