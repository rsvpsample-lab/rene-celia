import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface CoverSectionProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const CoverSection = ({ imageUrl, alt, className = "" }: CoverSectionProps) => {
  const isVideo = imageUrl.match(/\.(mp4|mov|webm|ogg)$/i);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Transform scroll progress to scale value (0.8 to 1.1)
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);

  return (
    <section ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>
      {/* Full Width Image/Video Container */}
      <motion.div 
        className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden"
        style={{ scale }}
      >
        {isVideo ? (
          <video
            src={imageUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            webkit-playsinline="true"
            x5-playsinline="true"
            x-webkit-airplay="allow"
            controls={false}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'top',
              margin: 0,
              padding: 0
            }}
            onLoadedMetadata={(e) => {
              const video = e.currentTarget;
              // Force muted state
              video.muted = true;
              video.play().catch((error) => {
                console.log('Autoplay prevented, will retry on user interaction:', error);
              });
            }}
            onCanPlay={(e) => {
              const video = e.currentTarget;
              video.muted = true;
              video.play().catch(() => {
                // Silently handle autoplay restrictions on mobile
              });
            }}
            onClick={(e) => {
              const video = e.currentTarget;
              if (video.paused) {
                video.play();
              }
            }}
            data-testid="cover-video"
          />
        ) : (
          <img
            src={imageUrl}
            alt={alt}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'top',
              margin: 0,
              padding: 0
            }}
            data-testid="cover-image"
          />
        )}
      </motion.div>
    </section>
  );
};

export default CoverSection;