import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, Car, CupSoda, PartyPopper, X, Heart } from 'lucide-react';
import { config } from '../data/config';

const InsideJokes = () => {
  const [activeModalJoke, setActiveModalJoke] = useState(null);
  const [burstKey, setBurstKey] = useState(0);

  const icons = [<Brain size={24} />, <Car size={24} />, <CupSoda size={24} />];

  const jokePunchlines = [
    "imagining a reason that couldnt exist even in parallel word 💭",
    "after me obviously 🏎️❤️",
    "after eating a lot of calories then having a zero calorie coke 🥤"
  ];

  const jokeBurstEmojis = [
    ['💭', '✨', '🧠', '💥', '💖', '🌸'],
    ['🏎️', '💨', '❤️', '💥', '🏎️', '🎉'],
    ['🥤', '🧊', '💥', '🥤', '✨', '😋']
  ];

  const handleOpenJoke = (index) => {
    setActiveModalJoke(index);
    setBurstKey((prev) => prev + 1);
  };

  const handleCloseModal = () => {
    setActiveModalJoke(null);
  };

  return (
    <div className="h-full flex flex-col justify-between select-none">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 text-left"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-romantic-rose text-white text-xs font-bold uppercase tracking-wider mb-2 border border-white shadow-sm">
          <Sparkles size={14} /> Secret Codes & Inside Jokes
        </div>
        <h2 className="text-2xl md:text-3xl font-serif text-romantic-charcoal font-bold leading-snug">
          Things That Would Make Sense To Absolutely No One Else 💭
        </h2>
        <p className="text-romantic-rose font-serif text-xs md:text-sm font-bold mt-1">
          💥 Tap any card to pop the secret joke & emoji burst!
        </p>
      </motion.div>

      {/* 3 Points Cards - Tap to POP! */}
      <div className="flex flex-col gap-4 my-auto relative">
        {config.insideJokes.map((joke, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.35 + 0.2, duration: 0.5, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.03, x: 4 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleOpenJoke(index)}
            className="p-4 md:p-5 rounded-2xl border-2 border-romantic-rose/30 bg-white/90 backdrop-blur-md shadow-md hover:shadow-2xl hover:border-romantic-rose transition-all cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center gap-4 flex-1">
              {/* Number Pill Badge */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-romantic-rose to-romantic-gold text-white font-bold flex items-center justify-center text-sm shadow-md flex-shrink-0 group-hover:rotate-12 transition-transform">
                0{index + 1}
              </div>

              {/* Main Joke Title */}
              <p className="font-handwritten text-2xl md:text-3xl text-romantic-charcoal font-bold group-hover:text-romantic-rose transition-colors">
                {joke}
              </p>
            </div>

            {/* Right Icon indicator */}
            <div className="text-romantic-rose p-2 rounded-full bg-romantic-rose/10 group-hover:bg-romantic-rose group-hover:text-white transition-all">
              {icons[index] || <Sparkles size={20} />}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bursting Emoji Popping Modal Card */}
      <AnimatePresence>
        {activeModalJoke !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-md"
          >
            {/* Bursting Emojis Explosion */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-10">
              {jokeBurstEmojis[activeModalJoke].map((emoji, i) => (
                <motion.span
                  key={`${burstKey}-${i}`}
                  initial={{ scale: 0, opacity: 1, x: 0, y: 0 }}
                  animate={{ 
                    scale: [0.8, 2, 1.5], 
                    opacity: [1, 1, 0],
                    x: (i % 2 === 0 ? 1 : -1) * (Math.random() * 160 + 40),
                    y: (i < 3 ? -1 : 1) * (Math.random() * 160 + 40)
                  }}
                  transition={{ duration: 1.3, delay: i * 0.08, ease: "easeOut" }}
                  className="absolute text-5xl md:text-6xl filter drop-shadow-lg select-none"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>

            {/* Pop-up Card */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 140, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-white via-[#FFF9F4] to-[#FFF0E8] border-4 border-romantic-rose rounded-3xl p-7 md:p-9 max-w-md w-full text-center shadow-2xl relative z-20 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-romantic-rose/10 text-romantic-rose hover:bg-romantic-rose hover:text-white transition"
              >
                <X size={20} />
              </button>

              <div className="w-14 h-14 bg-romantic-rose text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-white">
                <PartyPopper size={30} className="animate-bounce" />
              </div>

              <span className="text-xs font-serif font-bold text-romantic-gold uppercase tracking-widest bg-romantic-gold/20 px-3.5 py-1.5 rounded-full mb-3 inline-block">
                SECRET JOKE REVEALED! 💥
              </span>

              <h3 className="text-2xl md:text-3xl font-handwritten text-romantic-charcoal font-bold mb-4">
                "{config.insideJokes[activeModalJoke]}"
              </h3>

              {/* Punchline Card */}
              <div className="bg-romantic-rose/15 border-2 border-romantic-rose/40 rounded-2xl p-5 mb-6 text-romantic-rose">
                <p className="font-handwritten text-2xl md:text-3xl font-bold leading-relaxed italic drop-shadow-sm">
                  ✨ "{jokePunchlines[activeModalJoke]}"
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCloseModal}
                className="px-8 py-3 bg-gradient-to-r from-romantic-rose to-romantic-gold text-white font-serif text-base font-bold rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 mx-auto"
              >
                <span>Awesome! 💖</span>
                <Heart size={16} className="fill-current" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 pt-4 border-t border-romantic-gold/30 text-xs font-serif font-bold text-romantic-charcoal italic text-center">
        ✨ Only Tussu & Me know the true meaning! 🔒
      </div>
    </div>
  );
};

export default InsideJokes;
