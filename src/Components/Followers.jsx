import React from "react";
import { Link } from "react-router-dom";
const Followers = ({ user, lastUserObserver }) => {
  return (
    <div className="p-2 col-lg-3 col-md-4 col-sm-6 fs" ref={lastUserObserver}>
      <div className="card w-100 h-100 shadow">
        <img src={user.avatar_url} alt="" />
        <div className="card-body fs-7">
          <Link to={`/user/${user.login}`}>
            <h5 className=" h5 fw-light  text-primary">
              {user.login} <span className="text-muted fw-bold">/</span>{" "}
              {user.name}
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Followers;
