import sparkpointLogo from 'figma:asset/adccdcd284d750ba4769a54bf1caff4e3f4809db.png';

export default function Slide1() {
  return (
    <div className="h-screen w-full relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606299835846-097e92abcc59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBzdW5zZXR8ZW58MXx8fHwxNzYxMDYwNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Community gathering"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, rgba(224, 54, 148, 0.7), rgba(251, 181, 21, 0.6))'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col">
        {/* Logo */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <img
              src={sparkpointLogo}
              alt="SparkPoint"
              className="h-12 md:h-16 w-auto"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center px-12 md:px-20">
          <div className="max-w-4xl">
            <h1
              className="text-white mb-8 uppercase tracking-tight"
              style={{
                fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                letterSpacing: '-0.04em',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: '1.1'
              }}
            >
              Website Analysis &<br />Improvement Plan Overview
            </h1>

            <div className="space-y-5 text-white" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', letterSpacing: '-0.03em', fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)', lineHeight: '1.5' }}>
              <p className="flex items-start gap-3">
                <span style={{ color: '#fdb515' }}>•</span>
                <span>SparkPoint's growth demands a unified digital identity</span>
              </p>
              <p className="flex items-start gap-3">
                <span style={{ color: '#fdb515' }}>•</span>
                <span>Two audiences: Community & Donors</span>
              </p>
              <p className="flex items-start gap-3">
                <span style={{ color: '#fdb515' }}>•</span>
                <span>Redesign aligns mission, storytelling, and impact</span>
              </p>
            </div>
          </div>
        </div>

        {/* Slide Number */}
        <div className="absolute bottom-24 right-12 text-white/80" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', letterSpacing: '0.1em', fontSize: '0.875rem' }}>
          01 / 07
        </div>
      </div>
    </div>
  );
}
