import React from "react";
import { useSelector } from "react-redux";
import { getUserDetailState } from "../Redux/Selector/userSelector";
import { Link } from "react-router-dom";
const UserChain = () => {
  const { userChain } = useSelector(getUserDetailState);

  return (
    <div className="d-flex gap-3">
      {userChain?.slice(0, userChain.length - 1).map((el, i) => {
        return (
          <div key={i}>
            <Link to={`/user/${el}`}>
              {el} {"->"}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default UserChain;
