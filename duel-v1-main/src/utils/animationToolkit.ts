import { Variants } from "framer-motion";
import { keyframes } from "styled-components";

export const appearAnimation = keyframes`
  from { opacity:0 }
  to { opacity:1 }
`;

export const disappearAnimation = keyframes`
  from { opacity:1 }
  to { opacity:0 }
`;

export const Floating = keyframes`
  from {
    transform: translateY(0)
  }
  to { 
    transform: translateY(10px) 
  }
`;

export const FloatingX = keyframes`
  from {
    transform: translateX(0)
  }
  to { 
    transform: translateX(10px) 
  }
`;

export const SlideUp = keyframes`
  from {
    transform: translateY(200%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Zoom = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const FadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const Top = keyframes`
  from { top: -300px;
    opacity: 0; }
  to   {     top: 0;
    opacity: 1;}
`;

export const animationHandler = (element: HTMLDivElement | null) => {
  if (!element) return;
  if (element.classList.contains("appear")) {
    element.classList.remove("appear");
    element.classList.add("disappear");
  } else {
    element.classList.remove("disappear");
    element.classList.add("appear");
  }
};

export const animationVariants: Variants = {
  initial: { transform: "translateX(0px)" },
  animate: { transform: "translateX(0px)" },
  exit: { transform: "translateX(0px)" },
};

export const animationMap = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
};
