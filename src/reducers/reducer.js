let initialState = {
  mostPopular: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOST_POPULAR":
      return {
        ...state
      };
    case "FETCH_MOST_POPULAR_SUCCESS":
      return {
        ...state,
        mostPopular: action.data.results[0]
      };
    case "FETCH_MOST_POPULAR_ERROR":
      return {
        ...state,
        mostPopular: {}
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
