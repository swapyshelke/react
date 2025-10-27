import React from "react";

const Interests = ({ data, setData }) => {
  const { interest } = data;

  return (
    <div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="coding"
            id=""
            checked={interest.includes("coding")}
            onChange={() => {}}
          />{" "}
          Coding
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="music"
            id=""
            checked={interest.includes("music")}
            onChange={() => {}}
          />{" "}
          music
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="riding"
            id=""
            checked={interest.includes("riding")}
            onChange={() => {}}
          />{" "}
          Riding
        </label>
      </div>
    </div>
  );
};

export default Interests;
