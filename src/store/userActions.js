// import axios from 'axios';

export const fetchUsers = (userData) => {
  return {
    type: 'FETCH_USER_FULFILLED',
    payload: userData
    // payload:axios.get('https://randomuser.me/api/?results=15 ')
  };
}

export const setUser = (user) => {
  return {
    type:'SET_USER',
    payload:user
  };
}

export const reviewUser = (values) => {
  return {
    type:'REVIEW_USER',
    payload:values
  };
}

export const updateUser = (review) => {
  console.log(review)
  return {
    type:'UPDATE_USER',
    payload:review
  }
}
