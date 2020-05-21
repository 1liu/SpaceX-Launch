require('dotenv/config');
const express = require('express');
const fetch = require('node-fetch');

const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');

const app = express();

app.use(staticMiddleware);

app.use(express.json());

app.get('/api/upcoming', (req, res, next) => {
  const url = 'https://api.spacexdata.com/v3/launches/upcoming';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
});

app.get('/api/past', (req, res, next) => {
  const url = 'https://api.spacexdata.com/v3/launches/past';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
});

app.post('/api/site', (req, res, next) => {
  const url = 'https://api.spacexdata.com/v3/launchpads/' + req.body.site_id;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
});

app.post('/api/weather', (req, res, next) => {
  const request = req.body;
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + request.lat + '&lon=' + request.lon + `&appid=${process.env.OPENWEATHERMAP_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
