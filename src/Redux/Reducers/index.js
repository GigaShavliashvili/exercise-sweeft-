import { combineReducers } from "redux";
import userReducer from "./userReducer";
import userDetailReducer from "./userDetailReducer";
import userFollowers from "./userFollowers";

const rootReducer = combineReducers({
  users: userReducer,
  userDetail: userDetailReducer,
  userFollowers: userFollowers,
});

export default rootReducer;
