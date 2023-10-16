import React, { useState } from "react";
import "./ProfileInfo.css";
const ProfileInfo = (props) => {
  const [showEmail, setShowEmail] = useState(false);

  const toggleEmailVisibility = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="profile-info">
      <h2 className="profile-name">{props.name}</h2>
      <p className="profile-username">Username: {props.username}</p>
      <p className="profile-email">
        Email: {showEmail ? props.email : "Hidden"}
      </p>
      <a className="visit-link" href={props.link}>
        Visit Profile
      </a>
      <br />
      <button className="toggle-button" onClick={toggleEmailVisibility}>
        {showEmail ? "Hide Email" : "Show Email"}
      </button>
    </div>
  );
};

export default ProfileInfo;
