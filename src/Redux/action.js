import { actionType } from "./actionType";

// 1. This for Users Fetching -------

export const fetchUserSuccess = (users) => {
  return {
    type: actionType.FETCH__USER__SUCCESS,
    payload: users,
  };
};
export const fetchUserError = (error) => {
  return {
    type: actionType.FETCH__USER__ERROR,
    payload: error,
  };
};

export const fetchisLoading = () => {
  return {
    type: actionType.FETCH__USER__ISLOADING,
  };
};

// ------------
// 2. This for UserDetails Fetching  ------------

export const fetchUserDetailSuccess = (user) => {
  return {
    type: actionType.FETCH__USERDETAIL__SUCCESS,
    payload: user,
  };
};
export const fetchUserDetailErrorr = (error) => {
  return {
    type: actionType.FETCH__USERDETAIL__ERROR,
    payload: error,
  };
};

export const fetchUserDetailisLoading = () => {
  return {
    type: actionType.FETCH__USERDETAIL__ISLOADING,
  };
};

//----------------
// 3. this for userFollowers Fetchingg .......

export const fetchUserFollowSuccess = (followers) => {
  return {
    type: actionType.FETCH__USERFOLLOW__SUCCESS,
    payload: followers,
  };
};
export const fetchUserFollowError = (error) => {
  return {
    type: actionType.FETCH__USERFOLLOW__ERROR,
    payload: error,
  };
};

export const fetchUserFollowisLoading = () => {
  return {
    type: actionType.FETCH__USERDETAIL__ISLOADING,
  };
};
