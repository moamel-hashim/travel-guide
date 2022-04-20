'use strict';
require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const Yelp = require('yelp-fusion');
const client = Yelp.client('CutZSIYsgQ63fTCWajxyoafDw6tFxUoFR3GwmZFn9N89upHCbvLW0WKV4sIrQRtiYopGluFzMLza-Q3PscXTo2FBvycsFuNsiqBF6f973eJ7TI98fvA5b1IRLK5YYnYx');

const app = express();

app.use(staticMiddleware);

app.use(errorMiddleware);

app.get('/api/yelp', (req, res) => {
  const search = req.query.search;
  client.search({
    term: 'hotels',
    location: `${search}`
  }).then(data => {
    const response = data.jsonBody.businesses.filter(response => response.rating >= 4);
    res.json(response);
  }).catch(err => {
    console.error(err);
  });
});

app.get('/api/yelp', (req, res) => {
  console.log('value of req.body', req.body);
  const hotelId = req.query.hotelId;
  console.log('value of hotelId', hotelId);
  client.business(`${hotelId}`)
    .then(response => {
      console.log('value of response:', response.jsonBody);
    });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
