import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Gift, PartyPopper, Heart, Trophy } from 'lucide-react';

const IntroScreen = ({ onEnter }) => {
  const [poppedBalloons, setPoppedBalloons] = useState([]);
  const [isPoppingExplosion, setIsPoppingExplosion] = useState(false);
  const [showWinModal, setShowWinModal] = useState(false);

  // 7 Fast & Dynamic Floating Balloons
  const balloonsList = [
    { id: 1, symbol: '🎈', left: '6%', delay: 0.1, speed: 5.5 },
    { id: 2, symbol: '🥳', left: '20%', delay: 0.6, speed: 6.0 },
    { id: 3, symbol: '🎈', left: '34%', delay: 0.3, speed: 4.8 },
    { id: 4, symbol: '🎁', left: '48%', delay: 1.0, speed: 5.2 },
    { id: 5, symbol: '🎈', left: '62%', delay: 0.2, speed: 6.2 },
    { id: 6, symbol: '🎉', left: '76%', delay: 0.7, speed: 4.5 },
    { id: 7, symbol: '🎈', left: '90%', delay: 1.2, speed: 5.8 },
  ];

  const handleBalloonClick = (id, e) => {
    e.stopPropagation();
    if (!poppedBalloons.includes(id)) {
      const updated = [...poppedBalloons, id];
      setPoppedBalloons(updated);
      if (updated.length === balloonsList.length) {
        setShowWinModal(true);
      }
    }
  };

  const handleStartSurprise = () => {
    setIsPoppingExplosion(true);
    setTimeout(() => {
      onEnter();
    }, 900);
  };

  return (
    <motion.div
      key="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
      className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-romantic-cream via-romantic-blush/30 to-romantic-cream relative overflow-hidden select-none"
    >
      {/* Floating Fast Interactive Balloons Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {balloonsList.map((b) => (
          !poppedBalloons.includes(b.id) && (
            <motion.div
              key={b.id}
              initial={{ y: '108vh', opacity: 0.95 }}
              animate={{ y: '-18vh' }}
              transition={{ repeat: Infinity, duration: b.speed, delay: b.delay, ease: 'linear' }}
              onClick={(e) => handleBalloonClick(b.id, e)}
              className="absolute pointer-events-auto cursor-pointer text-5xl md:text-6xl hover:scale-135 transition transform filter drop-shadow-lg"
              style={{ left: b.left }}
              title="Click to POP me! 💥"
            >
              {b.symbol}
            </motion.div>
          )
        ))}
      </div>

      {/* Popper Explosion Effect when Entering */}
      <AnimatePresence>
        {isPoppingExplosion && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: [1, 2.5, 3.5], opacity: [1, 0.9, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center bg-romantic-rose/10 backdrop-blur-sm"
          >
            <div className="text-8xl">🎉 🎊 ✨ 💕 🎈 💥</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7/7 Balloons Popped Victory Celebration Modal */}
      <AnimatePresence>
        {showWinModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
          >
            <div className="bg-gradient-to-br from-white via-[#FFF9F2] to-[#FFF0E5] border-4 border-romantic-rose rounded-3xl p-8 max-w-md text-center shadow-2xl relative overflow-hidden">
              
              {/* Floating Emojis */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {['🎉', '🥳', '💖', '✨', '🏆', '🎈'].map((em, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [-10, -60], opacity: [1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    className="absolute text-3xl"
                    style={{ left: `${15 + i * 15}%`, bottom: '10%' }}
                  >
                    {em}
                  </motion.span>
                ))}
              </div>

              <motion.div
                animate={{ rotate: [-10, 10, -10], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-16 h-16 bg-romantic-rose text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <Trophy size={36} />
              </motion.div>

              <span className="text-xs font-serif font-bold text-romantic-gold uppercase tracking-widest bg-romantic-gold/20 px-3 py-1 rounded-full mb-2 inline-block">
                7 / 7 BALLOONS POPPED! 💥
              </span>

              <h2 className="text-3xl md:text-4xl font-handwritten text-romantic-rose font-bold mb-3">
                YOOOO YOU WON THE GAME! 🎉
              </h2>

              <p className="text-lg font-serif text-romantic-charcoal leading-relaxed mb-6 font-semibold">
                You popped every single balloon... but guess what? <br />
                <span className="text-romantic-rose font-handwritten text-2xl font-bold">
                  You also won ME and my heart forever Tussu! 💕
                </span>
              </p>

              <div className="flex flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowWinModal(false);
                    handleStartSurprise();
                  }}
                  className="px-8 py-3.5 bg-gradient-to-r from-romantic-rose to-romantic-gold text-white font-serif text-lg font-bold rounded-full shadow-xl flex items-center justify-center gap-2"
                >
                  <span>See Birthday Surprise 🎁</span>
                  <Sparkles size={20} />
                </motion.button>

                <button
                  onClick={() => setShowWinModal(false)}
                  className="text-xs text-romantic-charcoal/60 hover:text-romantic-rose underline font-serif"
                >
                  Close & keep playing 🎈
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Intro Card */}
      <div className="relative z-20 text-center px-6 max-w-3xl flex flex-col items-center">
        
        {/* Decorative Top Badge with Live Counter */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 shadow-md text-romantic-rose text-sm font-semibold mb-6 border border-romantic-gold/30"
        >
          <PartyPopper size={18} className="animate-bounce" />
          <span>
            {poppedBalloons.length === 7 
              ? "🏆 7/7 Popped! You Won The Game & My Heart! 💕"
              : `Tap the fast floating balloons (${poppedBalloons.length}/7 Popped!) 🎈`}
          </span>
          <PartyPopper size={18} className="animate-bounce" />
        </motion.div>

        {/* Heading 1 */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-2xl md:text-4xl font-serif text-romantic-charcoal mb-4 tracking-wide"
        >
          I could have just said...
        </motion.h1>

        {/* Big Birthday Heading with Popper Accents */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative my-2 flex items-center justify-center gap-3"
        >
          <motion.span
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-4xl md:text-6xl hidden sm:inline-block"
          >
            🎉
          </motion.span>

          <h2 className="text-5xl md:text-7xl font-handwritten text-romantic-rose drop-shadow-md">
            Happy Birthday Tussu ❤️
          </h2>

          <motion.span
            animate={{ rotate: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-4xl md:text-6xl hidden sm:inline-block"
          >
            🎉
          </motion.span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="text-xl md:text-3xl font-serif text-romantic-charcoal italic mt-4 mb-12"
        >
          But you deserve a whole website.
        </motion.p>

        {/* Creative Surprise Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          whileHover={{ scale: 1.06, boxShadow: '0 20px 30px -10px rgba(212, 175, 55, 0.5)' }}
          whileTap={{ scale: 0.96 }}
          onClick={handleStartSurprise}
          className="group relative px-8 py-4 bg-gradient-to-r from-romantic-gold via-amber-400 to-romantic-rose text-white rounded-full font-serif text-lg md:text-xl font-bold transition-all shadow-2xl flex items-center gap-3 border-2 border-white/40"
        >
          <Gift size={24} className="animate-bounce text-white" />
          <span>Click to See Your Birthday Surprise ✨</span>
          <Sparkles size={20} className="group-hover:rotate-45 transition transform" />
        </motion.button>
        
        {poppedBalloons.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-sm font-handwritten text-romantic-rose text-xl font-bold"
          >
            💥 Balloons popped: {poppedBalloons.length} / 7!
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default IntroScreen;
