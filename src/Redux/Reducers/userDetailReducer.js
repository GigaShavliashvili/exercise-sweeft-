import { actionType } from "../actionType";
import Cookies from "js-cookie";

const initialState = {
  isLoading: true,
  userDetail: [],
  error: null,
  userChain: Cookies.get("userChain")
    ? JSON.parse(Cookies.get("userChain"))
    : [],
};

const userDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH__USERDETAIL__ISLOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionType.FETCH__USERDETAIL__SUCCESS: {
      const user = action.payload.data;
      const { login } = user;

      const existIndex = state.userChain.findIndex((user) => user === login);

      console.log(existIndex);

      const newUserChain =
        existIndex !== -1
          ? state.userChain.slice(0, existIndex + 1)
          : [...state.userChain, login];
      Cookies.set("userChain", JSON.stringify(newUserChain));

      return {
        ...state,
        userDetail: user,
        userChain: newUserChain,
        isLoading: false,
      };
    }
    case actionType.FETCH__USERDETAIL__ERROR: {
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

export default userDetailReducer;
