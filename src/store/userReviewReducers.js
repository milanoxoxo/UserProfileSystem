function usersReviewReducer(state='', action){
  switch (action.type) {
    case 'REVIEW_USER':
      return action.payload;
    default:
      return state;
  }
}

export default usersReviewReducer
