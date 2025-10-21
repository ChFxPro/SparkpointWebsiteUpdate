import { Heart, Leaf, Camera, Mail, Check } from "lucide-react";
import sparkmark from "figma:asset/aec6f341d6dda01341e161971da96dcd161abfce.png";

export default function Slide3() {
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

  return (
    <div className="h-screen w-full bg-white p-12 md:p-20 flex flex-col relative overflow-hidden">
      {/* SparkMark Watermark */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-5 pointer-events-none">
        <img src={sparkmark} alt="" className="w-96 h-96" />
      </div>

      {/* Header */}
      <div className="mb-8 relative z-10">
        <h2
          className="uppercase mb-3"
          style={{
            fontFamily:
              "Helvetica Neue, Helvetica, Arial, sans-serif",
            letterSpacing: "-0.04em",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            color: "#1A1A1A",
            lineHeight: "1.1",
          }}
        >
          Strengths to Preserve
        </h2>
        <p
          className="uppercase"
          style={{
            fontFamily:
              "Helvetica Neue, Helvetica, Arial, sans-serif",
            letterSpacing: "0.1em",
            fontSize: "0.875rem",
            color: "#9e509f",
          }}
        >
          What's Working Well — Foundation to Build Upon
        </p>
      </div>

      {/* 2x2 Grid */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="w-full max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 transition-all hover:scale-[1.02] relative"
                  style={{
                    boxShadow: `0 8px 32px ${strength.color}20`,
                    border: "2px solid",
                    borderColor: `${strength.color}30`,
                  }}
                >
                  {/* Bracket Accent */}
                  <div
                    className="absolute -top-2 -left-2 w-8 h-8 flex items-center justify-center rounded-full"
                    style={{
                      backgroundColor: strength.color,
                      boxShadow: `0 4px 12px ${strength.color}40`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily:
                          "Helvetica Neue, Helvetica, Arial, sans-serif",
                        color: "white",
                        fontSize: "1.25rem",
                        lineHeight: "1",
                      }}
                    >
                      [
                    </span>
                  </div>

                  {/* Icon Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="rounded-full p-3 flex-shrink-0"
                      style={{
                        backgroundColor: `${strength.color}15`,
                      }}
                    >
                      <Icon
                        size={28}
                        style={{ color: strength.color }}
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily:
                          "Helvetica Neue, Helvetica, Arial, sans-serif",
                        letterSpacing: "-0.03em",
                        color: "#1A1A1A",
                        fontSize: "1.375rem",
                        lineHeight: "1.2",
                      }}
                    >
                      {strength.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="mb-4"
                    style={{
                      fontFamily:
                        "Helvetica Neue, Helvetica, Arial, sans-serif",
                      letterSpacing: "-0.03em",
                      color: "#1A1A1A",
                      opacity: 0.8,
                      lineHeight: "1.5",
                      fontSize: "0.95rem",
                    }}
                  >
                    {strength.description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-2 mb-4">
                    {strength.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2"
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
                            fontFamily:
                              "Helvetica Neue, Helvetica, Arial, sans-serif",
                            letterSpacing: "-0.03em",
                            color: "#1A1A1A",
                            opacity: 0.7,
                            lineHeight: "1.4",
                            fontSize: "0.875rem",
                          }}
                        >
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Impact Badge */}
                  <div
                    className="inline-block px-4 py-2 rounded-full"
                    style={{
                      backgroundColor: `${strength.color}10`,
                      border: `1px solid ${strength.color}30`,
                    }}
                  >
                    <p
                      className="uppercase"
                      style={{
                        fontFamily:
                          "Helvetica Neue, Helvetica, Arial, sans-serif",
                        letterSpacing: "0.05em",
                        fontSize: "0.75rem",
                        color: strength.color,
                      }}
                    >
                      {strength.impact}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Strength Banner */}
          <div className="mt-6 text-center">
            <div
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #e03694, #9e509f, #fdb515)",
                color: "white",
                boxShadow: "0 8px 24px rgba(224, 54, 148, 0.3)",
              }}
            >
              <span
                style={{
                  fontFamily:
                    "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontSize: "1.5rem",
                  lineHeight: "1",
                }}
              >
                +
              </span>
              <p
                style={{
                  fontFamily:
                    "Helvetica Neue, Helvetica, Arial, sans-serif",
                  letterSpacing: "-0.03em",
                  fontSize: "1.125rem",
                }}
              >
                Inviting visual warmth throughout the site
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Number */}
      <div
        className="text-right relative z-10"
        style={{
          fontFamily:
            "Helvetica Neue, Helvetica, Arial, sans-serif",
          letterSpacing: "0.1em",
          fontSize: "0.875rem",
          color: "#1A1A1A",
          opacity: 0.6,
        }}
      >
        03 / 07
      </div>
    </div>
  );
}