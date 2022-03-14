import clsx from "clsx";
import React from "react";
import styles from "./toggleSwitch.module.css";

const ToggleSwitch = ({ name = "toggle", className }) => {
  return (
    <label htmlFor={name} className={className}>
      <input id={name} type="checkbox" className="hidden peer" />
      <span
        className={clsx(
          styles.wrapper,
          "peer-checked:bg-emerald-400 peer-checked:after:-translate-x-full"
        )}
      ></span>
    </label>
  );
};

export default ToggleSwitch;
