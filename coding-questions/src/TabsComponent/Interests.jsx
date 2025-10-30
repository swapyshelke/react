import React from "react";

const Interests = ({ data, setData }) => {
  const { interest } = data;

  const handleDataChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interest: e.target.checked
        ? [...prevState, e.target.name]
        : prevState.interest.filter((i) => i !== e.target.name),
      // e.target.name
    }));
  };

  return (
    <div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="coding"
            id=""
            checked={interest.includes("coding")}
            onChange={handleDataChange}
          />{" "}
          Coding
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="music"
            id=""
            checked={interest.includes("music")}
            onChange={handleDataChange}
          />{" "}
          music
        </label>
        
      </div>
    </div>
  );
};

export default Interests;
