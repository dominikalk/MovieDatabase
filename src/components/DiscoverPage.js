import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import axios from "axios";
import DiscoverItems from "./DiscoverItems";
import * as Scroll from "react-scroll";
import {
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

function DiscoverPage(props) {
  const [discover, setDiscover] = useState();
  const [page, setPage] = useState(1);
  const APIKey = "ae26cfa38fa23d831332968adb914c97";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&page=${page}`
      )
      .then(res => setDiscover(res.data.results));
  }, [page]);

  function handlePaginateClick() {
    setPage(page);
  }

  return (
    <>
      <div className="container mt-1">
        <h1>Discover ...</h1>
      </div>
      <DiscoverItems discover={discover} />
      {page && (
        <div className="d-flex justify-content-center mt-3">
          {page - 2 > 0 && page - 2 < 501 && (
            <button
              onClick={() => {
                setPage(page - 2);
                scroll.scrollToTop();
              }}
              type="button"
              className="btn btn-outline-secondary btn-rounded waves-effect"
            >
              {page - 2}
            </button>
          )}
          {page - 1 > 0 && page - 1 < 501 && (
            <button
              onClick={() => {
                setPage(page - 1);
                scroll.scrollToTop();
              }}
              type="button"
              className="btn btn-outline-secondary btn-rounded waves-effect"
            >
              {page - 1}
            </button>
          )}
          {page > 0 && page < 501 && (
            <button
              type="button"
              className="btn btn-secondary btn-rounded waves-effect"
            >
              {page}
            </button>
          )}
          {page + 1 > 0 && page + 1 < 501 && (
            <button
              onClick={() => {
                setPage(page + 1);
                scroll.scrollToTop();
              }}
              type="button"
              className="btn btn-outline-secondary btn-rounded waves-effect"
            >
              {page + 1}
            </button>
          )}
          {page + 2 > 0 && page + 2 < 501 && (
            <button
              onClick={() => {
                setPage(page + 2);
                scroll.scrollToTop();
              }}
              type="button"
              className="btn btn-outline-secondary btn-rounded waves-effect"
            >
              {page + 2}
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default DiscoverPage;
