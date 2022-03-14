import { Portal } from "..";
import { useLockBodyScroll } from "../../hooks";
import clsx from "clsx";
import React from "react";
import "wicg-inert";
import styles from "./modal.module.css";

export default function Modal({
  open,
  onClose,
  locked = true,
  className,
  children
}) {
  useLockBodyScroll(open);
  const [active, setActive] = React.useState(false);
  const backdrop = React.useRef(null);

  React.useEffect(() => {
    const { current } = backdrop;

    const transitionEnd = () => setActive(open);

    const keyHandler = e => !locked && [27].indexOf(e.which) >= 0 && onClose();

    const clickHandler = e => !locked && e.target === current && onClose();

    if (current) {
      current.addEventListener("transitionend", transitionEnd);
      current.addEventListener("click", clickHandler);
      window.addEventListener("keyup", keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        document.activeElement.blur();
        setActive(open);
        document.querySelector("#root").setAttribute("inert", "true");
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener("transitionend", transitionEnd);
        current.removeEventListener("click", clickHandler);
      }

      document.querySelector("#root").removeAttribute("inert");
      window.removeEventListener("keyup", keyHandler);
    };
  }, [open, locked, onClose]);

  return (
    <React.Fragment>
      {(open || active) && (
        <Portal className="modal-portal">
          <div
            ref={backdrop}
            className={clsx(
              styles.backdrop,
              active && open && styles.backdropActive
            )}
          >
            <div
              className={clsx(
                styles.box,
                active && open && styles.boxActive,
                className
              )}
            >
              {children}
            </div>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
}
