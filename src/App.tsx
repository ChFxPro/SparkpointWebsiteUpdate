import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useGesture } from "react-use-gesture";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";
import { slideVariants, SlideAnimationContext } from "./animations/variants";

const gradientBackdrops = [
  "radial-gradient(circle at 20% 20%, rgba(224, 54, 148, 0.12), transparent 60%)",
  "radial-gradient(circle at 80% 30%, rgba(158, 80, 159, 0.12), transparent 65%)",
  "radial-gradient(circle at 15% 60%, rgba(241, 95, 72, 0.12), transparent 65%)",
  "radial-gradient(circle at 70% 40%, rgba(158, 80, 159, 0.12), transparent 60%)",
  "radial-gradient(circle at 40% 70%, rgba(251, 181, 21, 0.12), transparent 65%)",
  "radial-gradient(circle at 50% 30%, rgba(224, 54, 148, 0.12), transparent 60%)",
  "radial-gradient(circle at 80% 70%, rgba(251, 181, 21, 0.14), transparent 65%)",
];

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = slides.length;
  const SlideComponent = useMemo(() => slides[currentSlide], [currentSlide]);
  const autoPlayInterval = prefersReducedMotion ? 9000 : 10500;

  const handleAdvance = useCallback(
    (movement: number) => {
      setCurrentSlide((previous) => {
        const nextIndex = Math.min(Math.max(previous + movement, 0), totalSlides - 1);
        if (nextIndex !== previous) {
          setDirection(movement > 0 ? 1 : -1);
          return nextIndex;
        }
        return previous;
      });
    },
    [totalSlides]
  );

  const nextSlide = useCallback(() => {
    setAutoPlay(false);
    handleAdvance(1);
  }, [handleAdvance]);

  const prevSlide = useCallback(() => {
    setAutoPlay(false);
    handleAdvance(-1);
  }, [handleAdvance]);

  const goToSlide = useCallback(
    (index: number) => {
      setAutoPlay(false);
      setCurrentSlide((previous) => {
        const clamped = Math.min(Math.max(index, 0), totalSlides - 1);
        if (clamped !== previous) {
          setDirection(clamped > previous ? 1 : -1);
        }
        return clamped;
      });
    },
    [totalSlides]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }
      if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const id = window.setInterval(() => {
      setCurrentSlide((previous) => {
        if (previous >= totalSlides - 1) {
          setAutoPlay(false);
          return previous;
        }
        setDirection(1);
        return previous + 1;
      });
    }, autoPlayInterval);

    return () => window.clearInterval(id);
  }, [autoPlay, autoPlayInterval, totalSlides]);

  useGesture(
    {
      onDragEnd: ({ swipe: [swipeX], movement: [movementX] }) => {
        if (swipeX < 0 || movementX < -120) {
          setAutoPlay(false);
          handleAdvance(1);
        } else if (swipeX > 0 || movementX > 120) {
          setAutoPlay(false);
          handleAdvance(-1);
        }
      },
    },
    {
      target: containerRef,
      drag: {
        axis: "x",
        threshold: 20,
      },
    }
  );

  const animationContext: SlideAnimationContext = useMemo(
    () => ({ direction, reduceMotion: prefersReducedMotion }),
    [direction, prefersReducedMotion]
  );

  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`backdrop-${currentSlide}`}
          className="absolute inset-0 pointer-events-none"
          style={{ background: gradientBackdrops[currentSlide] }}
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.45, ease: "easeOut" }}
        />
      </AnimatePresence>

      {/* Slide Container */}
      <div className="flex-1 relative" ref={containerRef}>
        <AnimatePresence mode="wait" custom={animationContext}>
          <motion.div
            key={currentSlide}
            className="h-full"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={animationContext}
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <motion.button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ color: "#e03694" }}
            whileHover={currentSlide === 0 ? undefined : { scale: 1.05 }}
            whileTap={currentSlide === 0 ? undefined : { scale: 0.95 }}
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              Previous
            </span>
          </motion.button>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3">
            <div className="flex items-center gap-3 justify-center">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="transition-all"
                  aria-label={`Go to slide ${index + 1}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className={`rounded-full ${index === currentSlide ? "w-8 h-2" : "w-2 h-2"}`}
                    style={{
                      backgroundColor: index === currentSlide ? "#e03694" : "#9e509f",
                      opacity: index === currentSlide ? 1 : 0.4,
                    }}
                    layout
                    transition={{ duration: prefersReducedMotion ? 0.2 : 0.3, ease: "easeOut" }}
                  />
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={() => setAutoPlay((previous) => !previous)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-pink-200"
              style={{
                color: autoPlay ? "#9e509f" : "#e03694",
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontSize: "0.75rem",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {autoPlay ? <Pause size={16} /> : <Play size={16} />}
              Auto Play {autoPlay ? "On" : "Off"}
            </motion.button>
          </div>

          <motion.button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ color: "#e03694" }}
            whileHover={currentSlide === totalSlides - 1 ? undefined : { scale: 1.05 }}
            whileTap={currentSlide === totalSlides - 1 ? undefined : { scale: 0.95 }}
          >
            <span className="hidden sm:inline" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              Next
            </span>
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
