import React, { useEffect, useState } from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import Discover from "./Discover";
import Actors from "./Actors";

function Movie(props) {
  const [movie, setMovie] = useState();
  const [actors, setActors] = useState();
  const [image, setImage] = useState();
  const [similar, setSimilar] = useState();
  //const [error, setErrror] = useState(false);
  const APIKey = "ae26cfa38fa23d831332968adb914c97";

  useEffect(() => {
    if (!actors) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${props.match.params.movieName}/credits?api_key=${APIKey}`
        )
        .then(res => setActors(res.data.cast));
    }
    if (!movie) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${props.match.params.movieName}?api_key=${APIKey}`
        )
        .then(res => setMovie(res.data));
    }

    if (movie) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=ae26cfa38fa23d831332968adb914c97`
        )
        .then(res => setImage(res.data.backdrops[0].file_path));
    }

    if (!similar) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${props.match.params.movieName}/similar?api_key=${APIKey}`
        )
        .then(res => setSimilar(res.data));
    }
  }, [movie]);

  console.log(movie);
  console.log(similar);

  return (
    <div className="container">
      {/* {error && (
        <>
          <h1>Error - Movie Does Not Exist</h1>
          <Link to="/">Home</Link>
        </>
      )} */}
      {image && movie && (
        <div
          className="mt-3 hoverable animated pulse"
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/original${image})`,
            backgroundSize: "100%",
            width: "100%",
            borderRadius: "25px"
          }}
        >
          <div
            className="rgba-black-strong  mb-2"
            style={{ borderRadius: "25px" }}
          >
            <div className=" row">
              <div className="col-3 Aligner">
                <img
                  src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="img-fluid m-4"
                  alt={`${movie.title} Poster`}
                  style={{ borderRadius: "25px" }}
                />
              </div>
              <div className="col-9 Aligner">
                <div
                  className="ml-4 mr-4"
                  style={{ color: "white", margin: "2vw" }}
                >
                  <h1 className="" style={{ fontSize: "4vw" }}>
                    {movie.title}
                  </h1>
                  <StarRatings
                    rating={movie.vote_average / 2}
                    starRatedColor="gold"
                    numberOfStars={5}
                    name="rating"
                    starDimension="2vw"
                    starSpacing="0px"
                  />
                  <p className="mt-2" style={{ fontSize: "1.5vw" }}>
                    {movie.overview}
                  </p>
                  <p style={{ fontSize: "1.5vw" }}>
                    {movie.genres.map((genre, i) => {
                      if (i === movie.genres.length - 1) {
                        return `${genre.name}`;
                      } else {
                        return `${genre.name}, `;
                      }
                    })}
                  </p>
                  {/* <Link
                    to={`/movie/${movie.id}`}
                    className="btn aqua-gradient"
                    style={{ fontSize: "1.5vw", padding: "1vw 2vw" }}
                  >
                    See More
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {movie && (
        <div className="row">
          <div className="col-8">
            {actors && <Actors actors={actors} name="Actors ..." />}
          </div>
          <div className="col-4" style={{ fontSize: "1.1vw" }}>
            <h1>Details ...</h1>
            <ul className="list-group">
              <li className="list-group-item" style={{ padding: "0.8vw 3vw" }}>
                Name: {movie.title}
              </li>
              <li className="list-group-item" style={{ padding: "0.8vw 3vw" }}>
                Rating: {movie.vote_average / 2}
              </li>
              <li className="list-group-item" style={{ padding: "0.8vw 3vw" }}>
                Runtime: {movie.runtime} mins
              </li>
              <li className="list-group-item" style={{ padding: "0.8vw 3vw" }}>
                Release Date: {movie.release_date}
              </li>
              <li className="list-group-item" style={{ padding: "0.8vw 3vw" }}>
                Genre(s):{" "}
                {movie.genres.map((genre, i) => {
                  if (i === movie.genres.length - 1) {
                    return `${genre.name}`;
                  } else {
                    return `${genre.name}, `;
                  }
                })}
              </li>
              <li className="list-group-item" style={{ padding: "0.8vw 3vw" }}>
                Budget: {movie.budget}
              </li>
              <li className="list-group-item" style={{ padding: "0.8vw 3vw" }}>
                Revenue: {movie.revenue}
              </li>
            </ul>
          </div>
        </div>
      )}

      {similar && similar.total_results !== 0 && (
        <Discover discover={similar.results} name="You may also like ..." />
      )}
      {/* {movie && (
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
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Movie;
