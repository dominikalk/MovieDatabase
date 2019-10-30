import React, { useEffect, useState } from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";

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
          <div className="row mt-4">
            <div className="col-3">
              <img
                src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="img-fluid rounded"
                alt={`${movie.title} Poster`}
              />
            </div>

            <div className="col-9 mt-4">
              <h1>{movie.title}</h1>
              <h5 className="">({movie.runtime} mins)</h5>
              <StarRatings
                rating={movie.vote_average / 2}
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
                starDimension="30px"
                starSpacing="2px"
              />
              <p className="mt-2">{movie.overview}</p>
              {/* <p>
                <b>Rating: {movie.vote_average}</b> ({movie.vote_count})
              </p> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Movie;
