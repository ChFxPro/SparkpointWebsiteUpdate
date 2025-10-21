import sparkmark from 'figma:asset/aec6f341d6dda01341e161971da96dcd161abfce.png';

export default function Slide2() {
  return (
    <div className="h-screen w-full bg-white p-12 md:p-20 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h2
          className="uppercase"
          style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            letterSpacing: '-0.04em',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: '#1A1A1A',
            lineHeight: '1.1'
          }}
        >
          Mission Alignment & Refinement
        </h2>
        <p
          className="uppercase mt-3"
          style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            letterSpacing: '0.1em',
            fontSize: '0.875rem',
            color: '#9e509f'
          }}
        >
          Dual-tier approach for clarity and compliance
        </p>
      </div>

      {/* Split Panel Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-6xl relative">
          {/* SparkMark Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <img src={sparkmark} alt="" className="w-96 h-96" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 relative">
            {/* Left Panel - Official Mission */}
            <div className="relative group">
              <div
                className="absolute -top-3 -left-3 w-12 h-12 rounded-full flex items-center justify-center z-10"
                style={{
                  background: 'linear-gradient(135deg, #e03694, #9e509f)',
                  boxShadow: '0 4px 20px rgba(224, 54, 148, 0.3)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                    color: 'white',
                    fontSize: '1.25rem'
                  }}
                >
                  [
                </span>
              </div>
              
              <div
                className="relative rounded-2xl p-8 h-full transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(224, 54, 148, 0.05), rgba(158, 80, 159, 0.05))',
                  boxShadow: '0 8px 32px rgba(224, 54, 148, 0.15)',
                  border: '2px solid',
                  borderColor: '#e03694'
                }}
              >
                <h3
                  className="uppercase mb-6"
                  style={{
                    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                    letterSpacing: '0.1em',
                    fontSize: '0.875rem',
                    color: '#e03694'
                  }}
                >
                  Current Official Mission
                </h3>
                <p style={{
                  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                  letterSpacing: '-0.03em',
                  color: '#1A1A1A',
                  lineHeight: '1.7',
                  fontSize: '1.125rem'
                }}>
                  SparkPoint provides immediate, compassionate support and long-term resources that strengthen individual resilience and foster community connection in Transylvania County.
                </p>
              </div>
            </div>

            {/* Vertical Divider with Brackets */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px">
              <div className="relative h-full">
                {/* Top Bracket */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <span
                      style={{
                        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                        color: '#9e509f',
                        fontSize: '2rem',
                        lineHeight: '1'
                      }}
                    >
                      [
                    </span>
                  </div>
                </div>
                
                {/* Gradient Line */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 left-1/2 -translate-x-1/2"
                  style={{ 
                    background: 'linear-gradient(180deg, #e03694, #9e509f, #fdb515)',
                    opacity: 0.3
                  }}
                />
                
                {/* Bottom Bracket */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <span
                      style={{
                        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                        color: '#fdb515',
                        fontSize: '2rem',
                        lineHeight: '1',
                        transform: 'rotate(180deg)',
                        display: 'inline-block'
                      }}
                    >
                      [
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Simplified Mission */}
            <div className="relative group">
              <div
                className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center z-10"
                style={{
                  background: 'linear-gradient(135deg, #9e509f, #fdb515)',
                  boxShadow: '0 4px 20px rgba(251, 181, 21, 0.3)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                    color: 'white',
                    fontSize: '1.25rem'
                  }}
                >
                  ]
                </span>
              </div>
              
              <div
                className="relative rounded-2xl p-8 h-full transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(158, 80, 159, 0.05), rgba(251, 181, 21, 0.05))',
                  boxShadow: '0 8px 32px rgba(158, 80, 159, 0.15)',
                  border: '2px solid',
                  borderColor: '#9e509f'
                }}
              >
                <h3
                  className="uppercase mb-6"
                  style={{
                    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                    letterSpacing: '0.1em',
                    fontSize: '0.875rem',
                    color: '#9e509f'
                  }}
                >
                  Simplified Web Version
                </h3>
                <p style={{
                  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                  letterSpacing: '-0.03em',
                  color: '#1A1A1A',
                  lineHeight: '1.7',
                  fontSize: '1.125rem'
                }}>
                  We offer immediate support and lasting resources to build resilience and connection across Transylvania County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Number */}
      <div className="text-right" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', letterSpacing: '0.1em', fontSize: '0.875rem', color: '#1A1A1A', opacity: 0.6 }}>
        02 / 07
      </div>
    </div>
  );
}
