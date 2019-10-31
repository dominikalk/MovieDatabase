import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import "./MostPopularCard.css";
import axios from "axios";

function MostPopularCard({ mostPopular }) {
  const [image, setImage] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${mostPopular.id}/images?api_key=ae26cfa38fa23d831332968adb914c97`
      )
      .then(res => setImage(res.data.backdrops[0].file_path));
  }, []);

  return (
    <>
      {image && (
        <div
          className="mt-3 hoverable animated pulse"
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/original${image})`,
            backgroundSize: "100%",
            width: "100%",
            borderRadius: "25px"
          }}
        >
          <div className="rgba-black-strong" style={{ borderRadius: "25px" }}>
            <div className=" row">
              <div className="col-3 Aligner" style={{ margin: "0px" }}>
                {" "}
                <img
                  src={`http://image.tmdb.org/t/p/w500${mostPopular.poster_path}`}
                  className="img-fluid m-4"
                  alt={`${mostPopular.title} Poster`}
                  style={{ borderRadius: "25px" }}
                />
              </div>
              <div className="col-9 Aligner">
                <div
                  className="ml-4 mr-4"
                  style={{ color: "white", margin: "2vw" }}
                >
                  <h1 className="" style={{ fontSize: "4vw" }}>
                    {mostPopular.title}
                  </h1>
                  <StarRatings
                    rating={mostPopular.vote_average / 2}
                    starRatedColor="gold"
                    numberOfStars={5}
                    name="rating"
                    starDimension="2vw"
                    starSpacing="0px"
                  />
                  <p className="mt-2" style={{ fontSize: "1.5vw" }}>
                    {mostPopular.overview}
                  </p>
                  <Link
                    to={`/movie/${mostPopular.id}`}
                    className="btn aqua-gradient"
                    style={{ fontSize: "1.5vw", padding: "1vw 2vw" }}
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MostPopularCard;
