const INCREMENT = 'INCREMENT';
const  DECREMENT = 'DECREMENT';

export function INC(){
  return{
    type: INCREMENT,
  }
}

export function DEC(){
  return{
    type: DECREMENT,
  }
}