import { Zap } from 'lucide-react';
import sparkmark from 'figma:asset/aec6f341d6dda01341e161971da96dcd161abfce.png';

export default function Slide6() {
  const phases = [
    {
      number: 1,
      title: 'Foundation',
      focus: 'Sitemap + Homepage',
      duration: 'Weeks 1–4',
      deliverables: 'Structure & tone defined',
      color: '#e03694'
    },
    {
      number: 2,
      title: 'Content Alignment',
      focus: 'Rewrite + Story Hub',
      duration: 'Weeks 5–8',
      deliverables: 'Unified program pages',
      color: '#9e509f'
    },
    {
      number: 3,
      title: 'Optimization',
      focus: 'Accessibility + Analytics',
      duration: 'Weeks 9–12',
      deliverables: 'Launch-ready site',
      color: '#fdb515'
    }
  ];

  return (
    <div className="h-screen w-full bg-white p-12 md:p-20 flex flex-col">
      {/* Header */}
      <div className="mb-12">
        <h2
          className="uppercase mb-4"
          style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            letterSpacing: '-0.04em',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: '#1A1A1A',
            lineHeight: '1.1'
          }}
        >
          Recommended Phases
        </h2>
        <p
          className="uppercase"
          style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            letterSpacing: '0.1em',
            fontSize: '0.875rem',
            color: '#9e509f'
          }}
        >
          Three-Phase Rollout
        </p>
      </div>

      {/* Timeline */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Watermark */}
        <div className="absolute bottom-8 right-8 opacity-5 pointer-events-none">
          <img src={sparkmark} alt="" className="w-32 h-32" />
        </div>

        <div className="w-full max-w-5xl">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-200" />

              <div className="grid grid-cols-3 gap-8">
                {phases.map((phase, index) => (
                  <div key={index} className="relative">
                    {/* Spark Icon */}
                    <div className="flex justify-center mb-6">
                      <div
                        className="rounded-full p-4 relative z-10 bg-white"
                        style={{
                          boxShadow: `0 0 0 4px ${phase.color}, 0 8px 24px ${phase.color}40`
                        }}
                      >
                        <Zap size={32} style={{ color: phase.color }} fill={phase.color} />
                      </div>
                    </div>

                    {/* Phase Card */}
                    <div
                      className="bg-white rounded-xl p-6 mt-8"
                      style={{
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        border: `2px solid ${phase.color}40`
                      }}
                    >
                      <div
                        className="inline-block px-3 py-1 rounded-full mb-3"
                        style={{
                          backgroundColor: `${phase.color}20`,
                          color: phase.color,
                          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                          letterSpacing: '0.05em',
                          fontSize: '0.75rem'
                        }}
                      >
                        PHASE {phase.number}
                      </div>
                      <h3
                        className="mb-2"
                        style={{
                          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                          letterSpacing: '-0.03em',
                          color: '#1A1A1A',
                          fontSize: '1.5rem'
                        }}
                      >
                        {phase.title}
                      </h3>
                      <div className="space-y-2 mt-4">
                        <div>
                          <p
                            className="uppercase mb-1"
                            style={{
                              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                              letterSpacing: '0.1em',
                              fontSize: '0.75rem',
                              color: phase.color
                            }}
                          >
                            Focus
                          </p>
                          <p
                            style={{
                              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                              letterSpacing: '-0.03em',
                              color: '#1A1A1A',
                              lineHeight: '1.5'
                            }}
                          >
                            {phase.focus}
                          </p>
                        </div>
                        <div>
                          <p
                            className="uppercase mb-1"
                            style={{
                              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                              letterSpacing: '0.1em',
                              fontSize: '0.75rem',
                              color: phase.color
                            }}
                          >
                            Duration
                          </p>
                          <p
                            style={{
                              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                              letterSpacing: '-0.03em',
                              color: '#1A1A1A',
                              lineHeight: '1.5'
                            }}
                          >
                            {phase.duration}
                          </p>
                        </div>
                        <div>
                          <p
                            className="uppercase mb-1"
                            style={{
                              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                              letterSpacing: '0.1em',
                              fontSize: '0.75rem',
                              color: phase.color
                            }}
                          >
                            Deliverables
                          </p>
                          <p
                            style={{
                              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                              letterSpacing: '-0.03em',
                              color: '#1A1A1A',
                              lineHeight: '1.5'
                            }}
                          >
                            {phase.deliverables}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile List */}
          <div className="md:hidden space-y-6">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: `2px solid ${phase.color}`
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="rounded-full p-3 flex-shrink-0"
                    style={{
                      backgroundColor: `${phase.color}20`
                    }}
                  >
                    <Zap size={24} style={{ color: phase.color }} fill={phase.color} />
                  </div>
                  <div className="flex-1">
                    <div
                      className="inline-block px-3 py-1 rounded-full mb-2"
                      style={{
                        backgroundColor: `${phase.color}20`,
                        color: phase.color,
                        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                        letterSpacing: '0.05em',
                        fontSize: '0.75rem'
                      }}
                    >
                      PHASE {phase.number}
                    </div>
                    <h3
                      className="mb-3"
                      style={{
                        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                        letterSpacing: '-0.03em',
                        color: '#1A1A1A',
                        fontSize: '1.25rem'
                      }}
                    >
                      {phase.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                        letterSpacing: '-0.03em',
                        color: '#1A1A1A',
                        lineHeight: '1.5'
                      }}
                    >
                      {phase.focus} • {phase.duration} • {phase.deliverables}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Number */}
      <div className="text-right" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', letterSpacing: '0.1em', fontSize: '0.875rem', color: '#1A1A1A', opacity: 0.6 }}>
        06 / 07
      </div>
    </div>
  );
}
