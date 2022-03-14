import clsx from "clsx";
import React from "react";
import classes from "./button.module.css";
import { Rolling } from "../icons";

const Button = ({ className, children, loading = false, ...props }, ref) => {
  return (
    <button ref={ref} className={clsx(classes.root, className)} {...props}>
      {loading && <Rolling width={24} height={24} className="ml-2" />}
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
