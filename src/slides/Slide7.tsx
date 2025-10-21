import { motion, useReducedMotion } from "framer-motion";
import sparkmark from "figma:asset/aec6f341d6dda01341e161971da96dcd161abfce.png";

import {
  createBuildItemVariants,
  createClipReveal,
  createFadeInUp,
  createScaleReveal,
} from "../animations/variants";
import { useSequencedReveal } from "../hooks/useSequencedReveal";

const bulletPoints = [
  "Transform site into a living hub of connection",
  "Reflect mission through story & design",
  "Build trust through visibility and impact",
];

export default function Slide7() {
  const prefersReducedMotion = useReducedMotion();
  const visibleBullets = useSequencedReveal(bulletPoints.length, {
    startDelay: 500,
    interval: 1100,
    prefersReducedMotion,
  });

  const bulletVariants = createBuildItemVariants(prefersReducedMotion);
  const headingVariants = createClipReveal(prefersReducedMotion);
  const quoteVariants = createFadeInUp(prefersReducedMotion, 0.25);
  const watermarkVariants = createScaleReveal(prefersReducedMotion, 0.3);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1684813539069-7b2c4c41796d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwZm9yZXN0JTIwbW9ybmluZyUyMGxpZ2h0fGVufDF8fHx8MTc2MTA2MDQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Volunteers in Pisgah Forest"
          className="w-full h-full object-cover"
          initial={{ scale: prefersReducedMotion ? 1 : 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.45, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(45deg, rgba(224, 54, 148, 0.75), rgba(251, 181, 21, 0.65))",
          }}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col p-12 md:p-20">
        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-4xl space-y-8">
            <motion.h2
              className="text-white uppercase tracking-tight"
              style={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                letterSpacing: "-0.04em",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: "1.1",
              }}
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              Strategic Opportunity &amp;<br />Closing Message
            </motion.h2>

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
                  variants={bulletVariants}
                  initial="hidden"
                  animate={visibleBullets > index ? "visible" : "hidden"}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : {
                          x: 6,
                          scale: 1.02,
                        }
                  }
                  transition={{ type: "tween" }}
                >
                  <span style={{ color: "#fdb515" }}>•</span>
                  <span>{bullet}</span>
                </motion.p>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30"
              variants={quoteVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="absolute -top-6 left-8"
                variants={createFadeInUp(prefersReducedMotion, 0.4)}
                initial="hidden"
                animate="visible"
              >
                <div
                  className="text-white opacity-50"
                  style={{
                    fontSize: "6rem",
                    lineHeight: "1",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  "
                </div>
              </motion.div>
              <motion.p
                className="text-white relative z-10"
                style={{
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  letterSpacing: "-0.03em",
                  fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                  lineHeight: "1.5",
                  fontStyle: "italic",
                }}
                variants={createFadeInUp(prefersReducedMotion, 0.45)}
                initial="hidden"
                animate="visible"
              >
                Every page should answer: How does this connect people and strengthen our community?
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex items-end justify-between">
          <motion.div
            className="text-white/80"
            style={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              letterSpacing: "0.1em",
              fontSize: "0.875rem",
            }}
            variants={createFadeInUp(prefersReducedMotion, 0.55)}
            initial="hidden"
            animate="visible"
          >
            07 / 07
          </motion.div>
          <motion.div
            className="opacity-80"
            variants={watermarkVariants}
            initial="hidden"
            animate="visible"
          >
            <img src={sparkmark} alt="SparkPoint" className="w-24 h-24" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
