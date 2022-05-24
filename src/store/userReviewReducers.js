function usersReviewReducer(state='', action){
  switch (action.type) {
    case 'REVIEW_USER':
      console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
}

export default usersReviewReducer