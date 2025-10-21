import { Menu, FileX, TrendingDown, Smartphone, Search } from 'lucide-react';

export default function Slide4() {
  const improvements = [
    {
      icon: Menu,
      title: 'Navigation clutter',
      priority: 95,
      color: '#f15f48'
    },
    {
      icon: FileX,
      title: 'Outdated pages and redundancy',
      priority: 85,
      color: '#e03694'
    },
    {
      icon: TrendingDown,
      title: 'Weak donor conversion flow',
      priority: 90,
      color: '#9e509f'
    },
    {
      icon: Smartphone,
      title: 'Mobile inconsistencies',
      priority: 75,
      color: '#fdb515'
    },
    {
      icon: Search,
      title: 'SEO & metadata gaps',
      priority: 70,
      color: '#e03694'
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
          Areas for Improvement
        </h2>
        <p
          className="uppercase"
          style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            letterSpacing: '0.1em',
            fontSize: '0.875rem',
            color: '#f15f48'
          }}
        >
          Current Pain Points
        </p>
      </div>

      {/* Priority Bars */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl space-y-6">
          {improvements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group">
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className="rounded-full p-2 flex-shrink-0"
                    style={{
                      backgroundColor: `${item.color}15`
                    }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                      letterSpacing: '-0.03em',
                      color: '#1A1A1A',
                      fontSize: '1.25rem'
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4 ml-14">
                  <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden flex-1">
                    <div
                      className="absolute inset-y-0 left-0 transition-all duration-1000 ease-out rounded-full"
                      style={{
                        width: `${item.priority}%`,
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}dd)`
                      }}
                    />
                  </div>
                  <div
                    className="flex-shrink-0 w-20 text-right"
                    style={{
                      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
                      color: item.color,
                      fontSize: '1.125rem',
                      letterSpacing: '-0.03em'
                    }}
                  >
                    {item.priority}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-8 text-center">
        <p
          className="uppercase"
          style={{
            fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            letterSpacing: '0.1em',
            fontSize: '0.875rem',
            color: '#9e509f'
          }}
        >
          Prioritized by impact on user experience and mission alignment
        </p>
      </div>

      {/* Slide Number */}
      <div className="text-right mt-4" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', letterSpacing: '0.1em', fontSize: '0.875rem', color: '#1A1A1A', opacity: 0.6 }}>
        04 / 07
      </div>
    </div>
  );
}
