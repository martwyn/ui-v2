import cn from "classnames";
import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import useEscapeKey from "@/hooks/useEsc";
import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
  className?: string;
  onClose: () => void;
}

const Modal = ({ children, onClose, className }: Props) => {
  useEscapeKey(onClose);
  return createPortal(
    <>
      <div
        className={`${styles.overlay} fixed z-40 cursor-pointer top-0 right-0 bottom-0 left-0`}
        onClick={onClose}
      />
      <div
        className={cn(
          className,
          styles.container,
          `bg-white absolute-center cursor-default rounded-lg shadow z-50 p-6`
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>,
    document.body
  );
};

export default Modal;
