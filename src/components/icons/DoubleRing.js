import * as React from "react";

const SvgDoubleRing = ({
  width = 64,
  height = 64,
  color = "#008ccd",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      background: "0 0",
      display: "block",
      shapeRendering: "auto"
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
      r={32}
      strokeWidth={8}
      stroke={color}
      strokeDasharray="50.26548245743669 50.26548245743669"
      fill="none"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="1s"
        repeatCount="indefinite"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      />
    </circle>
    <circle
      cx={50}
      cy={50}
      r={23}
      strokeWidth={8}
      stroke="#e15b64"
      strokeDasharray="36.12831551628262 36.12831551628262"
      strokeDashoffset={36.128}
      fill="none"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="1s"
        repeatCount="indefinite"
        keyTimes="0;1"
        values="0 50 50;-360 50 50"
      />
    </circle>
  </svg>
);

export default SvgDoubleRing;
