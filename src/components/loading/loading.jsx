import clsx from "clsx";
import React from "react";
import {
  Infinity,
  Blocks,
  DoubleRing,
  Ellipsis,
  Ripple,
  Rolling
} from "../icons";
import classes from "./loading.module.css";

const types = {
  infinity: Infinity,
  blocks: Blocks,
  "double-ring": DoubleRing,
  ellipsis: Ellipsis,
  ripple: Ripple,
  rolling: Rolling
};

const Loading = ({
  show = false,
  type = "infinity",
  color = "#008ccd",
  size = 64,
  className,
  iconClassName
}) => {
  const Icon = types[type] || Infinity;

  return show ? (
    <div className={clsx(classes.wrapper, className)}>
      <Icon
        color={color}
        className={iconClassName}
        width={size}
        height={size}
      />
    </div>
  ) : null;
};

export default Loading;
