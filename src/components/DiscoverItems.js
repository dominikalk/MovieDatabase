import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Img from "react-image";
import { animateScroll as scroll } from "react-scroll";

function DiscoverItems({ discover }) {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap container align-items-stretch">
      {discover &&
        discover.map((movie, i) => {
          if (true) {
            return (
              <div
                className="card mx-auto mt-2 mb-4 hoverable "
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
                      <h5 className="card-title" style={{ fontSize: "1.5vw" }}>
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
        })}
    </div>
  );
}

export default DiscoverItems;
