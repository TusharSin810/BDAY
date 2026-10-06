import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, RefreshCw } from 'lucide-react';
import { config } from '../data/config';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  
  const fullText = config.letter.content;

  useEffect(() => {
    if (isOpen) {
      setDisplayedText('');
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(fullText.substring(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 25);
      return () => clearInterval(interval);
    }
  }, [isOpen, fullText]);

  return (
    <section className="py-24 px-4 bg-romantic-cream flex flex-col items-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-serif text-romantic-charcoal mb-3">
          One thing I haven't said enough...
        </h2>
        <p className="text-romantic-rose font-handwritten text-2xl">
          {isOpen ? "A special letter just for you" : "Click the envelope to open"}
        </p>
      </motion.div>

      {/* Envelope Container */}
      <div className="relative w-full max-w-xl flex flex-col items-center min-h-[480px]">
        {!isOpen ? (
          /* Closed Envelope Interactive Button */
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer group relative w-80 h-56 md:w-96 md:h-64 bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-romantic-gold/50 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 text-center transform transition duration-300"
          >
            {/* Envelope Flap visual */}
            <div className="absolute top-0 left-0 right-0 h-28 bg-amber-200/90 clip-path-triangle border-b-2 border-romantic-gold/30 rounded-t-2xl"></div>
            
            {/* Wax Seal */}
            <div className="relative z-10 w-16 h-16 bg-romantic-rose text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition transform">
              <Heart size={32} className="fill-current animate-pulse" />
            </div>

            <p className="relative z-10 font-handwritten text-2xl text-romantic-charcoal mt-4 font-bold">
              To Tussu ❤️
            </p>
            <span className="relative z-10 text-xs font-serif uppercase tracking-widest text-romantic-gold mt-1 group-hover:underline">
              Tap to Open Letter
            </span>
          </motion.div>
        ) : (
          /* Opened Envelope with Sliding Letter */
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="w-full bg-[#fdfbf7] border-2 border-romantic-gold/40 p-8 md:p-12 rounded-2xl shadow-2xl relative min-h-[380px] flex flex-col justify-between"
            >
              {/* Decorative top header */}
              <div className="flex items-center justify-between border-b border-romantic-gold/20 pb-4 mb-6">
                <div className="flex items-center gap-2 text-romantic-rose">
                  <Mail size={20} />
                  <span className="font-serif text-sm font-semibold tracking-wider uppercase">Personal Note</span>
                </div>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-1 text-xs text-gray-500 hover:text-romantic-charcoal transition bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full font-serif"
                >
                  <RefreshCw size={12} /> Fold Envelope
                </button>
              </div>

              {/* Letter Text Content */}
              <div className="flex-1 my-2">
                <p className="font-handwritten text-2xl md:text-3xl text-romantic-charcoal leading-relaxed whitespace-pre-wrap">
                  {displayedText}
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-[2px] h-7 bg-romantic-charcoal ml-1 align-middle"
                  />
                </p>
              </div>

              {/* Bottom decorative seal */}
              <div className="text-right pt-6 border-t border-romantic-gold/20 mt-6">
                <span className="font-handwritten text-3xl text-romantic-rose font-bold">
                  Yours Forever ❤️
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default LoveLetter;
