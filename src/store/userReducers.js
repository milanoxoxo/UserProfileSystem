const initalState = {
  users: [],
  loading: false,
  error: null,
};

// REDCUER
function usersReducer(state = initalState, action) {
  let users;
  switch (action.type) {
    case "FETCH_USER_PENDING":
      return { ...state, loading: true };
    case "FETCH_USER_REJECTED":
      return { ...state, loading: false, error: `${action.payload.message}` };
    case "FETCH_USER_FULFILLED":
      users = action.payload
      return { ...state, loading: false, users };
    default:
      return state;
  }
}

export default usersReducer;


