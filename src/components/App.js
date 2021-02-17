import React, { Component, useState } from "react";
import Heading from './Heading';
import InputQuery from './InputQuery';
import SubHeading from './SubHeading';
import SubmitButton from './SubmitButton';


import '../styles/App.css';
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


