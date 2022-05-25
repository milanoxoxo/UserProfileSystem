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
      users = action.payload;
      return { ...state, loading: false, users };
    case "UPDATE_USER":
      const updateuser = action.payload;
      state.users.forEach((element, index) => {
        if (element.id === updateuser.id) {
          state.users[index] = updateuser;
          console.log(state.users)
          return {...state, users }
        }
      });
      // return { ...state, users };
    default:
      return state;
  }
}

export default usersReducer;
