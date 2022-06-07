import axios from "axios";
import { USER_API, PERPAGE, PAGE } from "../Utils";
import {
  fetchUserSuccess,
  fetchUserError,
  fetchisLoading,
  //-------
  fetchUserDetailSuccess,
  fetchUserDetailErrorr,
  fetchUserDetailisLoading,
  //-------
  fetchUserFollowSuccess,
  fetchUserFollowError,
  fetchUserFollowisLoading,
} from "../Redux/action";

/**
 * @desc Fetching user detailed information
 * @param userId - ID of user
 * @return function which is dispatching success or failure AC
 */

export const FetchUser = (page) => {
  return (dispatch) => {
    dispatch(fetchisLoading());
    axios({
      method: "GET",
      url: `${USER_API}?since=${page}&per_page=${PERPAGE}`,
      /*    headers: {
        Authorization: `token ${process.env.REACT_APP_USER_TOKEN}`,
      }, */
    })
      .then((res) => {
        dispatch(fetchUserSuccess(res));
      })
      .catch((err) => {
        dispatch(fetchUserError(err));
      })
      .finally(() => {
        console.log("Done");
      });
  };
};

export const fetchUserDetail = (userName) => {
  return (dispatch) => {
    dispatch(fetchUserDetailisLoading());
    axios({
      method: "GET",
      url: `${USER_API}/${userName}`,
      /*  headers: {
        Authorization: `token ${process.env.REACT_APP_USER_TOKEN}`,
      }, */
    })
      .then((res) => {
        dispatch(fetchUserDetailSuccess(res));
      })
      .catch((err) => {
        dispatch(fetchUserDetailErrorr(err));
      })
      .finally(() => {
        console.log("Done");
      });
  };
};

export const ferchUserFollow = (userName, page) => {
  return (dispatch) => {
    dispatch(fetchUserFollowisLoading());
    axios({
      method: "GET",
      url: `${USER_API}/${userName}/followers?page=${page}&per_page=${PERPAGE}`,
      /*   headers: {
        Authorization: `token ${process.env.REACT_APP_USER_TOKEN}`,
      }, */
    })
      .then((res) => {
        dispatch(fetchUserFollowSuccess(res));
      })
      .catch((err) => {
        dispatch(fetchUserFollowError(err));
      });
  };
};
