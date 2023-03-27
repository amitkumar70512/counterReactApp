const redux = require("redux");
const { legacy_createStore, applyMiddleware } = redux;
const axios = require("axios");
const thunk = require("redux-thunk").default;

// initial state
const initialState = {
  loading: false,
  users: [],
  error: ""
};

// actions
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

//action creator
function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUESTED
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
}

function fetchUsersError(error) {
  return {
    type: FETCH_USERS_FAILED,
    payload: error
  };
}

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

//fetch users action creators
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error msg
        dispatch(fetchUsersError(error.message));
      });
  };
};

// reducer
const store = legacy_createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchUsers());