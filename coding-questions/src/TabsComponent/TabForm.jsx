import React, { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

import "./Tabs.css";

const TabForm = () => {

  // tabs data
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },

    {
      name: "Interests",
      component: Interests,
    },

    {
      name: "Settings",
      component: Settings,
    },
  ];

  const [activeTab, setActiveTab] = useState(0); // 0 is an index

  // keep data you want persistent across your web app
  // at the parent component, central component
  const [data, setData] = useState({
    name:"swapnil",
    age: "22",
    email: "swpnil@gmail.com",
    interest: ["coding", "music"],
    theme:"dark"
  })

  const ActiveTabComponent = tabs[activeTab].component;
  // ActiveTabComponent - this variable will have index of an active tab
  // is this variable or a function (component)

  const handleNextClick = () => {
    setActiveTab(prev => prev + 1);
  }

  const handlePrevClick = () => {
          setActiveTab(prev => prev - 1);

  }


  const handleSubmitClick = () => {
      // ask interviewer what to do on submit
      // make api call
      
  }
  return (
    <div className="main__container">
      <div className="container">
        {tabs.map((t, index) => {
          return (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className="heading"
            >
              {t.name}
            </div>
          );
        })}
      </div>

      <div className="tab__body">{<ActiveTabComponent data={data} setData={setData} />}</div>

      {activeTab > tabs.length - 1 && <button onClick={handlePrevClick}>Prev</button>}
      {activeTab < tabs.length - 1 && <button onClick={handleNextClick}>Next</button>}
      {activeTab === tabs.length - 1 && <button onClick={handleSubmitClick}>Submit</button>}
    </div>
  );
};

export default TabForm;
