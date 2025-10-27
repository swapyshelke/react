import React from "react";

import "./Tabs.css";

const Profile = ({ data, setData }) => {
  const { name, age, email } = data;

  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div className="profile__page">
      <div className="profile">
        <label htmlFor="">Name</label>
        <div>
          <input
            onChange={(e) => handleDataChange(e, "name")}
            type="text"
            value={name}
          />
        </div>
        <label htmlFor="">age</label>
        <div>
          <input
            onChange={(e) => handleDataChange(e, "age")}
            type="text"
            value={age}
          />
        </div>
        <label htmlFor="">Email</label>
        <div>
          <input
            onChange={(e) => handleDataChange(e, "email")}
            type="text"
            value={email}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
