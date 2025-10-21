import { motion, useReducedMotion } from "framer-motion";
import { Heart, Leaf, Camera, Mail, Check } from "lucide-react";
import sparkmark from "figma:asset/aec6f341d6dda01341e161971da96dcd161abfce.png";

import {
  createBuildItemVariants,
  createClipReveal,
  createFadeInUp,
  createFloatVariant,
  createScaleReveal,
} from "../animations/variants";
import { useSequencedReveal } from "../hooks/useSequencedReveal";

const strengths = [
  {
    icon: Heart,
    color: "#e03694",
    title: "Authentic Voice",
    description: "Compassionate tone & genuine connection",
    details: [
      "Non-judgmental language throughout",
      "Person-first terminology",
      "Empathetic resource descriptions",
    ],
    impact: "Builds trust with vulnerable populations",
  },
  {
    icon: Leaf,
    color: "#9e509f",
    title: "Wellness Rooted in Connection",
    description: "Strong tagline resonates deeply",
    details: [
      "Captures dual mission perfectly",
      "Memorable and meaningful",
      "Differentiates from other services",
    ],
    impact: "Core brand identity foundation",
  },
  {
    icon: Camera,
    color: "#f15f48",
    title: "Storytelling Excellence",
    description: "Helene: One Year of Healing",
    details: [
      "Powerful narrative of recovery",
      "Community-centered perspective",
      "Authentic local photography",
    ],
    impact: "Demonstrates real-world impact",
  },
  {
    icon: Mail,
    color: "#fdb515",
    title: "Newsletter Engagement",
    description: "Active community connection",
    details: [
      "Regular communication rhythm",
      "Event and resource updates",
      "Volunteer spotlight features",
    ],
    impact: "Sustains ongoing relationships",
  },
];

export default function Slide3() {
  const prefersReducedMotion = useReducedMotion();
  const visibleCards = useSequencedReveal(strengths.length, {
    startDelay: 450,
    interval: 550,
    prefersReducedMotion,
  });

  const headingVariants = createClipReveal(prefersReducedMotion);
  const subheadingVariants = createFadeInUp(prefersReducedMotion, 0.1);
  const cardEntrance = createFadeInUp(prefersReducedMotion, 0.2);
  const floatVariant = createFloatVariant(prefersReducedMotion);
  const detailVariants = createBuildItemVariants(prefersReducedMotion);
  const watermarkReveal = createScaleReveal(prefersReducedMotion, 0.3);

  return (
    <div className="h-screen w-full bg-white p-12 md:p-20 flex flex-col relative overflow-hidden">
      <motion.img
        src={sparkmark}
        alt="Sparkmark watermark"
        className="absolute top-1/2 right-12 -translate-y-1/2 opacity-5 pointer-events-none w-96 h-96"
        variants={watermarkReveal}
        initial="hidden"
        animate="visible"
      />

      {/* Header */}
      <div className="mb-8 relative z-10">
        <motion.h2
          className="uppercase mb-3"
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
          Strengths to Preserve
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
          What's Working Well — Foundation to Build Upon
        </motion.p>
      </div>

      {/* 2x2 Grid */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="w-full max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              const animateState = visibleCards > index ? "visible" : "hidden";

              return (
                <motion.div
                  key={strength.title}
                  className="bg-white rounded-2xl p-6 relative"
                  style={{
                    boxShadow: `0 8px 32px ${strength.color}20`,
                    border: "2px solid",
                    borderColor: `${strength.color}30`,
                  }}
                  variants={cardEntrance}
                  initial="hidden"
                  animate={animateState}
                >
                  <motion.div
                    className="absolute -top-2 -left-2 w-8 h-8 flex items-center justify-center rounded-full"
                    style={{
                      backgroundColor: strength.color,
                      boxShadow: `0 4px 12px ${strength.color}40`,
                    }}
                    variants={createScaleReveal(prefersReducedMotion, 0.1)}
                    initial="hidden"
                    animate={animateState}
                  >
                    <span
                      style={{
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        color: "white",
                        fontSize: "1.25rem",
                        lineHeight: "1",
                      }}
                    >
                      [
                    </span>
                  </motion.div>

                  <motion.div variants={floatVariant} initial="rest" animate="rest" whileHover="hover">
                    <motion.div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="rounded-full p-3 flex-shrink-0"
                        style={{
                          backgroundColor: `${strength.color}15`,
                        }}
                        variants={createScaleReveal(prefersReducedMotion, 0.15)}
                        initial="hidden"
                        animate={animateState}
                      >
                        <Icon size={28} style={{ color: strength.color }} />
                      </motion.div>
                      <motion.h3
                        style={{
                          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                          letterSpacing: "-0.03em",
                          color: "#1A1A1A",
                          fontSize: "1.375rem",
                          lineHeight: "1.2",
                        }}
                        variants={createFadeInUp(prefersReducedMotion, 0.25)}
                        initial="hidden"
                        animate={animateState}
                      >
                        {strength.title}
                      </motion.h3>
                    </motion.div>

                    <motion.p
                      className="mb-4"
                      style={{
                        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                        letterSpacing: "-0.03em",
                        color: "#1A1A1A",
                        opacity: 0.8,
                        lineHeight: "1.5",
                        fontSize: "0.95rem",
                      }}
                      variants={createFadeInUp(prefersReducedMotion, 0.3)}
                      initial="hidden"
                      animate={animateState}
                    >
                      {strength.description}
                    </motion.p>

                    <div className="space-y-2 mb-4">
                      {strength.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detail}
                          className="flex items-start gap-2"
                          variants={detailVariants}
                          initial="hidden"
                          animate={visibleCards > index ? "visible" : "hidden"}
                          transition={{
                            delay:
                              prefersReducedMotion || visibleCards <= index
                                ? 0
                                : 0.35 + detailIndex * 0.2,
                          }}
                        >
                          <Check
                            size={16}
                            style={{
                              color: strength.color,
                              marginTop: "2px",
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                              letterSpacing: "-0.03em",
                              color: "#1A1A1A",
                              opacity: 0.7,
                              lineHeight: "1.4",
                              fontSize: "0.875rem",
                            }}
                          >
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className="inline-block px-4 py-2 rounded-full"
                      style={{
                        backgroundColor: `${strength.color}10`,
                        border: `1px solid ${strength.color}30`,
                      }}
                      variants={createFadeInUp(prefersReducedMotion, 0.45)}
                      initial="hidden"
                      animate={animateState}
                    >
                      <p
                        className="uppercase"
                        style={{
                          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                          letterSpacing: "0.05em",
                          fontSize: "0.75rem",
                          color: strength.color,
                        }}
                      >
                        {strength.impact}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Strength Banner */}
          <motion.div
            className="mt-6 text-center"
            variants={createFadeInUp(prefersReducedMotion, 0.5)}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full"
              style={{
                background: "linear-gradient(90deg, #e03694, #9e509f, #fdb515)",
                color: "white",
                boxShadow: "0 8px 24px rgba(224, 54, 148, 0.3)",
              }}
              variants={floatVariant}
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <span
                style={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontSize: "1.5rem",
                  lineHeight: "1",
                }}
              >
                +
              </span>
              <p
                style={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  letterSpacing: "-0.03em",
                  fontSize: "1.125rem",
                }}
              >
                Inviting visual warmth throughout the site
              </p>
            </motion.div>
          </motion.div>
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
        variants={createFadeInUp(prefersReducedMotion, 0.6)}
        initial="hidden"
        animate="visible"
      >
        03 / 07
      </motion.div>
    </div>
  );
}
