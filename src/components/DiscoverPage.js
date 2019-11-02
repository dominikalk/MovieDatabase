import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DiscoverItems from "./DiscoverItems";
import { animateScroll as scroll } from "react-scroll";

function DiscoverPage(props) {
  const [sort, setSort] = useState("None");
  const [sortName, setSortName] = useState("None");
  const [discover, setDiscover] = useState();
  const [query, setQuery] = useState("");
  const [isQuery, setIsQuery] = useState(false);
  const [page, setPage] = useState(1);
  const [hasResult, setHasResult] = useState(true);
  const [pages, setPages] = useState(0);
  const [search, setSearch] = useState("Search");
  const [year, setYear] = useState("None");
  const APIKey = "ae26cfa38fa23d831332968adb914c97";

  useEffect(() => {
    let isQueryTemp = true;

    if (query !== "") {
      isQueryTemp = true;
    } else {
      isQueryTemp = false;
    }
    if (!isQueryTemp) {
      if (sort !== "None") {
        axios
          .get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&page=${page}&year=${year}&sort_by=${sort}`
          )
          .then(res => {
            setDiscover(res.data.results);
            setPages(res.data.total_pages);
            setIsQuery(false);
            if (res.data.total_results === 0) {
              setHasResult(false);
            } else {
              setHasResult(true);
            }
          });
      } else {
        axios
          .get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&page=${page}&year=${year}`
          )
          .then(res => {
            setDiscover(res.data.results);
            setPages(res.data.total_pages);
            setIsQuery(false);
            if (res.data.total_results === 0) {
              setHasResult(false);
            } else {
              setHasResult(true);
            }
          });
      }
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&page=${page}&query=${query}&year=${year}`
        )
        .then(res => {
          setDiscover(res.data.results);
          setPages(res.data.total_pages);
          setIsQuery(false);
          setSort("None");
          setSortName("None");
          if (res.data.total_results === 0) {
            setHasResult(false);
          } else {
            setHasResult(true);
          }
        });
    }

    //}
  }, [page, isQuery]);

  function handleQuerySubmit(event) {
    setPage(1);
    setIsQuery(true);
    event.preventDefault();
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-8"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuMenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Year: {year}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuMenu">
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setPage(1);
                    setIsQuery(true);
                    setYear("None");
                  }}
                >
                  None
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setPage(1);
                    setIsQuery(true);
                    setYear("2019");
                  }}
                >
                  2019
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setPage(1);
                    setIsQuery(true);
                    setYear("2018");
                  }}
                >
                  2018
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setPage(1);
                    setIsQuery(true);
                    setYear("2017");
                  }}
                >
                  2017
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setPage(1);
                    setIsQuery(true);
                    setYear("2016");
                  }}
                >
                  2016
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setPage(1);
                    setIsQuery(true);
                    setYear("2015");
                  }}
                >
                  2015
                </button>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuMenu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort By: {sortName}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuMenu">
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setPage(1);
                    setIsQuery(true);
                    setSort("None");
                    setSearch("Search");
                    setSortName("None");
                  }}
                >
                  None
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setPage(1);
                    setIsQuery(true);
                    setQuery("");
                    setSearch("Search");
                    setSort("popularity.desc");
                    setSortName("Popularity");
                  }}
                >
                  Popularity
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setPage(1);
                    setIsQuery(true);
                    setQuery("");
                    setSearch("Search");
                    setSort("vote_average.desc");
                    setSortName("Rating");
                  }}
                >
                  Rating
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => {
                    setPage(1);
                    setSearch("Search");
                    setIsQuery(true);
                    setQuery("");
                    setSort("revenue.desc");
                    setSortName("Revenue");
                  }}
                >
                  Revenue
                </button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <form onSubmit={handleQuerySubmit} className="md-form" type="input">
              <input
                value={query}
                type="text"
                className="form-control"
                onSubmit={handleQuerySubmit}
                onChange={event => {
                  setQuery(event.target.value);
                  if (event.target.value === "") {
                    setSearch("Search");
                  } else {
                    setSearch("");
                  }
                }}
              />
              <label htmlFor="form1">{search}</label>
            </form>
          </div>
        </div>
      </div>

      <div className="container mt-1">
        <h1 style={{ fontSize: "3vw" }}>Discover ...</h1>
      </div>
      {hasResult && <DiscoverItems discover={discover} />}
      {!hasResult && (
        <div
          className="container rgba-red-strong mt-3 card-image"
          style={{
            borderRadius: "25px",
            backgroundImage:
              "url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)",
            backgroundSize: "100%"
          }}
        >
          <div
            className="rgba-red-strong row justify-content-center"
            style={{ borderRadius: "25px" }}
          >
            <div className="mt-2 text-center" style={{ padding: "5vw" }}>
              <h1 className="">No Results</h1>
              <Link className="btn btn-danger btn-rounded" to="/">
                Home
              </Link>
            </div>
          </div>
        </div>
      )}

      {page && (
        <div className="d-flex justify-content-center mt-3">
          {page - 2 > 0 && page - 2 < pages + 1 && (
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
          {page - 1 > 0 && page - 1 < pages + 1 && (
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
          {page > 0 && page < pages + 1 && (
            <button
              type="button"
              className="btn btn-secondary btn-rounded waves-effect"
            >
              {page}
            </button>
          )}
          {page + 1 > 0 && page + 1 < pages + 1 && (
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
          {page + 2 > 0 && page + 2 < pages + 1 && (
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
