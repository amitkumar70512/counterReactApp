import './App.css';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { INC,DEC } from './redux/actions/counterActions';

function App() {
const dispatch = useDispatch();
const counter = useSelector(state => state.count)

  return (
  <>
      <h1>Counter</h1>
      <h4>Using React-Redux</h4>
      <div className='container'>
      <button type="button" class="btn btn-dark" onClick={
        ()=>{
        if(counter>0)
          dispatch(DEC())
          
        }
      }  >-</button>
      <span>{counter}</span>
      <button type="button" class="btn btn-dark" onClick={()=>dispatch(INC())}>+</button>
      </div>
  </>
  );
}

export default App;
