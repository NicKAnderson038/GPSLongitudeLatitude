import React, { useState } from "react";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css";

import { copyData } from "../Helpers/copy";

function newDate(name) {
  if (name !== "") {
    name = name + "_";
  }
  let date = moment().format();
  date = date.replace(/-|:/g, "_");
  return `${name}${date}`;
}

function NewDate(props) {
  const [name, setName] = useState("");
  const notify = () => toast("Date Copyied!");
  const task = () => {
    copyData(newDate(name));
    notify();
  };
  return (
    <div className="card">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Customization"
        type="text"
        name=""
      />
      <button type="submit" onClick={() => task()}>
        Copy {props.title}
      </button>
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default NewDate;
