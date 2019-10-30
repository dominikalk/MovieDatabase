import React, { useEffect, useState } from "react";
import axios from "axios";
import Truncate from "react-truncate";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import MostPopularCard from "./MostPopularCard";
import Discover from "./Discover";

function Home() {
  const [discover, setDiscover] = useState();
  const [number, setNumber] = useState(0);
  const APIKey = "ae26cfa38fa23d831332968adb914c97";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}`)
      .then(res => setDiscover(res.data.results));
  }, []);

  return (
    <div className="container">
      {discover && (
        <MostPopularCard mostPopular={discover[number]} key={number} />
      )}

      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <button
          className="btn purple-gradient"
          onClick={() => setNumber(number + 1)}
        >
          Change
        </button>
      </div>

      {discover && <Discover discover={discover} />}

      {/* {discover &&
        discover.map((movie, i) => {
          return (
            <div className="card mx-auto mt-2" style={{ width: "18%" }} key={i}>
              <img
                className="card-img-top"
                style={{ width: "100%", height: "auto" }}
                src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
              <div className="card-body">
                <Link to={`/movie/${movie.id}`}>
                  <h5 className="card-title">{movie.title}</h5>
                </Link>
                <StarRatings
                  rating={movie.vote_average / 2}
                  starRatedColor="gold"
                  //changeRating={this.changeRating}
                  numberOfStars={5}
                  name="rating"
                  starDimension="25px"
                  starSpacing="2px"
                />
            
              </div>
            </div>
          );
        })} */}
    </div>
  );
}

export default Home;
