// initial state
const initialState = {
    loading: false,
    users: [],
    error: ""
  };
  
// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_USERS_REQUESTED":
        return {
          ...state,
          loading: true
        };
      case "FETCH_USERS_SUCCESS":
        return {
          loading: false,
          users: action.payload,
          error: ""
        };
      case "FETCH_USERS_FAILED":
        return {
          loading: false,
          users: [],
          error: action.payload
        };
      default:
        return state;
    }
  };

export default reducer;