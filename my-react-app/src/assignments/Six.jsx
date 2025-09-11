import React, { useEffect, useState } from "react";

const Six = () => {
  const [data, setData] = useState([]);

  const handleData = () => {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((res) => {
        setData(res)       
      });

  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>
      <button onClick={handleData}>fetch data</button>

      <ul>
       
{       console.log(data.firstName)
}       
      </ul>
    </div>
  );
};

export default Six;
