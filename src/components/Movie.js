import React, { useEffect, useState } from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import Discover from "./Discover";
import Actors from "./Actors";
import GetDate from "./GetDate";

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
        .then(res => {
          setMovie(res.data);
          setImage(res.data.backdrop_path);
        });
    }

    if (movie) {
      // try {
      //   axios
      //     .get(
      //       `https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=ae26cfa38fa23d831332968adb914c97`
      //     )
      //     .then(res => setImage(res.data.backdrops[0].file_path));
      // } catch (err) {
      //   setImage("/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg");
      // }

      if (movie.id.toString() !== props.match.params.movieName) {
        setActors();
        setMovie();
        setImage();
        setSimilar();
      }
    }

    if (!similar) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${props.match.params.movieName}/similar?api_key=${APIKey}`
        )
        .then(res => setSimilar(res.data));
    }
  }, [movie, props.match.params.movieName]);

  const formatter = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });

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

      {!image && movie && (
        <div
          className="container rgba-red-strong mt-3 card-image"
          style={{
            borderRadius: "25px",
            backgroundImage:
              "url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)",
            backgroundSize: "100%"
          }}
        >
          <div
            className="rgba-red-strong row justify-content-center"
            style={{ borderRadius: "25px" }}
          >
            <div className="mt-2 text-center" style={{ padding: "5vw" }}>
              <h1 className="">Movie Details Not Available</h1>
              <Link className="btn btn-danger btn-rounded" to="/">
                Home
              </Link>
              <Link className="btn btn-danger btn-rounded" to="/discover">
                Movies
              </Link>
            </div>
          </div>
        </div>
      )}

      {image && movie && (
        <div className="row">
          <div className="col-8">
            {actors && <Actors actors={actors} name="Actors ..." />}
          </div>
          <div className="col-4" style={{ fontSize: "1.1vw" }}>
            <h1>Details ...</h1>
            <ul className="list-group-flush" style={{ padding: "0px" }}>
              <li className="list-group-item" style={{ padding: "0.8vw 2vw" }}>
                <i className="fas fa-signature mr-3"></i>
                Name: {movie.title}
              </li>
              <li className="list-group-item" style={{ padding: "0.8vw 2vw" }}>
                <i className="far fa-star mr-3"></i>Rating:{" "}
                {movie.vote_average / 2} / 5
              </li>
              <li className="list-group-item" style={{ padding: "0.8vw 2vw" }}>
                <i className="far fa-clock mr-3"></i>Runtime: {movie.runtime}{" "}
                mins
              </li>
              <li className="list-group-item" style={{ padding: "0.8vw 2vw" }}>
                <i className="far fa-calendar-alt mr-3"></i>Release Date:{" "}
                {GetDate(movie.release_date)}
              </li>
              <li className="list-group-item" style={{ padding: "0.8vw 2vw" }}>
                <i className="fas fa-film mr-3"></i>Genre(s):{" "}
                {movie.genres.map((genre, i) => {
                  if (i === movie.genres.length - 1) {
                    return `${genre.name}`;
                  } else {
                    return `${genre.name}, `;
                  }
                })}
              </li>
              <li className="list-group-item" style={{ padding: "0.8vw 2vw" }}>
                <i className="fas fa-hand-holding-usd mr-3"></i>Budget:{" "}
                {formatter.format(movie.budget)}
              </li>
              <li className="list-group-item" style={{ padding: "0.8vw 2vw" }}>
                <i className="fas fa-dollar-sign mr-3"></i>Revenue:{" "}
                {formatter.format(movie.revenue)}
              </li>
            </ul>
          </div>
        </div>
      )}

      {image && similar && similar.total_results !== 0 && (
        <Discover discover={similar.results} name="You may also like ..." />
      )}
    </div>
  );
}

export default Movie;
