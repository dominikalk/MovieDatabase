import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Img from "react-image";

function DiscoverItems({ discover }) {
  //const [ discover , setDiscover ]

  // useEffect(() => {
  //   axios
  //   .get()
  //   .then(res => setDiscover(res.data.results))
  // }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap container align-items-stretch">
      {discover &&
        discover.map((movie, i) => {
          if (
            // movie.vote_average !== null &&
            // movie.poster_path !== null &&
            // movie.vote_average !== 0
            true
          ) {
            return (
              <div
                className="card mx-auto mt-2 mb-4 hoverable "
                style={{ width: "18%", borderRadius: "20%" }}
                key={i}
              >
                <Img
                  className="card-img-top"
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
