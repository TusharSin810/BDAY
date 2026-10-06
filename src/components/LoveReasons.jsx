import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ChevronRight, ChevronLeft, PartyPopper } from 'lucide-react';
import { config } from '../data/config';

const LoveReasons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [burstKey, setBurstKey] = useState(0);

  const totalReasons = config.reasons.length;

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true);
      setBurstKey((prev) => prev + 1);
    }
  };

  const handleNextCard = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % totalReasons);
    setBurstKey((prev) => prev + 1);
  };

  const handlePrevCard = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + totalReasons) % totalReasons);
    setBurstKey((prev) => prev + 1);
  };

  const burstEmojisSet = [
    ['💖', '🎉', '✨', '😘', '💕', '💋'],
    ['💋', '🎈', '🌸', '✨', '🥰', '🥳'],
    ['🥳', '❤️', '🎁', '✨', '💘', '💖'],
    ['💥', '💖', '🌸', '🎉', '😘', '✨'],
    ['✨', '💕', '🎈', '💋', '❤️', '🥰']
  ];

  const currentEmojis = burstEmojisSet[currentIndex % burstEmojisSet.length];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-romantic-blush/20 via-romantic-cream to-romantic-blush/30 relative overflow-hidden flex flex-col items-center">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-romantic-rose/20 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-romantic-gold/10 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-4xl w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col items-center"
        >
          <motion.div 
            animate={{ rotate: [-8, 8, -8], scale: [1, 1.15, 1] }} 
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <Heart className="w-12 h-12 text-romantic-rose mb-3 fill-romantic-rose/30" strokeWidth={1.5} />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-handwritten text-romantic-charcoal mb-2 tracking-wide">
            Things I Love About You 💌
          </h2>
          <p className="text-romantic-rose font-serif text-sm md:text-base italic">
            {isOpen 
              ? `Card ${currentIndex + 1} of ${totalReasons} — Tap card or use buttons to see next reason!`
              : "Tap the dancing envelope to open Tussu's special birthday reasons!"
            }
          </p>
        </motion.div>

        {/* Dancing Envelope Container (Stays Permanently on Screen) */}
        <div className="w-full max-w-lg relative flex flex-col items-center pt-28 pb-12">

          {/* Dancing Outer Envelope Wrapper */}
          <motion.div
            initial={{ rotate: -5, scale: 0.95 }}
            whileInView={{ rotate: 0, scale: 1 }}
            animate={{ 
              rotate: [-2.5, 2.5, -2.5],
              y: [0, -10, 0]
            }}
            transition={{ 
              rotate: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
              y: { repeat: Infinity, duration: 2.8, ease: "easeInOut" }
            }}
            onClick={!isOpen ? handleOpenEnvelope : undefined}
            className={`w-full relative flex flex-col items-center select-none ${!isOpen ? 'cursor-pointer group' : ''}`}
          >
            
            {/* Open Envelope Back Flap (visible when isOpen is true, z-0) */}
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute -top-20 left-4 right-4 h-36 bg-[#EBE0CD] border-2 border-romantic-gold/40 rounded-t-3xl clip-path-triangle z-0 transform origin-bottom"
              ></motion.div>
            )}

            {/* Particle Emoji & Heart Burst Animation rising from Envelope Opening (z-30) */}
            <AnimatePresence mode="wait">
              {burstKey > 0 && (
                <div key={burstKey} className="absolute -top-16 inset-x-0 pointer-events-none z-30 flex items-center justify-center overflow-hidden">
                  {currentEmojis.map((emoji, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0, opacity: 1, x: 0, y: 40 }}
                      animate={{ 
                        scale: [0.8, 1.8, 1.4], 
                        opacity: [1, 0.9, 0],
                        x: (i % 2 === 0 ? 1 : -1) * (Math.random() * 130 + 20),
                        y: -(Math.random() * 150 + 60)
                      }}
                      transition={{ duration: 1.2, delay: i * 0.07, ease: "easeOut" }}
                      className="absolute text-4xl md:text-5xl filter drop-shadow-md select-none"
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
              )}
            </AnimatePresence>

            {/* Card Slot - Cards coming from inside Envelope Pocket (z-10) */}
            <div className="w-full px-4 relative z-10 min-h-[260px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 140, scale: 0.7 }}
                    animate={{ opacity: 1, y: -90, scale: 1 }}
                    exit={{ opacity: 0, y: -160, scale: 0.8 }}
                    transition={{ duration: 0.55, type: "spring", stiffness: 90 }}
                    onClick={handleNextCard}
                    className="cursor-pointer w-full bg-[#FCFBF7] border-2 border-romantic-rose/40 rounded-3xl p-6 md:p-8 shadow-2xl relative flex flex-col justify-between group hover:border-romantic-rose transition-all select-none border-t-4 border-t-romantic-gold/60"
                  >
                    {/* Postcard Header */}
                    <div className="flex items-center justify-between border-b border-romantic-gold/30 pb-3">
                      <div className="flex items-center gap-2 text-romantic-rose font-handwritten text-2xl font-bold">
                        <PartyPopper size={20} className="animate-bounce" />
                        <span>Postcard #{String(currentIndex + 1).padStart(2, '0')}</span>
                      </div>

                      <span className="text-[11px] font-serif font-bold text-romantic-gold uppercase tracking-widest bg-romantic-gold/10 px-3 py-1 rounded-full">
                        {currentIndex + 1} / {totalReasons}
                      </span>
                    </div>

                    {/* Postcard Body Message */}
                    <div className="my-5 py-2 flex items-center justify-center min-h-[90px]">
                      <p className="font-handwritten text-2xl md:text-3xl text-romantic-charcoal leading-relaxed italic">
                        "{config.reasons[currentIndex]}"
                      </p>
                    </div>

                    {/* Postcard Footer */}
                    <div className="flex items-center justify-between border-t border-romantic-gold/20 pt-3 text-xs font-serif text-romantic-gold">
                      <span className="flex items-center gap-1 font-semibold text-romantic-rose">
                        <Sparkles size={14} /> Tap card for next reason!
                      </span>
                      <span className="font-handwritten text-lg text-romantic-rose font-bold">
                        For Tussu ❤️
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  /* Sealed Envelope Teaser inside pocket slot when closed */
                  <div className="w-full flex flex-col items-center justify-center py-6 text-center">
                    <motion.p
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 1.8 }}
                      className="font-handwritten text-2xl md:text-3xl text-romantic-rose font-bold mb-1"
                    >
                      💌 Tap to Open Tussu's Envelope!
                    </motion.p>
                    <p className="font-serif text-xs text-romantic-gold tracking-wide">
                      15 Postcards Waiting Inside ✨
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Front Envelope Pocket Body (z-20) */}
            <div className="w-full h-44 bg-gradient-to-br from-[#FAF6EE] via-[#F5EDDE] to-[#EBE2D3] border-2 border-romantic-gold/50 rounded-b-3xl shadow-2xl relative z-20 flex flex-col items-center justify-end p-6 border-t border-romantic-gold/30">
              
              {/* Closed Envelope Top Flap (folded DOWN over pocket when NOT isOpen) */}
              {!isOpen && (
                <div className="absolute -top-24 left-0 right-0 h-24 bg-[#E2D5BE] border-2 border-romantic-gold/50 rounded-t-3xl clip-path-triangle-down z-30 shadow-md flex items-center justify-center">
                </div>
              )}

              {/* Wax Seal Emblem */}
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={!isOpen ? handleOpenEnvelope : undefined}
                className="absolute -top-7 w-16 h-16 bg-romantic-rose text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white cursor-pointer z-40 group-hover:scale-110 transition-transform"
              >
                <Heart size={30} className="fill-current animate-pulse text-white" />
              </motion.div>

              <div className="text-center pt-2">
                <span className="font-serif text-sm font-bold text-romantic-charcoal tracking-wide block">
                  {isOpen ? "Envelope Pocket for Tussu ❤️" : "Sealed Birthday Envelope for Tussu 🎁"}
                </span>
                <span className="font-handwritten text-xl text-romantic-rose">
                  {isOpen ? `${currentIndex + 1} of 15 Postcards Out 💌` : "Click Anywhere to Open! ✨"}
                </span>
              </div>
            </div>

          </motion.div>

          {/* Master Deck Controls (Visible only after envelope is opened) */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full flex items-center justify-center gap-4 mt-8 relative z-30"
            >
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handlePrevCard}
                className="p-3.5 bg-white text-romantic-charcoal rounded-full border border-romantic-gold/40 shadow-lg hover:bg-romantic-gold hover:text-white transition"
                title="Previous Card"
              >
                <ChevronLeft size={22} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNextCard}
                className="px-8 py-3.5 bg-gradient-to-r from-romantic-rose to-romantic-gold text-white font-serif text-base md:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition flex items-center gap-2 border-2 border-white/40"
              >
                <span>Next Card ({currentIndex + 1}/{totalReasons}) 💕</span>
                <ChevronRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleNextCard}
                className="p-3.5 bg-white text-romantic-charcoal rounded-full border border-romantic-gold/40 shadow-lg hover:bg-romantic-gold hover:text-white transition"
                title="Next Card"
              >
                <ChevronRight size={22} />
              </motion.button>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

export default LoveReasons;
