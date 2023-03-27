import { legacy_createStore, applyMiddleware, combineReducers} from "redux";
import counterReducer from "../reducers/counterReducer";
import userReducer from "../reducers/userReducer";
const thunk = require("redux-thunk").default;


const rootReducers = combineReducers({
    counter: counterReducer,
    user: userReducer
})
const store = legacy_createStore(rootReducers,applyMiddleware(thunk));
store.subscribe(()=> store.getState())

export default store;