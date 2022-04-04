import React from 'react';
import './App.css';

import { addWatchedMovie, add, removeWatchedMovie, getWatchedMovies, getAllMovies } from './index.js';
//We utilisin th method from index and we are exporting the component to index which make it cyclic thing
//As index.js is our entry way to call app.js so it would be good if we make small component and then by combining them make the out component

/*Mix of es6 and es 5 so we should be consistent on selection*/

const getMoviesComponents = (movies) => {
  var components = [];

  //We can make compoent similar to card that component can used 
  movies.forEach(function(movie) {
    //Use the spread operator const { title, comment, image } = movie;
    components.push(
      <div className="all">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          <a className="movie-watched" href="#" onClick={function() { addWatchedMovie(movie.title, movie.comment, movie.image) }}>//passing the movie would be more convient instead given addwatched functionality on link we should do it on different button like add which good for user to understand
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    )
  })

  return components;
}

function getWatchedMoviesComponents(movies) {
  var components = [];

  movies.forEach(function(movie) {
    components.push(movie && (
      <div className="watched">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          <a className="movie-watched" href="#" onClick={function() { removeWatchedMovie(movie.title) }}>//we shoudl add id to structre which should be unique it will easier to delete and add 
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    ))
  })

  return components;
}

function App(props) {
  /* Divide the below into small component such as 
  
  Header - <h1>Codest Movies!</h1> by default loaded every time 
  
  , AddMovie - <h1>Add movie!</h1>
              <b>TITLE:<br /><input type="text" onChange={function(e) { title = e.target.value; }} /></b><br />
              <b>IMAGE URL:<br /><input type="text" onChange={function(e) { image = e.target.value; }} /></b><br />
              <b>COMMENT:<br /><input type="text" onChange={function(e) { comment = e.target.value; }} /></b><br />
               <input type="button" onClick={function(e) { add(title, image, comment); }} value="ADD MOVIE" />

               should be loaded when user wanted to add movie details and secondly re route to watch list and watch movie component

  , WatchList - 
  
  ,WatchedMovies -
  
  */ 

  return (
    <div className="App">
      
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>/*--h1 should be for top most to make the heierchy maitain we should use h2 ot other header */
      <b>TITLE:<br /><input type="text" onChange={function(e) { title = e.target.value; }} /></b><br />
      <b>IMAGE URL:<br /><input type="text" onChange={function(e) { image = e.target.value; }} /></b><br />
      <b>COMMENT:<br /><input type="text" onChange={function(e) { comment = e.target.value; }} /></b><br />
      <input type="button" onClick={function(e) { add(title, image, comment); }} value="ADD MOVIE" />

      <h1>Watchlist:</h1> /*Label Should be Movies*/
      {getMoviesComponents(getAllMovies())}

      <h1>Already watched:</h1> /*Label Should be "My List"*/
      {getWatchedMoviesComponents(getWatchedMovies())}// conditional rendering if watched movie is not emtpy
    </div>
  );
}

var title = '';
var image = '';
var comment = '';

export default App;
