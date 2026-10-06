import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Flame, RefreshCw, Trophy, Heart, PartyPopper } from 'lucide-react';
import { config } from '../data/config';

const FavouriteThings = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [poppedBalloons, setPoppedBalloons] = useState({});
  const [activeItem, setActiveItem] = useState(null);
  const [showWinModal, setShowWinModal] = useState(false);

  // 7 Fast & Dynamic Floating Balloons
  const initialBalloons = [
    { id: 1, left: '6%', delay: 0.1, speed: 5.2, icon: '🎈' },
    { id: 2, left: '20%', delay: 0.8, speed: 6.0, icon: '🥳' },
    { id: 3, left: '34%', delay: 0.4, speed: 4.9, icon: '🎈' },
    { id: 4, left: '48%', delay: 1.2, speed: 5.5, icon: '🎁' },
    { id: 5, left: '62%', delay: 0.2, speed: 6.3, icon: '🎈' },
    { id: 6, left: '76%', delay: 0.9, speed: 4.7, icon: '🎉' },
    { id: 7, left: '90%', delay: 1.5, speed: 5.8, icon: '🎈' },
  ];

  const handlePopBalloon = (id) => {
    setPoppedBalloons(prev => {
      const updated = { ...prev, [id]: true };
      const poppedCount = Object.keys(updated).length;
      if (poppedCount === initialBalloons.length) {
        setShowWinModal(true);
      }
      return updated;
    });
  };

  const poppedCount = Object.keys(poppedBalloons).length;

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-romantic-cream via-romantic-blush/10 to-romantic-cream relative overflow-hidden">
      
      {/* Floating Fast Interactive Balloons */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {initialBalloons.map(b => (
          !poppedBalloons[b.id] && (
            <motion.div
              key={b.id}
              initial={{ y: '105vh', opacity: 0.9 }}
              animate={{ y: '-18vh' }}
              transition={{ repeat: Infinity, duration: b.speed, delay: b.delay, ease: "linear" }}
              onClick={(e) => {
                e.stopPropagation();
                handlePopBalloon(b.id);
              }}
              className="absolute pointer-events-auto cursor-pointer text-5xl hover:scale-135 transition transform filter drop-shadow-md select-none"
              style={{ left: b.left }}
              title="Click to POP me! 💥"
            >
              {b.icon}
            </motion.div>
          )
        ))}
      </div>

      {/* 7/7 Popped Victory Celebration Modal */}
      <AnimatePresence>
        {showWinModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
          >
            <div className="bg-gradient-to-br from-white via-[#FFF9F2] to-[#FFF0E5] border-4 border-romantic-rose rounded-3xl p-8 max-w-md text-center shadow-2xl relative overflow-hidden select-none">
              
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
                You popped every balloon on screen... but most importantly: <br />
                <span className="text-romantic-rose font-handwritten text-2xl font-bold">
                  You won ME and my heart forever Tussu! 💕
                </span>
              </p>

              <button
                onClick={() => setShowWinModal(false)}
                className="px-8 py-3.5 bg-gradient-to-r from-romantic-rose to-romantic-gold text-white font-serif text-lg font-bold rounded-full shadow-xl hover:scale-105 transition flex items-center justify-center gap-2 mx-auto"
              >
                <span>Awesome! Keep Celebrating 🥳</span>
                <Sparkles size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto relative z-20">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-romantic-gold/10 text-romantic-gold text-sm font-semibold mb-3">
            <PartyPopper size={16} /> 
            {poppedCount === 7 
              ? "🏆 7/7 Balloons Popped! You Won Me! 💕" 
              : `Tap fast floating balloons to pop! (${poppedCount}/7 Popped)`}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-romantic-charcoal mb-2">
            Your Favourite Things 💖
          </h2>
          <p className="text-romantic-rose font-handwritten text-2xl">
            Everything that makes you smile
          </p>
        </motion.div>

        {/* Grid of Favourite Things */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {config.favouriteThings.map((thing, index) => {
            const isClicked = activeItem === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveItem(isClicked ? null : index)}
                className={`glass-panel p-6 rounded-3xl text-center flex flex-col items-center justify-center gap-3 cursor-pointer relative overflow-hidden transition-all shadow-lg border-2 ${isClicked ? 'border-romantic-rose bg-romantic-rose/10' : 'border-transparent hover:border-romantic-gold/40'}`}
              >
                {/* Pop particles on click */}
                <AnimatePresence>
                  {isClicked && (
                    <motion.div
                      initial={{ scale: 0.5, opacity: 1 }}
                      animate={{ scale: 1.4, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-romantic-gold/20 rounded-3xl pointer-events-none flex items-center justify-center"
                    >
                      <span className="text-2xl">✨</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <span className="text-5xl hover:rotate-12 transition duration-300 transform">{thing.icon}</span>
                <h3 className="text-xs font-bold text-romantic-gold uppercase tracking-widest">{thing.label}</h3>
                <p className="font-serif text-lg md:text-xl text-romantic-charcoal font-semibold">{thing.value}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Candle Blowing Birthday Cake Widget (Grand 3-Tier Cake) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-xl p-8 md:p-14 rounded-3xl border-2 border-romantic-gold/50 shadow-2xl text-center max-w-3xl mx-auto relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-romantic-rose/10 text-romantic-rose text-xs font-bold uppercase tracking-wider mb-3 border border-romantic-rose/20">
            <Sparkles size={14} /> Birthday Wish Ceremony 🎂
          </div>

          <h3 className="text-3xl md:text-5xl font-serif text-romantic-charcoal mb-3 font-bold">
            Blow Out Tussu's Birthday Candles! 🎂✨
          </h3>
          <p className="text-romantic-charcoal/80 font-sans mb-8 text-base md:text-lg italic">
            {!candlesBlown ? "Click the button below to blow out all 5 candles & make your grand birthday wish!" : "✨ WISH GRANTED! May your year ahead be packed with endless laughter, cars, mountains & Diet Cokes! 🎉"}
          </p>

          {/* Grand 3-Tier Cake Visual with 5 Animated Candles */}
          <div className="relative w-full max-w-md mx-auto mb-10 pt-10 pb-4 flex flex-col items-center justify-end select-none">
            
            {/* 5 Candles & Realistic Flickering Flames */}
            <div className="flex justify-center items-end gap-5 md:gap-7 mb-1 relative z-20">
              {[1, 2, 3, 4, 5].map((c) => (
                <div key={c} className="flex flex-col items-center relative group">
                  {!candlesBlown ? (
                    <motion.div
                      animate={{ 
                        scale: [1, 1.25, 1.05, 1.3, 1],
                        opacity: [0.85, 1, 0.9, 1, 0.85],
                        rotate: [-2, 3, -3, 2, 0]
                      }}
                      transition={{ repeat: Infinity, duration: 0.5 + c * 0.15, ease: "easeInOut" }}
                      className="w-5 h-8 bg-gradient-to-t from-amber-500 via-amber-300 to-yellow-100 rounded-full blur-[1.5px] shadow-[0_0_16px_#f59e0b] mb-1 flex items-center justify-center relative cursor-pointer"
                    >
                      <Flame size={16} className="text-red-500 fill-amber-300 animate-pulse" />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ y: 0, opacity: 1, scale: 0.5 }}
                      animate={{ y: -30, opacity: 0, scale: 1.6 }}
                      transition={{ duration: 1.4, delay: c * 0.1 }}
                      className="text-base text-gray-400 mb-1 select-none font-bold"
                    >
                      💨 ☁️
                    </motion.div>
                  )}
                  {/* Candle Stick */}
                  <div className={`w-3.5 h-10 rounded-t-sm border-x border-white/40 shadow-sm ${
                    c % 2 === 0 
                      ? 'bg-gradient-to-b from-rose-300 via-pink-400 to-romantic-rose' 
                      : 'bg-gradient-to-b from-amber-200 via-yellow-300 to-romantic-gold'
                  }`}></div>
                </div>
              ))}
            </div>

            {/* Cake Tier 1 (Top Tier) */}
            <div className="w-48 md:w-56 h-12 bg-gradient-to-r from-pink-200 via-rose-100 to-pink-200 rounded-t-2xl border-b-4 border-white flex items-center justify-center shadow-md relative overflow-hidden z-15">
              <span className="text-xs font-serif text-romantic-rose font-extrabold tracking-widest uppercase">
                Happy Birthday
              </span>
              <div className="absolute inset-x-0 bottom-0 h-2 bg-romantic-rose/20"></div>
            </div>

            {/* Cake Tier 2 (Middle Tier) */}
            <div className="w-64 md:w-72 h-14 bg-gradient-to-r from-[#FFF0E5] via-[#FFF9F2] to-[#FFEBE0] border-t-2 border-romantic-rose/30 border-b-4 border-white flex items-center justify-center shadow-lg relative z-10">
              <span className="text-xl">🍓 🌸 🍓 🌸 🍓 🌸 🍓</span>
            </div>

            {/* Cake Tier 3 (Base Tier - Biggest) */}
            <div className="w-80 md:w-96 h-16 bg-gradient-to-r from-romantic-rose/30 via-romantic-cream to-romantic-rose/40 rounded-b-3xl border-t-2 border-romantic-gold/40 flex items-center justify-center shadow-2xl relative z-5 border-b-4 border-b-romantic-gold">
              <span className="font-handwritten text-2xl md:text-3xl text-romantic-charcoal font-bold tracking-wider">
                ✨ TUSHAR SINGHAL ✨
              </span>
            </div>

            {/* Cake Stand Base */}
            <div className="w-96 md:w-[420px] h-4 bg-gradient-to-r from-gray-200 via-white to-gray-300 rounded-full shadow-xl -mt-1"></div>

          </div>

          {/* Celebration Particle Explosion on Candles Blown */}
          <AnimatePresence>
            {candlesBlown && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="mb-6 py-3 px-6 bg-gradient-to-r from-romantic-rose/10 via-romantic-gold/20 to-romantic-rose/10 rounded-2xl border border-romantic-gold/30 flex items-center justify-center gap-3 animate-pulse"
              >
                <Sparkles className="text-romantic-gold" />
                <span className="font-handwritten text-2xl text-romantic-rose font-bold">
                  🎉 Wish Granted for Tussu! May all your dreams come true! 💕
                </span>
                <Sparkles className="text-romantic-gold" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Button */}
          {!candlesBlown ? (
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setCandlesBlown(true)}
              className="px-10 py-4 bg-gradient-to-r from-romantic-rose via-rose-500 to-romantic-gold text-white font-serif text-lg md:text-xl font-bold rounded-full shadow-2xl hover:shadow-romantic-rose/40 transition-all flex items-center gap-3 mx-auto border-2 border-white/40"
            >
              🌬️ Blow Candles & Make a Wish ✨
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCandlesBlown(false)}
              className="px-7 py-3 bg-white text-romantic-charcoal border-2 border-romantic-gold/50 font-serif text-sm font-semibold rounded-full hover:bg-romantic-cream transition-all flex items-center gap-2 mx-auto shadow-md"
            >
              <RefreshCw size={16} /> Relight Candles 🕯️
            </motion.button>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default FavouriteThings;
