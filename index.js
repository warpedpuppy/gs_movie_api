const express = require('express'),
  morgan = require('morgan');

const app = express();

let topTenMovies = [
  {
    title: 'The Long Goodbye',
    director: 'Robert Altman'
  },
  {
    title: 'A Serious Man',
    director: 'Joel & Ethan Coen'
  },
  {
    title: 'Tokyo Story',
    director: 'Yasujiro Ozu'
  },
  {
    title: 'The 49th Parallel',
    director: 'Michael Powell'
  },
  {
    title: 'The Hudsucker Proxy',
    director: 'Joel & Ethcan Coen'
  },
  {
    title: 'Blue Velvet',
    director: 'David Lynch'
  },
  {
    title: 'Secrets and Lies',
    director: 'Mike Leigh'
  },
  {
    title: 'Late Spring',
    director: 'Yasujiro Ozu'
  },
  {
    title: 'The Lady Vanishes',
    director: 'Alfred Hitchcock'
  },
  {
    title: 'After Hours',
    director: 'Martin Scorsese'
  }
];

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Welcome to my movie app!')
});

app.get('/movies', (req, res) => {
  res.json(topTenMovies);
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something didn\'t work!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
