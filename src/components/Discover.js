import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import axios from "axios";

function Discover({ discover, name }) {
  let length = 5;

  return (
    <>
      <h1>{name}</h1>
      <div className="d-flex justify-content-center align-items-center flex-wrap container align-items-stretch">
        {discover &&
          discover.map((movie, i) => {
            if (movie.vote_average !== null && movie.vote_average !== 0) {
              if (i < length) {
                return (
                  <div
                    className="card mx-auto mt-2 hoverable"
                    style={{ width: "18%" }}
                    key={i}
                  >
                    <img
                      className="card-img-top"
                      style={{ width: "100%", height: "auto" }}
                      src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={`${movie.title} Poster`}
                    />
                    <div
                      className="card-body"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
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
                        <StarRatings
                          rating={movie.vote_average / 2}
                          starRatedColor="gold"
                          //changeRating={this.changeRating}
                          numberOfStars={5}
                          name="rating"
                          starDimension="1.5vw"
                          starSpacing="0px"
                        />
                      </div>
                    </div>
                  </div>
                );
              }
            } else {
              length += 1;
            }
          })}
      </div>
    </>
  );
}

export default Discover;
