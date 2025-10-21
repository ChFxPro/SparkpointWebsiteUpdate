import { motion, useReducedMotion } from "framer-motion";
import { Zap } from "lucide-react";
import sparkmark from "figma:asset/aec6f341d6dda01341e161971da96dcd161abfce.png";

import {
  createClipReveal,
  createFadeInUp,
  createScaleReveal,
} from "../animations/variants";
import { useSequencedReveal } from "../hooks/useSequencedReveal";

const phases = [
  {
    number: 1,
    title: "Foundation",
    focus: "Sitemap + Homepage",
    duration: "Weeks 1–4",
    deliverables: "Structure & tone defined",
    color: "#e03694",
  },
  {
    number: 2,
    title: "Content Alignment",
    focus: "Rewrite + Story Hub",
    duration: "Weeks 5–8",
    deliverables: "Unified program pages",
    color: "#9e509f",
  },
  {
    number: 3,
    title: "Optimization",
    focus: "Accessibility + Analytics",
    duration: "Weeks 9–12",
    deliverables: "Launch-ready site",
    color: "#fdb515",
  },
];

export default function Slide6() {
  const prefersReducedMotion = useReducedMotion();
  const visiblePhases = useSequencedReveal(phases.length, {
    startDelay: 500,
    interval: 650,
    prefersReducedMotion,
  });

  const headingVariants = createClipReveal(prefersReducedMotion);
  const subheadingVariants = createFadeInUp(prefersReducedMotion, 0.1);
  const phaseVariants = createFadeInUp(prefersReducedMotion, 0.2);
  const badgeVariants = createScaleReveal(prefersReducedMotion, 0.25);

  return (
    <div className="h-screen w-full bg-white p-12 md:p-20 flex flex-col relative">
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
          Recommended Phases
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
          Three-Phase Rollout
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="flex-1 flex items-center justify-center relative">
        <motion.img
          src={sparkmark}
          alt="Sparkmark watermark"
          className="absolute bottom-8 right-8 opacity-5 pointer-events-none w-32 h-32"
          variants={createScaleReveal(prefersReducedMotion, 0.3)}
          initial="hidden"
          animate="visible"
        />

        <div className="w-full max-w-5xl">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <motion.div
                className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-200"
                initial={{ scaleX: prefersReducedMotion ? 1 : 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: prefersReducedMotion ? 0.2 : 0.45, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.3 }}
              />

              <div className="grid grid-cols-3 gap-8">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.number}
                    className="relative"
                    variants={phaseVariants}
                    initial="hidden"
                    animate={visiblePhases > index ? "visible" : "hidden"}
                  >
                    {/* Spark Icon */}
                    <motion.div className="flex justify-center mb-6">
                      <motion.div
                        className="rounded-full p-4 relative z-10 bg-white"
                        style={{
                          boxShadow: `0 0 0 4px ${phase.color}, 0 8px 24px ${phase.color}40`,
                        }}
                        variants={badgeVariants}
                        initial="hidden"
                        animate={visiblePhases > index ? "visible" : "hidden"}
                      >
                        <Zap size={32} style={{ color: phase.color }} fill={phase.color} />
                      </motion.div>
                    </motion.div>

                    {/* Phase Card */}
                    <motion.div
                      className="bg-white rounded-xl p-6 mt-8"
                      style={{
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                        border: `2px solid ${phase.color}40`,
                      }}
                      variants={createFadeInUp(prefersReducedMotion, 0.25)}
                      initial="hidden"
                      animate={visiblePhases > index ? "visible" : "hidden"}
                    >
                      <motion.div
                        className="inline-block px-3 py-1 rounded-full mb-3"
                        style={{
                          backgroundColor: `${phase.color}20`,
                          color: phase.color,
                          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                          letterSpacing: "0.05em",
                          fontSize: "0.75rem",
                        }}
                        variants={createFadeInUp(prefersReducedMotion, 0.3)}
                        initial="hidden"
                        animate={visiblePhases > index ? "visible" : "hidden"}
                      >
                        PHASE {phase.number}
                      </motion.div>
                      <motion.h3
                        className="mb-2"
                        style={{
                          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                          letterSpacing: "-0.03em",
                          color: "#1A1A1A",
                          fontSize: "1.5rem",
                        }}
                        variants={createFadeInUp(prefersReducedMotion, 0.35)}
                        initial="hidden"
                        animate={visiblePhases > index ? "visible" : "hidden"}
                      >
                        {phase.title}
                      </motion.h3>
                      <div className="space-y-2 mt-4">
                        <motion.div
                          variants={createFadeInUp(prefersReducedMotion, 0.4)}
                          initial="hidden"
                          animate={visiblePhases > index ? "visible" : "hidden"}
                        >
                          <p
                            className="uppercase mb-1"
                            style={{
                              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                              letterSpacing: "0.1em",
                              fontSize: "0.75rem",
                              color: phase.color,
                            }}
                          >
                            Focus
                          </p>
                          <p
                            style={{
                              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                              letterSpacing: "-0.03em",
                              color: "#1A1A1A",
                              lineHeight: "1.5",
                            }}
                          >
                            {phase.focus}
                          </p>
                        </motion.div>
                        <motion.div
                          variants={createFadeInUp(prefersReducedMotion, 0.45)}
                          initial="hidden"
                          animate={visiblePhases > index ? "visible" : "hidden"}
                        >
                          <p
                            className="uppercase mb-1"
                            style={{
                              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                              letterSpacing: "0.1em",
                              fontSize: "0.75rem",
                              color: phase.color,
                            }}
                          >
                            Duration
                          </p>
                          <p
                            style={{
                              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                              letterSpacing: "-0.03em",
                              color: "#1A1A1A",
                              lineHeight: "1.5",
                            }}
                          >
                            {phase.duration}
                          </p>
                        </motion.div>
                        <motion.div
                          variants={createFadeInUp(prefersReducedMotion, 0.5)}
                          initial="hidden"
                          animate={visiblePhases > index ? "visible" : "hidden"}
                        >
                          <p
                            className="uppercase mb-1"
                            style={{
                              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                              letterSpacing: "0.1em",
                              fontSize: "0.75rem",
                              color: phase.color,
                            }}
                          >
                            Deliverables
                          </p>
                          <p
                            style={{
                              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                              letterSpacing: "-0.03em",
                              color: "#1A1A1A",
                              lineHeight: "1.5",
                            }}
                          >
                            {phase.deliverables}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile List */}
          <div className="md:hidden space-y-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                className="bg-white rounded-xl p-6"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  border: `2px solid ${phase.color}`,
                }}
                variants={phaseVariants}
                initial="hidden"
                animate={visiblePhases > index ? "visible" : "hidden"}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="rounded-full p-3 flex-shrink-0"
                    style={{
                      backgroundColor: `${phase.color}20`,
                    }}
                    variants={badgeVariants}
                    initial="hidden"
                    animate={visiblePhases > index ? "visible" : "hidden"}
                  >
                    <Zap size={24} style={{ color: phase.color }} fill={phase.color} />
                  </motion.div>
                  <div className="flex-1">
                    <motion.div
                      className="inline-block px-3 py-1 rounded-full mb-2"
                      style={{
                        backgroundColor: `${phase.color}20`,
                        color: phase.color,
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        letterSpacing: "0.05em",
                        fontSize: "0.75rem",
                      }}
                      variants={createFadeInUp(prefersReducedMotion, 0.25)}
                      initial="hidden"
                      animate={visiblePhases > index ? "visible" : "hidden"}
                    >
                      PHASE {phase.number}
                    </motion.div>
                    <motion.h3
                      className="mb-3"
                      style={{
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        letterSpacing: "-0.03em",
                        color: "#1A1A1A",
                        fontSize: "1.25rem",
                      }}
                      variants={createFadeInUp(prefersReducedMotion, 0.3)}
                      initial="hidden"
                      animate={visiblePhases > index ? "visible" : "hidden"}
                    >
                      {phase.title}
                    </motion.h3>
                    <motion.p
                      style={{
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        letterSpacing: "-0.03em",
                        color: "#1A1A1A",
                        lineHeight: "1.5",
                      }}
                      variants={createFadeInUp(prefersReducedMotion, 0.35)}
                      initial="hidden"
                      animate={visiblePhases > index ? "visible" : "hidden"}
                    >
                      {phase.focus} • {phase.duration} • {phase.deliverables}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
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
        variants={createFadeInUp(prefersReducedMotion, 0.55)}
        initial="hidden"
        animate="visible"
      >
        06 / 07
      </motion.div>
    </div>
  );
}
