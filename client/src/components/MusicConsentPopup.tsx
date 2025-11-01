import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicConsentPopupProps {
  onConsent: (consent: boolean) => void;
  isVisible: boolean;
}

const MusicConsentPopup = ({ onConsent, isVisible }: MusicConsentPopupProps) => {
  const handleConsent = (consent: boolean) => {
    onConsent(consent);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] backdrop-blur-md flex items-center justify-center p-4"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(166, 124, 82, 0.15))'
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 md:p-12 max-w-md w-full relative overflow-hidden"
            style={{
              boxShadow: '0 20px 60px rgba(166, 124, 82, 0.25), 0 0 40px rgba(166, 124, 82, 0.1)',
              border: '1px solid rgba(166, 124, 82, 0.2)'
            }}
          >
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(45, 40%, 45%) 0%, transparent 50%)',
            }} />
            
            <div className="text-center space-y-8 relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full opacity-20 blur-xl" style={{
                    background: 'hsl(45, 40%, 45%)'
                  }} />
                  <Music className="h-16 w-16 relative z-10" style={{ color: 'hsl(45, 40%, 45%)' }} strokeWidth={1.5} />
                </div>
              </motion.div>
              
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight" style={{ color: 'hsl(45, 40%, 45%)' }}>
                  Play music?
                </h2>
                
                <p className="leading-relaxed text-sm md:text-base" style={{ color: 'hsl(45, 35%, 55%)' }}>
                  Enhance your experience with background music
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <Button
                  onClick={() => handleConsent(true)}
                  className="w-full text-white font-semibold py-6 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    background: 'hsl(45, 40%, 45%)',
                    boxShadow: '0 4px 20px rgba(166, 124, 82, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'hsl(45, 45%, 50%)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(166, 124, 82, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'hsl(45, 40%, 45%)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(166, 124, 82, 0.3)';
                  }}
                  data-testid="button-allow-music"
                >
                  <Volume2 className="h-5 w-5 mr-2" />
                  Play Music
                </Button>
                <Button
                  onClick={() => handleConsent(false)}
                  variant="ghost"
                  className="w-full font-semibold py-6 px-6 rounded-xl transition-all duration-300 border-2"
                  style={{
                    color: 'hsl(45, 40%, 45%)',
                    borderColor: 'hsl(45, 40%, 45%)',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'hsl(45, 40%, 45%)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'hsl(45, 40%, 45%)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  data-testid="button-skip-music"
                >
                  <VolumeX className="h-5 w-5 mr-2" />
                  Continue Silently
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicConsentPopup;