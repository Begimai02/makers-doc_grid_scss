import React from "react";
import "./Body.scss";

const Body = () => {
  return (
    <div className="main-body">
      <div className="container">
        <h1>JavaScript</h1>
        <div className="card-list">
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">Bootstrap</div>
          <div className="card">jQuery</div>
          <div className="card">React</div>
          <div className="card">Python</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
