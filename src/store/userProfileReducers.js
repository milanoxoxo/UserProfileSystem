function usersProfileReducer(state='', action){
  switch (action.type) {
    case 'SET_USER':
      console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
}

export default usersProfileReducer