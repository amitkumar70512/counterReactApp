
// actions
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

//action creator
export function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUESTED
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
}

export function fetchUsersError(error) {
  return {
    type: FETCH_USERS_FAILED,
    payload: error
  };
}
