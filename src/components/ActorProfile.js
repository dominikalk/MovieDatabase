import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ActorMovies from "./ActorMovies";
import GetDate from "./GetDate";

function ActorProfile(props) {
  const [image, setImage] = useState(1);
  const [movies, setMovies] = useState();
  const [actor, setActor] = useState();

  useEffect(() => {
    if (!actor) {
      //setActor(props.match.params.actorId);

      axios
        .get(
          `https://api.themoviedb.org/3/person/${props.match.params.actorId}?api_key=ae26cfa38fa23d831332968adb914c97`
        )
        .then(res => {
          setActor(res.data);
        });
    }
    if (!movies && actor) {
      let hasPath = true;

      axios
        .get(
          `https://api.themoviedb.org/3/person/${props.match.params.actorId}/movie_credits?api_key=ae26cfa38fa23d831332968adb914c97`
        )
        .then(res => {
          setMovies(res.data.cast);
          if (res.data.cast == null) {
            hasPath = false;
          }
        });
      if (hasPath) {
        axios
          .get(
            `https://api.themoviedb.org/3/person/${props.match.params.actorId}/movie_credits?api_key=ae26cfa38fa23d831332968adb914c97`
          )
          .then(res => {
            setImage(res.data.cast[0].backdrop_path);
          });
      } else {
        setImage();
      }
    }
  }, [actor]);

  return (
    <div className="container">
      {actor && !image && movies && (
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
              <h1 className="">Actor Details Not Available</h1>
              <Link className="btn btn-danger btn-rounded" to="/">
                Home
              </Link>
              <Link className="btn btn-danger btn-rounded" to="/actors">
                Actors
              </Link>
            </div>
          </div>
        </div>
      )}
      {actor && (image !== null && image.length > 3) && (
        <>
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
                    src={`http://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    className="img-fluid m-4"
                    alt={`${actor.name} Poster`}
                    style={{ borderRadius: "25px" }}
                  />
                </div>
                <div className="col-9 Aligner">
                  <div
                    className="ml-4 mr-4"
                    style={{ color: "white", margin: "2vw" }}
                  >
                    <h1 className="" style={{ fontSize: "4vw" }}>
                      {actor.name}
                    </h1>
                    {actor.deathday && (
                      <p>{`${GetDate(actor.birthday)} - ${GetDate(
                        actor.deathday
                      )}`}</p>
                    )}
                    {!actor.deathday && (
                      <p>{`${GetDate(actor.birthday)} - Present`}</p>
                    )}
                    <p className="mt-2" style={{ fontSize: "1.5vw" }}>
                      {actor.biography}
                    </p>
                    <p style={{ fontSize: "1.5vw" }}>
                      {`Born: ${actor.place_of_birth}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {movies && <ActorMovies movies={movies} />}
        </>
      )}

      {/* {!image && movie && (
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
            </div>
          </div>
        </div>
      )} */}

      {/* {image && movie && (
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
      )} */}

      {/* {image && similar && similar.total_results !== 0 && (
        <Discover discover={similar.results} name="You may also like ..." />
      )} */}
    </div>
  );
}

export default ActorProfile;
