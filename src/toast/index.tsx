import ToastContent, { ToastPosition, ToastProps } from "./Toast";
import { createRoot } from "react-dom/client";
import { container, wrapper, left, center, right } from "./style.css";

export type ToastOptions = Omit<ToastProps, "message" | "onClose">;

let leftToastContainer: HTMLDivElement | null = null;
let centerToastContainer: HTMLDivElement | null = null;
let rightToastContainer: HTMLDivElement | null = null;

const createContainer = (position?: ToastPosition) => {
  if (position === "left") {
    if (!leftToastContainer) {
      leftToastContainer = document.createElement("div");
    }
    return leftToastContainer;
  }

  if (position === "right") {
    if (!rightToastContainer) {
      rightToastContainer = document.createElement("div");
    }
    return rightToastContainer;
  }
  if (!centerToastContainer) {
    centerToastContainer = document.createElement("div");
  }
  return centerToastContainer;
};

const getContainerPositionClass = (position?: ToastPosition) => {
  if (position === "left") return left;
  if (position === "right") return right;
  return center;
};

export const toast = (message: string, options: ToastOptions) => {
  const { type, hasIcon, position, duration } = options;

  const containerEl = createContainer(position);
  containerEl.classList.add(container, getContainerPositionClass(position));
  document.body.appendChild(containerEl);

  const wrapperEl = document.createElement("div");
  wrapperEl.classList.add(wrapper);
  containerEl.appendChild(wrapperEl);

  const toastRoot = createRoot(wrapperEl);

  const onClose = () => {
    toastRoot.unmount();
    containerEl.removeChild(wrapperEl);
  };

  toastRoot.render(
    <ToastContent
      message={message}
      type={type}
      hasIcon={hasIcon}
      position={position}
      duration={duration}
      onClose={onClose}
    />
  );
};
