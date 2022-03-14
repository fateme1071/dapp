import * as React from "react";

const SvgBlocks = ({
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
      shapeRendering: "auto",
      color: color
    }}
    width={width}
    height={height}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path fill="currentColor" d="M19 19h20v20H19z">
      <animate
        attributeName="fill"
        values={`#e15b64;currentColor;currentColor`}
        keyTimes="0;0.125;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0s"
        calcMode="discrete"
      />
    </path>
    <path fill="currentColor" d="M40 19h20v20H40z">
      <animate
        attributeName="fill"
        values="#e15b64;currentColor;currentColor"
        keyTimes="0;0.125;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.125s"
        calcMode="discrete"
      />
    </path>
    <path fill="currentColor" d="M61 19h20v20H61z">
      <animate
        attributeName="fill"
        values="#e15b64;currentColor;currentColor"
        keyTimes="0;0.125;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.25s"
        calcMode="discrete"
      />
    </path>
    <path fill="currentColor" d="M19 40h20v20H19z">
      <animate
        attributeName="fill"
        values="#e15b64;currentColor;currentColor"
        keyTimes="0;0.125;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.875s"
        calcMode="discrete"
      />
    </path>
    <path fill="currentColor" d="M61 40h20v20H61z">
      <animate
        attributeName="fill"
        values="#e15b64;currentColor;currentColor"
        keyTimes="0;0.125;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.375s"
        calcMode="discrete"
      />
    </path>
    <path fill="currentColor" d="M19 61h20v20H19z">
      <animate
        attributeName="fill"
        values="#e15b64;currentColor;currentColor"
        keyTimes="0;0.125;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.75s"
        calcMode="discrete"
      />
    </path>
    <path fill="currentColor" d="M40 61h20v20H40z">
      <animate
        attributeName="fill"
        values="#e15b64;currentColor;currentColor"
        keyTimes="0;0.125;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.625s"
        calcMode="discrete"
      />
    </path>
    <path fill="currentColor" d="M61 61h20v20H61z">
      <animate
        attributeName="fill"
        values="#e15b64;currentColor;currentColor"
        keyTimes="0;0.125;1"
        dur="1s"
        repeatCount="indefinite"
        begin="0.5s"
        calcMode="discrete"
      />
    </path>
  </svg>
);

export default SvgBlocks;
