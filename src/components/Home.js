import React, { useEffect, useState } from "react";
import axios from "axios";
import MostPopularCard from "./MostPopularCard";
import Discover from "./Discover";
//import { fetchData } from "../actions/fetch";

//import { useSelector, useDispatch } from "react-redux";

function Home() {
  //const discover = useSelector(state => state.mostPopular);

  //const dispatch = useDispatch();
  const [popular, setPopular] = useState();
  const [discover, setDiscover] = useState();
  const [number, setNumber] = useState(0);
  const APIKey = "ae26cfa38fa23d831332968adb914c97";

  console.log(discover);

  useEffect(() => {
    //dispatch(fetchData());
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}`)
      .then(res => setDiscover(res.data.results));
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}`)
      .then(res => setPopular(res.data.results));
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

      {popular && <Discover discover={popular} name={"Upcoming ..."} />}
      {discover && <Discover discover={discover} name={"Discover ..."} />}
    </div>
  );
}

export default Home;
