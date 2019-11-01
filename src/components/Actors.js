import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import Img from "react-image";

import { animateScroll as scroll } from "react-scroll";

function Actors({ actors, name, isHome }) {
  return (
    <div className="mt-3">
      <h1 style={{ fontSize: "3vw" }}>{name}</h1>
      <div className="d-flex justify-content-center align-items-center flex-wrap container align-items-stretch">
        {actors &&
          actors.map((actor, i) => {
            if (i < 5) {
              return (
                <div
                  className="card mx-auto mt-2 hoverable"
                  style={{ width: "18%", borderRadius: "20%" }}
                  key={i}
                >
                  <Link
                    to={`/actor/${actor.id}`}
                    onClick={() => scroll.scrollToTop()}
                  >
                    <Img
                      className="card-img-top z-depth-2"
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "20px"
                      }}
                      src={[
                        `http://image.tmdb.org/t/p/w500${actor.profile_path}`,
                        require("../assets/no-pic.jpg")
                      ]}
                      alt={`${actor.name} Poster`}
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
                      {isHome && (
                        <>
                          <h5
                            className="card-title"
                            style={{ fontSize: "1.5vw" }}
                          >
                            <Link
                              to={`/actor/${actor.id}`}
                              onClick={() => scroll.scrollToTop()}
                            >
                              {actor.name}
                            </Link>
                          </h5>
                        </>
                      )}
                      {!isHome && (
                        <>
                          <h5
                            className="card-title"
                            style={{ fontSize: "1vw" }}
                          >
                            <Link
                              to={`/actor/${actor.id}`}
                              onClick={() => scroll.scrollToTop()}
                            >
                              <b>{actor.name}</b>
                            </Link>
                          </h5>
                          <h5 style={{ fontSize: "1vw" }}>{actor.character}</h5>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default Actors;
