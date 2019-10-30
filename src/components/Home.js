import React, { useEffect, useState } from "react";
import axios from "axios";
import Truncate from "react-truncate";
import { Link } from "react-router-dom";

function Home() {
  const [discover, setDiscover] = useState();
  const APIKey = "ae26cfa38fa23d831332968adb914c97";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}`)
      .then(res => setDiscover(res.data.results));
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {discover &&
        discover.map((movie, i) => {
          return (
            <div
              className="card mx-auto mt-2"
              style={{ width: "31%", margin: "1%" }}
              key={i}
            >
              <img
                classname="card-img-top"
                style={{ width: "100%", height: "auto" }}
                src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
              <div className="card-body">
                <Link to={`/movie/${movie.id}`}>
                  <h5 className="card-title">{movie.title}</h5>
                </Link>
                <p>Rating: {movie.vote_average}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
