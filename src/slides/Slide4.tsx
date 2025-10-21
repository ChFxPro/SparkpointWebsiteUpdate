import { motion, useReducedMotion } from "framer-motion";
import { Menu, FileX, TrendingDown, Smartphone, Search } from "lucide-react";

import {
  createBuildItemVariants,
  createClipReveal,
  createFadeInUp,
  createFloatVariant,
} from "../animations/variants";
import { useSequencedReveal } from "../hooks/useSequencedReveal";

const improvements = [
  {
    icon: Menu,
    title: "Navigation clutter",
    priority: 95,
    color: "#f15f48",
  },
  {
    icon: FileX,
    title: "Outdated pages and redundancy",
    priority: 85,
    color: "#e03694",
  },
  {
    icon: TrendingDown,
    title: "Weak donor conversion flow",
    priority: 90,
    color: "#9e509f",
  },
  {
    icon: Smartphone,
    title: "Mobile inconsistencies",
    priority: 75,
    color: "#fdb515",
  },
  {
    icon: Search,
    title: "SEO & metadata gaps",
    priority: 70,
    color: "#e03694",
  },
];

export default function Slide4() {
  const prefersReducedMotion = useReducedMotion();
  const visibleItems = useSequencedReveal(improvements.length, {
    startDelay: 500,
    interval: 450,
    prefersReducedMotion,
  });

  const headingVariants = createClipReveal(prefersReducedMotion);
  const subheadingVariants = createFadeInUp(prefersReducedMotion, 0.1);
  const itemVariants = createFadeInUp(prefersReducedMotion, 0.2);
  const barVariants = createBuildItemVariants(prefersReducedMotion);
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
          Areas for Improvement
        </motion.h2>
        <motion.p
          className="uppercase"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            letterSpacing: "0.1em",
            fontSize: "0.875rem",
            color: "#f15f48",
          }}
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
        >
          Current Pain Points
        </motion.p>
      </div>

      {/* Priority Bars */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl space-y-6">
          {improvements.map((item, index) => {
            const Icon = item.icon;
            const animateState = visibleItems > index ? "visible" : "hidden";

            return (
              <motion.div key={item.title} className="group" variants={itemVariants} initial="hidden" animate={animateState}>
                <motion.div className="flex items-center gap-4 mb-2" variants={floatVariant} initial="rest" animate="rest" whileHover="hover">
                  <motion.div
                    className="rounded-full p-2 flex-shrink-0"
                    style={{
                      backgroundColor: `${item.color}15`,
                    }}
                    variants={createFadeInUp(prefersReducedMotion, 0.15)}
                    initial="hidden"
                    animate={animateState}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </motion.div>
                  <motion.h3
                    style={{
                      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                      letterSpacing: "-0.03em",
                      color: "#1A1A1A",
                      fontSize: "1.25rem",
                    }}
                    variants={createFadeInUp(prefersReducedMotion, 0.2)}
                    initial="hidden"
                    animate={animateState}
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>
                <div className="flex items-center gap-4 ml-14">
                  <motion.div className="relative h-8 bg-gray-100 rounded-full overflow-hidden flex-1" variants={barVariants} initial="hidden" animate={animateState}>
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}dd)`,
                      }}
                      initial={{ width: prefersReducedMotion ? `${item.priority}%` : "0%" }}
                      animate={{ width: `${item.priority}%` }}
                      transition={{
                        duration: prefersReducedMotion ? 0.2 : 0.45,
                        ease: "easeOut",
                        delay: prefersReducedMotion || visibleItems <= index ? 0 : 0.2,
                      }}
                    />
                  </motion.div>
                  <motion.div
                    className="flex-shrink-0 w-20 text-right"
                    style={{
                      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                      color: item.color,
                      fontSize: "1.125rem",
                      letterSpacing: "-0.03em",
                    }}
                    variants={createFadeInUp(prefersReducedMotion, 0.25)}
                    initial="hidden"
                    animate={animateState}
                  >
                    {item.priority}%
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Note */}
      <motion.div
        className="mt-8 text-center"
        variants={createFadeInUp(prefersReducedMotion, 0.4)}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="uppercase"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            letterSpacing: "0.1em",
            fontSize: "0.875rem",
            color: "#9e509f",
          }}
          variants={createFadeInUp(prefersReducedMotion, 0.45)}
          initial="hidden"
          animate="visible"
        >
          Prioritized by impact on user experience and mission alignment
        </motion.p>
      </motion.div>

      {/* Slide Number */}
      <motion.div
        className="text-right mt-4"
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
        04 / 07
      </motion.div>
    </div>
  );
}
