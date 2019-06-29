import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css";

import { copyData } from "../Helpers/copy";

function uuid(name) {
  if (name !== "") {
    name = name + "_";
  }
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return `${name}${s4()}${s4()}_${s4()}_${s4()}${s4()}`;
}

function Uuid(props) {
  const [name, setName] = useState("");
  const notify = () => toast("uuid Copyied!");
  const task = () => {
    copyData(uuid(name));
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

export default Uuid;
