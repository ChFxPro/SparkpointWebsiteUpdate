import { motion, useReducedMotion } from "framer-motion";
import sparkpointLogo from "figma:asset/adccdcd284d750ba4769a54bf1caff4e3f4809db.png";

import {
  createBuildItemVariants,
  createClipReveal,
  createFadeInUp,
  createScaleReveal,
} from "../animations/variants";
import { useSequencedReveal } from "../hooks/useSequencedReveal";

const bulletPoints = [
  "SparkPoint's growth demands a unified digital identity",
  "Two audiences: Community & Donors",
  "Redesign aligns mission, storytelling, and impact",
];

export default function Slide1() {
  const prefersReducedMotion = useReducedMotion();
  const visibleBullets = useSequencedReveal(bulletPoints.length, {
    startDelay: 500,
    interval: 1100,
    prefersReducedMotion,
  });

  const buildVariants = createBuildItemVariants(prefersReducedMotion);
  const headingVariants = createClipReveal(prefersReducedMotion);
  const paragraphVariants = createFadeInUp(prefersReducedMotion, 0.2);
  const logoVariants = createScaleReveal(prefersReducedMotion, 0.15);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1606299835846-097e92abcc59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBzdW5zZXR8ZW58MXx8fHwxNzYxMDYwNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Community gathering"
          className="w-full h-full object-cover"
          initial={{ scale: prefersReducedMotion ? 1 : 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.45, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(45deg, rgba(224, 54, 148, 0.72), rgba(251, 181, 21, 0.65))",
          }}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col">
        {/* Logo */}
        <motion.div
          className="absolute top-8 left-8 md:top-12 md:left-12"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
            variants={createFadeInUp(prefersReducedMotion, 0.1)}
            initial="hidden"
            animate="visible"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
            transition={{ type: "tween" }}
          >
            <img src={sparkpointLogo} alt="SparkPoint" className="h-12 md:h-16 w-auto" />
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex items-center px-12 md:px-20">
          <div className="max-w-4xl space-y-8">
            <motion.h1
              className="text-white uppercase tracking-tight"
              style={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                letterSpacing: "-0.04em",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: "1.1",
              }}
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              Website Analysis &<br />Improvement Plan Overview
            </motion.h1>

            <motion.p
              className="text-white/90 max-w-xl"
              style={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                letterSpacing: "-0.03em",
                fontSize: "clamp(1rem, 1.6vw, 1.35rem)",
                lineHeight: "1.6",
              }}
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
            >
              A cinematic briefing to align SparkPoint's digital experience with the compassion and energy the community already
              feels in person.
            </motion.p>

            <div
              className="space-y-5 text-white"
              style={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                letterSpacing: "-0.03em",
                fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
                lineHeight: "1.5",
              }}
            >
              {bulletPoints.map((bullet, index) => (
                <motion.p
                  key={bullet}
                  className="flex items-start gap-3"
                  variants={buildVariants}
                  initial="hidden"
                  animate={visibleBullets > index ? "visible" : "hidden"}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scale: 1.02,
                          x: 6,
                        }
                  }
                  transition={{ type: "tween" }}
                >
                  <span style={{ color: "#fdb515" }}>•</span>
                  <span>{bullet}</span>
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Number */}
        <motion.div
          className="absolute bottom-24 right-12 text-white/80"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            letterSpacing: "0.1em",
            fontSize: "0.875rem",
          }}
          variants={createFadeInUp(prefersReducedMotion, 0.4)}
          initial="hidden"
          animate="visible"
        >
          01 / 07
        </motion.div>
      </div>
    </div>
  );
}
