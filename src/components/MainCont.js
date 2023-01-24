import React from "react";
import ReactLogo from "../images/react-logo.png"

export default function Main() {
  return (
    <div className="main">
      <span className="text-cont">
        <h1 className="title">Fun facts about React</h1>
        <ul className="list">
          <li className="list-item">Was released in 2013</li>
          <li className="list-item">Was originally created by Jorden Walke</li>
          <li className="list-item">Has well over 100k stars on GitHub</li>
          <li className="list-item">Is maintained by Facebook</li>
          <li className="list-item">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </span>
    </div>
  )
}