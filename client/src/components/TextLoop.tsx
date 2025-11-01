import { useAnimationContext } from '@/contexts/AnimationContext';

const TextLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  
  const textItems = [
    "You're invited",
    "You're invited",
    "You're invited",
    "You're invited",
    "You're invited",
    "You're invited"
  ];

  return (
    <section className="text-loop-section section-hard-blue w-full overflow-hidden py-16 md:py-20">
      <div className="text-loop-container">
        <div className={`${animationsEnabled ? 'text-loop-track' : 'text-loop-track-static'}`}>
          {/* First set of text */}
          {textItems.map((text, index) => (
            <div key={`set1-${index}`} className="text-loop-item">
              <span 
                className="text-loop-text"
                style={{ 
                  fontFamily: 'Boska, serif',
                  color: 'hsl(45, 40%, 45%)',
                  fontStyle: 'italic'
                }}
                data-testid={`text-loop-${index + 1}`}
              >
                {text}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {textItems.map((text, index) => (
            <div key={`set2-${index}`} className="text-loop-item">
              <span 
                className="text-loop-text"
                style={{ 
                  fontFamily: 'Boska, serif',
                  color: 'hsl(45, 40%, 45%)',
                  fontStyle: 'italic'
                }}
                data-testid={`text-loop-dup-${index + 1}`}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .text-loop-container {
          width: 100%;
          overflow: hidden;
        }

        .text-loop-track {
          display: flex;
          animation: textLoop 30s linear infinite;
          width: fit-content;
          gap: 4rem;
        }

        .text-loop-track-static {
          display: flex;
          width: fit-content;
          gap: 4rem;
        }

        .text-loop-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .text-loop-text {
          font-size: 4rem;
          font-weight: 500;
          white-space: nowrap;
          text-shadow: 0 2px 10px rgba(166, 124, 82, 0.2);
        }

        @keyframes textLoop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause animation on hover for better UX */
        .text-loop-track:hover {
          animation-play-state: paused;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .text-loop-text {
            font-size: 2.5rem;
          }
          
          .text-loop-track {
            gap: 2rem;
            animation-duration: 20s;
          }
          
          .text-loop-track-static {
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TextLoop;
