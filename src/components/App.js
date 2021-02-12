import React, { Component, useState } from "react";
import '../styles/App.css';
global.TimerSDK = require('path-to-script'); 
const App = () => {
  return (
    <div id="main">
      <Heading/>
      <InputQuery/>
      <SubHeading/>
      <SubmitButton/>
    </div>
  )
}
export default App;


