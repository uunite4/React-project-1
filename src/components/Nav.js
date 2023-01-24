import React from "react";
import ReactLogo from "../images/react-logo.png"

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo-cont">
        <img className="logo-img" src={ReactLogo}></img>
        <h3 className="logo-text">ReactFacts</h3>
      </div>
      <h4 className="proj-1">React Course - Project 1#</h4>
    </nav>
  )
}