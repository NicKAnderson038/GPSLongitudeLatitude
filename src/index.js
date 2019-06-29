import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Uuid from "./Components/Uuid";
import NewDate from "./Components/Date";
import Gps from './Components/Gps'

function App() {
  return (
    <div className="App">
      <div className="banner">
        <h5>Generator (uuid & dates): Copy's to Clipboard</h5>
      </div>
      <div className="forms">
        <br />
        <Uuid title={"UUID"} />
        <br />
        <NewDate title={"Date"} />
      </div>
      <br/>
      <div className="forms">
        <br />
        <Gps title={"UUID"} placeholder={'Latitude'}/>
        <br />
        <Gps title={"Date"} placeholder={'Longitude'}/>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
