import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { useAnimationContext } from '@/contexts/AnimationContext';
import heroImage from '@assets/hero_1762011431723.png';

const HeroSection = () => {
  const [showElements, setShowElements] = useState(false);
  const { animationsEnabled } = useAnimationContext();

  return (
    <section 
      className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Image Background */}
      <img
        src={heroImage}
        alt="Rene & Celia"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center' }}
      />
      {/* Cinematic gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
        <div className="space-y-8">
          {/* Date at the top - stacked vertically, aligned right */}
          <div className={`transition-all duration-700 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
            <div className="text-right space-y-1" data-testid="text-date">
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-wider" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>12</p>
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-wider" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>28</p>
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light tracking-wider" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>25</p>
            </div>
          </div>

          {/* Names below */}
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wide leading-tight" data-testid="text-main-invitation" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              {animationsEnabled ? (
                <TypeAnimation
                  sequence={[
                    'RENE\n&\nCELIA',
                    () => {
                      setShowElements(true);
                    }
                  ]}
                  wrapper="span"
                  speed={{ type: 'keyStrokeDelayInMs', value: 273 }}
                  style={{ 
                    whiteSpace: 'pre-line',
                    display: 'inline-block'
                  }}
                  cursor={true}
                  repeat={0}
                  className="typewriter-text"
                />
              ) : (
                <span 
                  style={{ 
                    whiteSpace: 'pre-line',
                    display: 'inline-block'
                  }}
                  className="typewriter-text"
                >
                  RENE
                  <br />
                  &
                  <br />
                  CELIA
                </span>
              )}
            </h1>
          </div>
        </div>
      </div>
      {/* Improved mobile responsiveness */}
      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        @media (min-width: 768px) {
          .hero-section {
            min-height: 100vh !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            background-attachment: scroll !important;
            background-size: cover !important;
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-height: 100vh !important;
          }
          .hero-section h1 {
            font-size: 2rem !important;
            line-height: 1.2 !important;
          }
          .hero-section [data-testid="text-date"] p {
            font-size: 2rem !important;
          }
        }

        /* Custom underscore cursor for TypeAnimation */
        .typewriter-text .react-type-animation-cursor {
          color: white;
          animation: blink 1.2s infinite;
        }

        .typewriter-text .react-type-animation-cursor::after {
          content: '_';
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
