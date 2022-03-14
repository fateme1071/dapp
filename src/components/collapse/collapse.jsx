import React, { useRef, useEffect } from "react";
import clsx from "clsx";

const Collapse = ({
  open,
  children,
  collapsedHeight = 0,
  duration,
  className,
  nested,
  ...props
}) => {
  const ref = useRef();
  const durationRef = useRef();
  useEffect(() => {
    let mounted = true;
    if (open !== null && mounted) {
      if (!duration)
        durationRef.current = Math.ceil(ref.current.scrollHeight / 100) * 150;
      else durationRef.current = duration;

      ref.current.style.transition = nested
        ? "max-height " + durationRef.current + "ms"
        : "height " + durationRef.current + "ms";

      if (open) {
        if (nested)
          ref.current.style.maxHeight = ref.current.scrollHeight * 2 + "px";
        else ref.current.style.height = ref.current.scrollHeight + "px";
      } else {
        if (nested)
          ref.current.style.maxHeight =
            typeof collapsedHeight === "string"
              ? collapsedHeight
              : collapsedHeight + "px";
        else
          ref.current.style.height =
            typeof collapsedHeight === "string"
              ? collapsedHeight
              : collapsedHeight + "px";
      }
    }

    return () => {
      mounted = false;
    };
  }, [open, collapsedHeight, duration, nested, ref, children]);
  return (
    <div
      className={clsx("overflow-hidden", nested ? "max-h-0" : "h-0", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};

export default Collapse;
