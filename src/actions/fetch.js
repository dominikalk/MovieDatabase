import axios from "axios";

const APIKey = "ae26cfa38fa23d831332968adb914c97";

const fetchMostPopular = () => {
  return {
    type: "FETCH_MOST_POPULAR"
  };
};

const fetchMostPopularSuccess = data => {
  return {
    type: "FETCH_MOST_POPULAR_SUCCESS",
    data
  };
};

const fetchMostPopularError = err => {
  return {
    type: "FETCH_MOST_POPULAR_ERROR",
    err
  };
};

export const fetchData = () => {
  return dispatch => {
    try {
      dispatch(fetchMostPopular);
      axios
        .get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}`)
        .then(res => dispatch(fetchMostPopularSuccess(res.data)));
    } catch (err) {
      dispatch(fetchMostPopularError(err));
    }
  };
};
