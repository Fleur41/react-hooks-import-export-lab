import React from "react";
import {image} from "../data/user"

function About(props) {
  console.log(props);
  const isDisplayed = props.isDisplayed;
  if(!isDisplayed) {
    return null;
  } else {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
  }
}

export default About;