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

// app.get('/api/yelp', (req, res) => {
//   yelp.search({ term: 'food', location: '91941', limit: 10 })
//     .then(data => { console.log(data); })
//     .catch(err => { console.error(err); });
// });
client.search({
  term: 'hotels',
  location: 'san diego',
  limit: 10
}).then(res => {
  console.log(res.jsonBody.businesses);
}).catch(err => {
  console.error(err);
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
