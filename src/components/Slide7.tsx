import sparkmark from 'figma:asset/aec6f341d6dda01341e161971da96dcd161abfce.png';

export default function Slide7() {
  return (
    <div className="h-screen w-full relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1684813539069-7b2c4c41796d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwZm9yZXN0JTIwbW9ybmluZyUyMGxpZ2h0fGVufDF8fHx8MTc2MTA2MDQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Volunteers in Pisgah Forest"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, rgba(224, 54, 148, 0.75), rgba(251, 181, 21, 0.65))'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col p-12 md:p-20">
        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-4xl">
            <h2
              className="text-white mb-8 uppercase tracking-tight"
              style={{
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                letterSpacing: '-0.04em',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: '1.1'
              }}
            >
              Strategic Opportunity &<br />Closing Message
            </h2>

            <div className="space-y-5 text-white mb-12" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', letterSpacing: '-0.03em', fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)', lineHeight: '1.5' }}>
              <p className="flex items-start gap-3">
                <span style={{ color: '#fdb515' }}>•</span>
                <span>Transform site into a living hub of connection</span>
              </p>
              <p className="flex items-start gap-3">
                <span style={{ color: '#fdb515' }}>•</span>
                <span>Reflect mission through story & design</span>
              </p>
              <p className="flex items-start gap-3">
                <span style={{ color: '#fdb515' }}>•</span>
                <span>Build trust through visibility and impact</span>
              </p>
            </div>

            {/* Quote */}
            <div
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30"
            >
              <div className="absolute -top-6 left-8">
                <div
                  className="text-white opacity-50"
                  style={{
                    fontSize: '6rem',
                    lineHeight: '1',
                    fontFamily: 'Georgia, serif'
                  }}
                >
                  "
                </div>
              </div>
              <p
                className="text-white relative z-10"
                style={{
                  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                  letterSpacing: '-0.03em',
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                  lineHeight: '1.5',
                  fontStyle: 'italic'
                }}
              >
                Every page should answer: How does this connect people and strengthen our community?
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex items-end justify-between">
          <div className="text-white/80" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', letterSpacing: '0.1em', fontSize: '0.875rem' }}>
            07 / 07
          </div>
          <div className="opacity-80">
            <img src={sparkmark} alt="SparkPoint" className="w-24 h-24" />
          </div>
        </div>
      </div>
    </div>
  );
}
