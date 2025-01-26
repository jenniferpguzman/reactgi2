import React, { useState } from 'react';

function SearchMovie() {

  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();


    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&a82e00f040aac70ac013c269d87afcae&include_adult=false&language=en-US&page=1&api_key=a82e00f040aac70ac013c269d87afcae`

    try{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    setMovies(data.results);
    } catch (err){
      console.log(err);
    }


  }
return (
  <>
  <form className="form" onSubmit={searchMovies}>
    <label className="label" htmlFor="query">Movie Name</label>
    <input className="input" type="text" name="query" placeholder='Shrek'
    value={query} onChange={(e) => setQuery(e.target.value)}/>
    <button className="button" type="submit">Search</button>
  </form>
  <div className="card-list">
    {movies.map(movie => (
      <div className="card" key={movie.id}>
        <h3>{movie.title}</h3>
        <img className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />
        <p>Release Date: {movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    ))}
  </div>
  </>
)
}

export default SearchMovie;