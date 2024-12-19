// Import GSAP
import { gsap } from "gsap";

// Define reusable animation functions
export const animateGreen = (selector) => {
  gsap.to(selector, { rotation: 360, x: 100, duration: 1 });
};

export const animatePurple = (selector) => {
  gsap.from(selector, { rotation: -360, x: -100, duration: 1 });
};

export const animateBlue = (selector) => {
  gsap.fromTo(selector, { x: -100 }, { rotation: 360, x: 100, duration: 1 });
};
