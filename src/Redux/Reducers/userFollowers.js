import { actionType } from "../actionType";

const initialState = {
  isLoading: true,
  followers: [],
  error: null,
};

const userFollowers = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH__USERFOLLOW__ISLOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionType.FETCH__USERFOLLOW__SUCCESS: {
      const { data } = action.payload;
      const newFollowers = [...new Set([...state.followers, ...data])];
      console.log(newFollowers);
      return {
        ...state,
        followers: newFollowers,
        isLoading: false,
      };
    }
    case actionType.FETCH__USERFOLLOW__ERROR: {
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

export default userFollowers;
