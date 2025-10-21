import { Home, Navigation, RefreshCw, BookOpen, Eye } from 'lucide-react';

export default function Slide5() {
  const priorities = [
    {
      icon: Home,
      title: 'Homepage Revamp',
      description: 'Clarity in one scroll',
      color: '#e03694',
      position: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
    },
    {
      icon: Navigation,
      title: 'Simplified Navigation',
      description: 'Community vs Donor flow',
      color: '#9e509f',
      position: { top: '15%', left: '50%', transform: 'translate(-50%, -50%)' }
    },
    {
      icon: RefreshCw,
      title: 'Program Page Refresh',
      description: 'Consistent format',
      color: '#fdb515',
      position: { top: '50%', left: '15%', transform: 'translate(-50%, -50%)' }
    },
    {
      icon: BookOpen,
      title: 'Unified Story Hub',
      description: 'Merge Helene, Echoes, Champions',
      color: '#f15f48',
      position: { top: '50%', left: '85%', transform: 'translate(-50%, -50%)' }
    },
    {
      icon: Eye,
      title: 'Accessibility Audit',
      description: 'Inclusive design',
      color: '#e03694',
      position: { top: '85%', left: '50%', transform: 'translate(-50%, -50%)' }
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
          Strategic Priorities
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
          Five Core Focus Areas
        </p>
      </div>

      {/* Circular Diagram */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl aspect-square relative">
          {/* Background Gradient */}
          <div
            className="absolute inset-0 rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, #e03694, #fdb515)'
            }}
          />

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
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
          </svg>

          {/* Desktop Layout - Circular */}
          <div className="hidden md:block absolute inset-0">
            {priorities.map((priority, index) => {
              const Icon = priority.icon;
              return (
                <div
                  key={index}
                  className="absolute"
                  style={priority.position}
                >
                  <div className="relative group cursor-pointer">
                    <div
                      className="rounded-full p-6 transition-all hover:scale-110"
                      style={{
                        backgroundColor: 'white',
                        boxShadow: `0 8px 32px ${priority.color}40`,
                        border: `3px solid ${priority.color}`
                      }}
                    >
                      <Icon size={32} style={{ color: priority.color }} />
                    </div>
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 text-center opacity-100 transition-opacity"
                    >
                      <h3
                        className="mb-1"
                        style={{
                          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                          letterSpacing: '-0.03em',
                          color: '#1A1A1A',
                          fontSize: '1.125rem'
                        }}
                      >
                        {priority.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                          letterSpacing: '-0.03em',
                          color: priority.color,
                          fontSize: '0.875rem'
                        }}
                      >
                        {priority.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Layout - List */}
          <div className="md:hidden space-y-4">
            {priorities.map((priority, index) => {
              const Icon = priority.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{
                    backgroundColor: `${priority.color}10`,
                    border: `2px solid ${priority.color}`
                  }}
                >
                  <div
                    className="rounded-full p-3 flex-shrink-0"
                    style={{
                      backgroundColor: 'white'
                    }}
                  >
                    <Icon size={24} style={{ color: priority.color }} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                        letterSpacing: '-0.03em',
                        color: '#1A1A1A',
                        fontSize: '1.125rem'
                      }}
                    >
                      {priority.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                        letterSpacing: '-0.03em',
                        color: priority.color,
                        fontSize: '0.875rem'
                      }}
                    >
                      {priority.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slide Number */}
      <div className="text-right" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', letterSpacing: '0.1em', fontSize: '0.875rem', color: '#1A1A1A', opacity: 0.6 }}>
        05 / 07
      </div>
    </div>
  );
}
