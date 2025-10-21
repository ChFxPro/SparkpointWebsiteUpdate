import { motion, useReducedMotion } from "framer-motion";
import sparkmark from "figma:asset/aec6f341d6dda01341e161971da96dcd161abfce.png";

import {
  createClipReveal,
  createFadeInUp,
  createFloatVariant,
  createScaleReveal,
} from "../animations/variants";
import { useSequencedReveal } from "../hooks/useSequencedReveal";

const missionStatements = [
  {
    label: "Current Official Mission",
    description:
      "SparkPoint provides immediate, compassionate support and long-term resources that strengthen individual resilience and foster community connection in Transylvania County.",
    accent: "#e03694",
    gradient:
      "linear-gradient(135deg, rgba(224, 54, 148, 0.05), rgba(158, 80, 159, 0.05))",
    shadow: "0 8px 32px rgba(224, 54, 148, 0.15)",
    border: "#e03694",
    bracketPosition: "left" as const,
  },
  {
    label: "Simplified Web Version",
    description:
      "We offer immediate support and lasting resources to build resilience and connection across Transylvania County.",
    accent: "#9e509f",
    gradient:
      "linear-gradient(135deg, rgba(158, 80, 159, 0.05), rgba(251, 181, 21, 0.05))",
    shadow: "0 8px 32px rgba(158, 80, 159, 0.15)",
    border: "#9e509f",
    bracketPosition: "right" as const,
  },
];

export default function Slide2() {
  const prefersReducedMotion = useReducedMotion();
  const visiblePanels = useSequencedReveal(missionStatements.length, {
    startDelay: 500,
    interval: 900,
    prefersReducedMotion,
  });

  const headingVariants = createClipReveal(prefersReducedMotion);
  const subheadingVariants = createFadeInUp(prefersReducedMotion, 0.1);
  const cardEntrance = createFadeInUp(prefersReducedMotion, 0.2);
  const watermarkReveal = createScaleReveal(prefersReducedMotion, 0.2);
  const floatVariant = createFloatVariant(prefersReducedMotion);

  return (
    <div className="h-screen w-full bg-white p-12 md:p-20 flex flex-col relative overflow-hidden">
      <motion.img
        src={sparkmark}
        alt="Sparkmark watermark"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-[26rem] h-[26rem]"
        variants={watermarkReveal}
        initial="hidden"
        animate="visible"
      />

      {/* Header */}
      <div className="mb-8 relative z-10">
        <motion.h2
          className="uppercase"
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
          Mission Alignment &amp; Refinement
        </motion.h2>
        <motion.p
          className="uppercase mt-3"
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
          Dual-tier approach for clarity and compliance
        </motion.p>
      </div>

      {/* Split Panel Content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="w-full max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 relative">
            {/* Divider */}
            <motion.div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
              initial={{ opacity: 0, scaleY: prefersReducedMotion ? 1 : 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.4, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.35 }}
            >
              <div className="relative h-full">
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0.2 : 0.35, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.45 }}
                >
                  <span
                    style={{
                      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                      color: "#9e509f",
                      fontSize: "2rem",
                      lineHeight: "1",
                    }}
                  >
                    [
                  </span>
                </motion.div>

                <motion.div
                  className="absolute top-0 bottom-0 w-0.5 left-1/2 -translate-x-1/2"
                  style={{
                    background: "linear-gradient(180deg, #e03694, #9e509f, #fdb515)",
                    opacity: 0.3,
                  }}
                  initial={{ scaleY: prefersReducedMotion ? 1 : 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: prefersReducedMotion ? 0.2 : 0.4, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.35 }}
                />

                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0.2 : 0.35, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.45 }}
                >
                  <span
                    style={{
                      fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                      color: "#fdb515",
                      fontSize: "2rem",
                      lineHeight: "1",
                      display: "inline-block",
                      transform: "rotate(180deg)",
                    }}
                  >
                    [
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {missionStatements.map((mission, index) => {
              const animateState = visiblePanels > index ? "visible" : "hidden";

              return (
                <motion.div
                  key={mission.label}
                  className="relative"
                  variants={cardEntrance}
                  initial="hidden"
                  animate={animateState}
                >
                  <motion.div
                    className={`absolute -top-3 ${
                      mission.bracketPosition === "left" ? "-left-3" : "-right-3"
                    } w-12 h-12 rounded-full flex items-center justify-center z-10`}
                    style={{
                      background:
                        mission.bracketPosition === "left"
                          ? "linear-gradient(135deg, #e03694, #9e509f)"
                          : "linear-gradient(135deg, #9e509f, #fdb515)",
                      boxShadow:
                        mission.bracketPosition === "left"
                          ? "0 4px 20px rgba(224, 54, 148, 0.3)"
                          : "0 4px 20px rgba(251, 181, 21, 0.3)",
                    }}
                    variants={createScaleReveal(prefersReducedMotion, 0.15)}
                    initial="hidden"
                    animate={animateState}
                  >
                    <span
                      style={{
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        color: "white",
                        fontSize: "1.25rem",
                      }}
                    >
                      {mission.bracketPosition === "left" ? "[" : "]"}
                    </span>
                  </motion.div>

                  <motion.div
                    className="relative rounded-2xl p-8 h-full"
                    style={{
                      background: mission.gradient,
                      boxShadow: mission.shadow,
                      border: "2px solid",
                      borderColor: mission.border,
                    }}
                    variants={floatVariant}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                  >
                    <motion.h3
                      className="uppercase mb-6"
                      style={{
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        letterSpacing: "0.1em",
                        fontSize: "0.875rem",
                        color: mission.accent,
                      }}
                      variants={createFadeInUp(prefersReducedMotion, 0.2)}
                      initial="hidden"
                      animate={animateState}
                    >
                      {mission.label}
                    </motion.h3>
                    <motion.p
                      style={{
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        letterSpacing: "-0.03em",
                        color: "#1A1A1A",
                        lineHeight: "1.7",
                        fontSize: "1.125rem",
                      }}
                      variants={createFadeInUp(prefersReducedMotion, 0.3)}
                      initial="hidden"
                      animate={animateState}
                    >
                      {mission.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slide Number */}
      <motion.div
        className="text-right relative z-10"
        style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          letterSpacing: "0.1em",
          fontSize: "0.875rem",
          color: "#1A1A1A",
          opacity: 0.6,
        }}
        variants={createFadeInUp(prefersReducedMotion, 0.45)}
        initial="hidden"
        animate="visible"
      >
        02 / 07
      </motion.div>
    </div>
  );
}
