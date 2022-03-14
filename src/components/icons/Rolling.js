import * as React from "react";

const SvgRolling = ({
  width = 64,
  height = 64,
  color = "#008ccd",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      background: "0 0",
      display: "block",
      shapeRendering: "auto",
      color: color
    }}
    width={width}
    height={height}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      fill="none"
      stroke="currentColor"
      strokeWidth={10}
      r={35}
      strokeDasharray="164.93361431346415 56.97787143782138"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </circle>
  </svg>
);

export default SvgRolling;
