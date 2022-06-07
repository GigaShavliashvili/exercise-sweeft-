import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserState } from "../Redux/Selector/userSelector";
import { FetchUser } from "../Api/FetchUsers";
import { UserCard } from "../Components";
import PreLoader from "../Assets/PreLoader";
import useScrollHooks from "../Hooks/useScrollHooks";
/* import { Link } from "react-router-dom"; */

const Home = () => {
  const dispatch = useDispatch();

  const observer = React.createRef();

  const { isLoading, users, error } = useSelector(getUserState);

  const [page, lastUserObserver] = useScrollHooks(observer, isLoading);

  console.log(page);
  useEffect(() => {
    dispatch(FetchUser(page));
  }, [page]);

  if (error) {
    console.log("error");
  }
  return (
    <>
      <div className="row">
        {users?.map((user, i) => {
          if (users.length === i + 1) {
            return (
              <UserCard
                lastUserObserver={lastUserObserver}
                user={user}
                key={i}
              />
            );
          } else {
            return <UserCard user={user} key={i} />;
          }
        })}
      </div>
      {isLoading && <PreLoader />}
    </>
  );
};

export default Home;
