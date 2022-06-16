'use strict';
require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const uploadsMiddleware = require('./uploads-middleware');
const Yelp = require('yelp-fusion');
const client = Yelp.client(process.env.TOKEN_SECRET);
const pg = require('pg');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
app.use(staticMiddleware);
app.use(express.json());

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

app.get('/api/travelGuide', (req, res, next) => {
  const sql = `
  select *
  from "hotels"
  order by "hotelId"`;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/travelGuide', uploadsMiddleware, (req, res, next) => {
  const imageUrl = `/images/${req.file.filename}`;
  const { hotelName, streetAddress, city, state, phoneNumber, zipCode, description } = req.body;
  if (!hotelName || !streetAddress || !city || !state || !phoneNumber || !imageUrl || !zipCode) {
    res.status(400).json({
      error: 'hotelName, streetAddress, city, state, phoneNumber and imageUrl are required fields'
    });
    return;
  }
  const sql = `
  insert into "hotels" ("name", "line1", "city", "state", "phoneNumber", "photoUrl", "zipCode", "description")
  values ($1, $2, $3, $4, $5, $6, $7, $8)`;
  const params = [hotelName, streetAddress, city, state, phoneNumber, imageUrl, zipCode, description];
  db.query(sql, params)
    .then(result => {
      res.sendStatus(201);
    })
    .catch(err => next(err));
});

app.get('/api/travelGuide/:hotelId', (req, res, next) => {
  const hotelId = Number(req.params.hotelId);
  if (!hotelId) {
    res.status(400).json({ error: `invalid hotelId ${hotelId}` });
  }
  const sql = `
  select  "hotelId",
          "name",
          "description",
          "line1",
          "city",
          "state",
          "zipCode",
          "phoneNumber",
          "photoUrl"
     from "hotels"
     where "hotelId" = $1`;
  const params = [hotelId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).json({ error: `cannot find hotel with hotelId ${hotelId}` });
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.patch('/api/travelGuide/:hotelId', uploadsMiddleware, (req, res, next) => {
  const hotelId = Number(req.params.hotelId);
  const imageUrl = `/images/${req.file.filename}`;
  const { hotelName, streetAddress, description, city, state, zipCode, phoneNumber } = req.body;
  if (!Number.isInteger(hotelId) || hotelId < 0) {
    res.status(400).json({ error: `invalid hotelId ${hotelId}` });
    return;
  }
  const sql = `
  update "hotels"
    set "name" = $1,
        "description" = $2,
        "line1" = $3,
        "city" = $4,
        "state" = $5,
        "zipCode" = $6,
        "phoneNumber" = $7,
        "photoUrl" = $8
    where "hotelId" = $9
  returning *`;
  const params = [hotelName, description, streetAddress, city, state, zipCode, phoneNumber, imageUrl, hotelId];
  db.query(sql, params)
    .then(response => {
      if (!response.rows[0]) {
        res.status(404).json({ error: 'cannot find hotel' });
      }
      res.sendStatus(200);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
