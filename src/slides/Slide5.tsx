import { motion, useReducedMotion } from "framer-motion";
import { Home, Navigation, RefreshCw, BookOpen, Eye } from "lucide-react";

import {
  createClipReveal,
  createFadeInUp,
  createFloatVariant,
  createScaleReveal,
} from "../animations/variants";
import { useSequencedReveal } from "../hooks/useSequencedReveal";

const priorities = [
  {
    icon: Home,
    title: "Homepage Revamp",
    description: "Clarity in one scroll",
    color: "#e03694",
    position: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
  },
  {
    icon: Navigation,
    title: "Simplified Navigation",
    description: "Community vs Donor flow",
    color: "#9e509f",
    position: { top: "15%", left: "50%", transform: "translate(-50%, -50%)" },
  },
  {
    icon: RefreshCw,
    title: "Program Page Refresh",
    description: "Consistent format",
    color: "#fdb515",
    position: { top: "50%", left: "15%", transform: "translate(-50%, -50%)" },
  },
  {
    icon: BookOpen,
    title: "Unified Story Hub",
    description: "Merge Helene, Echoes, Champions",
    color: "#f15f48",
    position: { top: "50%", left: "85%", transform: "translate(-50%, -50%)" },
  },
  {
    icon: Eye,
    title: "Accessibility Audit",
    description: "Inclusive design",
    color: "#e03694",
    position: { top: "85%", left: "50%", transform: "translate(-50%, -50%)" },
  },
];

export default function Slide5() {
  const prefersReducedMotion = useReducedMotion();
  const visibleNodes = useSequencedReveal(priorities.length, {
    startDelay: 500,
    interval: 600,
    prefersReducedMotion,
  });

  const headingVariants = createClipReveal(prefersReducedMotion);
  const subheadingVariants = createFadeInUp(prefersReducedMotion, 0.1);
  const circleReveal = createScaleReveal(prefersReducedMotion, 0.2);
  const floatVariant = createFloatVariant(prefersReducedMotion);

  return (
    <div className="h-screen w-full bg-white p-12 md:p-20 flex flex-col">
      {/* Header */}
      <div className="mb-12">
        <motion.h2
          className="uppercase mb-4"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            letterSpacing: "-0.04em",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            color: "#1A1A1A",
            lineHeight: "1.1",
          }}
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Strategic Priorities
        </motion.h2>
        <motion.p
          className="uppercase"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            letterSpacing: "0.1em",
            fontSize: "0.875rem",
            color: "#9e509f",
          }}
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
        >
          Five Core Focus Areas
        </motion.p>
      </div>

      {/* Circular Diagram */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl aspect-square relative">
          {/* Background Gradient */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #e03694, #fdb515)",
            }}
            variants={circleReveal}
            initial="hidden"
            animate="visible"
          />

          {/* Connection Lines */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.4, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.3 }}
          >
            <circle
              cx="50%"
              cy="50%"
              r="35%"
              fill="none"
              stroke="#9e509f"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.3"
            />
          </motion.svg>

          {/* Desktop Layout - Circular */}
          <div className="hidden md:block absolute inset-0">
            {priorities.map((priority, index) => {
              const Icon = priority.icon;
              const animateState = visibleNodes > index ? "visible" : "hidden";

              return (
                <motion.div key={priority.title} className="absolute" style={priority.position} variants={circleReveal} initial="hidden" animate={animateState}>
                  <motion.div className="relative group cursor-pointer" variants={floatVariant} initial="rest" animate="rest" whileHover="hover">
                    <motion.div
                      className="rounded-full p-6"
                      style={{
                        backgroundColor: "white",
                        boxShadow: `0 8px 32px ${priority.color}40`,
                        border: `3px solid ${priority.color}`,
                      }}
                      variants={createScaleReveal(prefersReducedMotion, 0.1)}
                      initial="hidden"
                      animate={animateState}
                    >
                      <Icon size={32} style={{ color: priority.color }} />
                    </motion.div>
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 text-center"
                      variants={createFadeInUp(prefersReducedMotion, 0.2)}
                      initial="hidden"
                      animate={animateState}
                    >
                      <h3
                        className="mb-1"
                        style={{
                          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                          letterSpacing: "-0.03em",
                          color: "#1A1A1A",
                          fontSize: "1.125rem",
                        }}
                      >
                        {priority.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                          letterSpacing: "-0.03em",
                          color: priority.color,
                          fontSize: "0.875rem",
                        }}
                      >
                        {priority.description}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Layout - List */}
          <div className="md:hidden space-y-4">
            {priorities.map((priority, index) => {
              const Icon = priority.icon;
              const animateState = visibleNodes > index ? "visible" : "hidden";

              return (
                <motion.div
                  key={priority.title}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    backgroundColor: `${priority.color}10`,
                    border: `2px solid ${priority.color}`,
                  }}
                  variants={createFadeInUp(prefersReducedMotion, 0.2)}
                  initial="hidden"
                  animate={animateState}
                >
                  <motion.div
                    className="rounded-full p-3 flex-shrink-0 bg-white"
                    variants={createScaleReveal(prefersReducedMotion, 0.1)}
                    initial="hidden"
                    animate={animateState}
                  >
                    <Icon size={24} style={{ color: priority.color }} />
                  </motion.div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        letterSpacing: "-0.03em",
                        color: "#1A1A1A",
                        fontSize: "1.125rem",
                      }}
                    >
                      {priority.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        letterSpacing: "-0.03em",
                        color: priority.color,
                        fontSize: "0.875rem",
                      }}
                    >
                      {priority.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slide Number */}
      <motion.div
        className="text-right"
        style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          letterSpacing: "0.1em",
          fontSize: "0.875rem",
          color: "#1A1A1A",
          opacity: 0.6,
        }}
        variants={createFadeInUp(prefersReducedMotion, 0.5)}
        initial="hidden"
        animate="visible"
      >
        05 / 07
      </motion.div>
    </div>
  );
}
