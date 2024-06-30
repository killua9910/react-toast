import { useCallback, useEffect, useMemo, useState } from "react";
import {
  wrap,
  content,
  msg,
  icon,
  tsuccess,
  terror,
  pleft,
  pcenter,
  pright,
  show
} from "./style.css";
import IconSuccess from "./IconSuccess";
import IconError from "./IconError";

export type ToastPosition = "center" | "right" | "left";
export interface ToastProps {
  type?: "success" | "error";
  message: string;
  hasIcon?: boolean;
  position?: ToastPosition;
  duration?: number;
  onClose: () => void;
}

function ToastContent({
  type,
  message,
  hasIcon,
  position,
  duration,
  onClose
}: ToastProps) {
  const [visible, setVisible] = useState(false);

  const renderIcon = () => {
    if (!hasIcon) return null;
    return (
      <span className={icon}>
        {type === "success" ? <IconSuccess /> : <IconError />}
      </span>
    );
  };

  const positionClass = useMemo(() => {
    if (position === "left") return pleft;
    if (position === "center") return pcenter;
    if (position === "right") return pright;
    return "";
  }, [position]);

  const typeClass = useMemo(() => {
    if (type === "success") return tsuccess;
    if (type === "error") return terror;
    return "";
  }, [type]);

  const handleTransitionEnd = useCallback(() => {
    if (!visible) {
      onClose();
    }
  }, [visible, onClose]);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, duration || 5000);
  }, [duration]);

  return (
    <div className={`${visible ? show : ""}`}>
      <div
        className={`${wrap} ${typeClass} ${positionClass}`}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className={content}>
          {renderIcon()}
          <span className={msg}>{message}</span>
        </div>
      </div>
    </div>
  );
}

export default ToastContent;
