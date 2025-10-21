import { Variants } from "framer-motion";

export const EASE_OUT: number[] = [0.22, 1, 0.36, 1];
export const EASE_IN: number[] = [0.4, 0, 0.2, 1];

export interface SlideAnimationContext {
  direction: number;
  reduceMotion?: boolean;
}

export const slideVariants: Variants = {
  enter: ({ direction, reduceMotion = false }: SlideAnimationContext) => ({
    opacity: 0,
    x: reduceMotion ? 0 : direction >= 0 ? 80 : -80,
    y: reduceMotion ? 0 : 20,
    scale: reduceMotion ? 1 : 0.98,
    filter: reduceMotion ? "blur(0px)" : "blur(12px)",
  }),
  center: ({ reduceMotion = false }: SlideAnimationContext) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: reduceMotion ? 0.2 : 0.45,
      ease: EASE_OUT,
    },
  }),
  exit: ({ direction, reduceMotion = false }: SlideAnimationContext) => ({
    opacity: 0,
    x: reduceMotion ? 0 : direction >= 0 ? -80 : 80,
    y: reduceMotion ? 0 : -16,
    scale: reduceMotion ? 1 : 0.98,
    filter: reduceMotion ? "blur(0px)" : "blur(6px)",
    transition: {
      duration: reduceMotion ? 0.2 : 0.35,
      ease: EASE_IN,
    },
  }),
};

export const createFadeInUp = (reduceMotion: boolean, delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: reduceMotion ? 0 : 24,
    filter: reduceMotion ? "blur(0px)" : "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: reduceMotion ? 0.2 : 0.45,
      ease: EASE_OUT,
      delay: reduceMotion ? 0 : delay,
    },
  },
});

export const createClipReveal = (reduceMotion: boolean, delay = 0): Variants => ({
  hidden: {
    opacity: reduceMotion ? 1 : 0,
    clipPath: reduceMotion ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
    y: reduceMotion ? 0 : 16,
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    y: 0,
    transition: {
      duration: reduceMotion ? 0.2 : 0.5,
      ease: EASE_OUT,
      delay: reduceMotion ? 0 : delay,
    },
  },
});

export const createStagger = (
  reduceMotion: boolean,
  {
    delayChildren = 0.3,
    staggerChildren = 0.2,
  }: { delayChildren?: number; staggerChildren?: number } = {}
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: reduceMotion ? 0 : delayChildren,
      staggerChildren: reduceMotion ? 0 : staggerChildren,
    },
  },
});

export const createBuildItemVariants = (reduceMotion: boolean): Variants => ({
  hidden: {
    opacity: 0,
    y: reduceMotion ? 0 : 16,
    scale: reduceMotion ? 1 : 0.98,
    filter: reduceMotion ? "blur(0px)" : "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: reduceMotion ? 0.2 : 0.4,
      ease: EASE_OUT,
    },
  },
});

export const createScaleReveal = (reduceMotion: boolean, delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: reduceMotion ? 1 : 0.92,
    rotate: reduceMotion ? 0 : -2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: reduceMotion ? 0.2 : 0.4,
      ease: EASE_OUT,
      delay: reduceMotion ? 0 : delay,
    },
  },
});

export const createFloatVariant = (reduceMotion: boolean): Variants => ({
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: reduceMotion ? 0 : -6,
    scale: reduceMotion ? 1.01 : 1.05,
    transition: {
      duration: 0.3,
      ease: EASE_OUT,
    },
  },
});
