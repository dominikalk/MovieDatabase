import React, { useEffect, useState } from "react";
import axios from "axios";

function Movie(props) {
  const [movie, setMovie] = useState();
  const APIKey = "ae26cfa38fa23d831332968adb914c97";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.match.params.movieName}?api_key=${APIKey}`
      )
      .then(res => setMovie(res.data));
  }, []);

  return (
    <>
      {movie && (
        <div className="container">
          <h1>{movie.title}</h1>
          <div className="row">
            <div className="col-4">
              <img
                src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="img-fluid"
                alt={`${movie.title} Poster`}
              />
            </div>

            <div className="col-8">
              <h4 className="">({movie.runtime} mins)</h4>
              <p>{movie.overview}</p>
              <p>
                <b>Rating: {movie.vote_average}</b> ({movie.vote_count})
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Movie;
