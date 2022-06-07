import React from "react";
import { actionType } from "../actionType";

const initialState = {
  isLoading: true,
  users: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH__USER__ISLOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionType.FETCH__USER__SUCCESS: {
      const { data } = action.payload;
      const newUsers = [...new Set([...state.users, ...data])];
      console.log(newUsers);
      return {
        ...state,
        users: newUsers,
        isLoading: false,
      };
    }
    case actionType.FETCH__USER__ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
