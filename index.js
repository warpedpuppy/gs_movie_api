const express = require('express'),
  morgan = require('morgan');
  uuid = require('uuid');
  bodyParser = require('body-parser');

const app = express();

let Users = [];

app.use(morgan('common'));

//return a list of ALL movies to the user

app.get('/movies', (req, res) => {
  res.send('successful GET request returning a list of all the movies');
});

//Return data (description, genre, director, image URL, whether it’s featured or
//not) about a single movie by title to the user

app.get('/movies/:title', (req, res) => {
  res.send('successful GET request returning all the data about the requested movie');
});

//Return data about a genre (description) by name/title (e.g., “Thriller”)

app.get('/genres/:genre', (req, res) => {
  res.send('successful GET request returning a list of all the movies in the given genre');
});

//Return data about a director (bio, birth year, death year) by name

app.get('/directors/:name', (req, res) => {
  res.send('successful GET request returning all the data about the given director');
});

//Allow new users to register

app.post('/users', (req, res) => {
  res.send('successful POST request returning data about the new user and their new ID')
});

//Allow users to update their user info (username)

app.put('/users/:username', (req, res) => {
  res.send('successful PUT request updating user\'s username');
});

//Allow users to add a movie to their list of favorites (showing only a text
//that a movie has been added—more on this later)

app.post('/users/:username/favorites/:title', (req, res) => {
  res.send('successful POST request adding movie to user\'s list of favorites');
});

//Allow users to remove a movie from their list of favorites (showing only a
//text that a movie has been removed—more on this later)

app.delete('/users/:username/favorites/:title', (req, res) => {
  res.send('succesful DELETE request removing movie from user\'s list of favorites');
});

//Allow existing users to deregister (showing only a text that a user email has
//been removed—more on this later)

app.delete('/users/:username', (req, res) => {
  res.send('succesful DELETE request removing user and user details from the app');
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something didn\'t work!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
