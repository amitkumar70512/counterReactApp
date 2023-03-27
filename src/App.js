import './App.css';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { INC,DEC } from './redux/actions/counterActions';
import {fetchUsersRequest,fetchUsersSuccess,fetchUsersError} from './redux/actions/userActions'
import axios from 'axios';

function App() {
const dispatch = useDispatch();
const counter = useSelector(state => state.counter.count)
const userData = useSelector(state => state.user.users)
const loading = useSelector(state => state.user.loading)

//fetch users action creators
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then((res) => {
        const users = res.data.map((user,index) => index+1 +' ' +user.name+'  ');
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error msg
        dispatch(fetchUsersError(error.message));
      });
  };
};
  return (
  <>
      <h1>Counter</h1>
      <h4>Using React-Redux</h4>
      <div className='container'>
      <button type="button" className="btn btn-dark" onClick=
      {
        ()=>{
        if(counter>0)
          dispatch(DEC())
          
        }
      }  
      >-
      </button>
      <span>{counter}</span>
      <button type="button" className="btn btn-dark" onClick={()=>dispatch(INC())}>+</button>
      </div>

      <div className='container'>
        
      <h4>Using  Redux-thunk middleware</h4>
        <button type="button" className='btn btn-success' onClick={()=>dispatch(fetchUsers())}> Fetch</button>
      </div>
      <div className='content'>
      {
        loading && <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      }

      <span>{!loading && userData}</span>
      </div>
  </>
  );
}

export default App;
