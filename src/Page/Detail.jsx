import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserDetail, ferchUserFollow } from "../Api/FetchUsers";
import {
  getUserDetailState,
  getUserFollowersState,
} from "../Redux/Selector/userSelector";
import { UserCard, Followers, UserChain } from "../Components";
import PreLoader from "../Assets/PreLoader";
import useScrollHooks from "../Hooks/useScrollHooks";

const Detail = () => {
  const { userName } = useParams();
  const dispatch = useDispatch();
  const observer = React.createRef();
  const { isLoading, error, userDetail } = useSelector(getUserDetailState);
  const folowersIsLoading = useSelector(getUserFollowersState).isLoading;
  const { followers } = useSelector(getUserFollowersState);
  const [page, lastUserObserver] = useScrollHooks(observer, folowersIsLoading);

  useEffect(() => {
    dispatch(fetchUserDetail(userName));
    dispatch(ferchUserFollow(userName, page));
  }, [userName, page, dispatch]);

  if (error) {
    console.log(error);
  }

  return (
    <>
      <div className="row">
        <UserCard user={userDetail} profile={true} />
      </div>
      <div className="row mt-4">
        <UserChain />
        <h2>Followers:</h2>
        {followers?.map((user, i) => {
          if (followers.length === i + 1) {
            return (
              <Followers
                lastUserObserver={lastUserObserver}
                user={user}
                key={user.id}
              />
            );
          } else {
            return <Followers user={user} key={user.id} />;
          }
        })}
        {isLoading && <PreLoader />}
      </div>
    </>
  );
};

export default Detail;
