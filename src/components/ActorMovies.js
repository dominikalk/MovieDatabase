import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import Img from "react-image";
import axios from "axios";
import { animateScroll as scroll } from "react-scroll";

function ActorMovies({ movies }) {
  return (
    <>
      <h1 style={{ fontSize: "3vw" }}>Known For ...</h1>
      <div className="d-flex justify-content-center align-items-center flex-wrap container align-items-stretch">
        {movies &&
          movies.map((movie, i) => {
            if (i < 5) {
              return (
                <div
                  className="card mx-auto mt-2 hoverable"
                  style={{ width: "18%", borderRadius: "20px" }}
                  key={i}
                >
                  <Link
                    to={`/movie/${movie.id}`}
                    onClick={() => scroll.scrollToTop()}
                  >
                    <Img
                      className="card-img-top z-depth-2"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "20px 20px 0px 0px"
                      }}
                      src={[
                        `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
                        require("../assets/no-pic.png")
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
                      <Link
                        to={`/movie/${movie.id}`}
                        onClick={() => scroll.scrollToTop()}
                      >
                        <h5
                          className="card-title"
                          style={{ fontSize: "1.5vw" }}
                        >
                          {movie.title}
                        </h5>
                      </Link>
                      <p style={{ fontSize: "1.5vw" }}>{movie.character}</p>
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
