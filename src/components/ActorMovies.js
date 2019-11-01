import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import Img from "react-image";
import axios from "axios";

function ActorMovies({ movies }) {
  return (
    <>
      <h1>Known For ...</h1>
      <div className="d-flex justify-content-center align-items-center flex-wrap container align-items-stretch">
        {movies &&
          movies.map((movie, i) => {
            if (i < 5) {
              return (
                <div
                  className="card mx-auto mt-2 hoverable"
                  style={{ width: "18%", borderRadius: "20%" }}
                  key={i}
                >
                  <Link to={`/movie/${movie.id}`}>
                    <Img
                      className="card-img-top z-depth-2"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "20px"
                      }}
                      src={[
                        `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
                        require("../assets/no-pic.jpg")
                      ]}
                      alt={`${movie.title} Poster`}
                    />
                  </Link>

                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "1vw"
                    }}
                  >
                    <div className="text-center">
                      <Link to={`/movie/${movie.id}`}>
                        <h5
                          className="card-title"
                          style={{ fontSize: "1.5vw" }}
                        >
                          {movie.title}
                        </h5>
                      </Link>
                      <p>{movie.character}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </>
  );
}

export default ActorMovies;
