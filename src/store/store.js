import { createStore, combineReducers } from "redux";
import usersProfileReducer from "./userProfileReducers";
import usersReducer from "./userReducers";
import usersReviewReducer from "./userReviewReducers";

// const createStore = redux.createStore
export const store = createStore(
  combineReducers({
    usersReducer,
    usersProfileReducer,
    usersReviewReducer,
  })
);
