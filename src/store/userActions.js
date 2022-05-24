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
  }
}
