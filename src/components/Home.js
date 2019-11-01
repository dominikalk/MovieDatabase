import React, { useEffect, useState } from "react";
import axios from "axios";
import MostPopularCard from "./MostPopularCard";
import Discover from "./Discover";
import Actors from "./Actors";
//import { fetchData } from "../actions/fetch";

//import { useSelector, useDispatch } from "react-redux";

function Home() {
  //const discover = useSelector(state => state.mostPopular);

  //const dispatch = useDispatch();
  const [popular, setPopular] = useState();
  const [discover, setDiscover] = useState();
  const [people, setPeople] = useState();
  const APIKey = "ae26cfa38fa23d831332968adb914c97";

  useEffect(() => {
    //dispatch(fetchData());
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}`)
      .then(res => setDiscover(res.data.results));
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}`)
      .then(res => setPopular(res.data.results));
    axios
      .get(`https://api.themoviedb.org/3/person/popular?api_key=${APIKey}`)
      .then(res => setPeople(res.data.results));
  }, []);

  return (
    <div className="container">
      {discover && <MostPopularCard mostPopular={discover[0]} />}

      {/* <div className="d-flex justify-content-center align-items-center flex-wrap">
        <button
          className="btn purple-gradient"
          onClick={() => setNumber(number + 1)}
        >
          Change
        </button>
      </div> */}

      {popular && <Discover discover={popular} name={"Upcoming ..."} />}

      {discover && <Discover discover={discover} name={"Discover ..."} />}
      {people && (
        <Actors actors={people} name={"Popular People ..."} isHome={true} />
      )}
    </div>
  );
}

export default Home;
