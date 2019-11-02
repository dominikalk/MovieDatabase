import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import axios from "axios";
import Movie from "./components/Movie";
import DiscoverPage from "./components/DiscoverPage";
import NotFoundPage from "./components/NotFoundPage";
import ActorProfile from "./components/ActorProfile";
import ActorsPage from "./components/ActorsPage";
import Footer from "./components/Footer";

function App() {
  const APIKey = "ae26cfa38fa23d831332968adb914c97";
  //const dispatch = useDispatch();
  const [discover, setDiscover] = useState();

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div style={{ paddingBottom: "5.5rem" }}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/movie/:movieName" component={Movie} />
          <Route path="/discover" component={DiscoverPage} />
          <Route path="/actors" component={ActorsPage} />
          <Route path="/actor/:actorId" component={ActorProfile} />
          <Route component={NotFoundPage} />
        </Switch>
        <div className="mb-4"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
