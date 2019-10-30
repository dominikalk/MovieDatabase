import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import axios from "axios";
import Movie from "./components/Movie";

function App() {
  const APIKey = "ae26cfa38fa23d831332968adb914c97";
  const [discover, setDiscover] = useState();
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}`)
      .then(res => setDiscover(res.data.results));
    axios
      .get(`https://api.themoviedb.org/3/movie/475557?api_key=${APIKey}`)
      .then(res => {
        setMovie(res.data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:movieName" component={Movie} />
      </Switch>
      {/* {movie && <Movie movie={movie} />} */}
    </>
  );
}

export default App;
