import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, HelpCircle, PartyPopper, RefreshCw, Heart } from 'lucide-react';
import { config } from '../data/config';

const Quiz = () => {
  const [answered, setAnswered] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const quiz = config.quiz[0];

  const handleSelectOption = (optIndex) => {
    setSelectedOpt(optIndex);
    setAnswered(true);
  };

  const handleReset = (e) => {
    e?.stopPropagation();
    setAnswered(false);
    setSelectedOpt(null);
  };

  return (
    <div className="h-full flex flex-col justify-between">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 text-left"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-romantic-gold text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
          <HelpCircle size={14} /> Interactive Challenge
        </div>
        <h2 className="text-2xl md:text-3xl font-serif text-romantic-charcoal font-bold leading-snug">
          How Well Do You Know Yourself? 🧠
        </h2>
        <p className="text-romantic-rose font-handwritten text-xl font-bold italic mt-1">
          A quick dramatic question for the birthday boy!
        </p>
      </motion.div>

      {/* Dramatic Quiz Card */}
      <div className="my-auto relative">
        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, rotate: -2 }}
              className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border-2 border-romantic-gold/40 shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              {/* Question Header Badge */}
              <div className="mb-4">
                <span className="text-xs font-serif font-bold text-romantic-rose uppercase tracking-widest bg-romantic-rose/10 px-3 py-1 rounded-full inline-block">
                  Question #01 🎯
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-romantic-charcoal font-bold mt-3 leading-snug">
                  "{quiz.question}"
                </h3>
              </div>

              {/* Dramatic Options */}
              <div className="flex flex-col gap-3 my-2">
                {quiz.options.map((opt, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.03, x: 4, rotate: i % 2 === 0 ? 1 : -1 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => handleSelectOption(i)}
                    className="w-full text-left px-5 py-3.5 rounded-2xl border-2 border-romantic-gold/30 bg-gradient-to-r from-romantic-cream/60 to-white text-romantic-charcoal font-serif text-base font-semibold hover:border-romantic-rose hover:text-romantic-rose hover:shadow-lg transition-all duration-200 flex items-center justify-between group"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-romantic-gold/20 text-romantic-gold group-hover:bg-romantic-rose group-hover:text-white font-bold flex items-center justify-center text-xs transition-colors">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span>{opt}</span>
                    </span>
                    <Sparkles size={16} className="opacity-0 group-hover:opacity-100 text-romantic-rose transition-opacity" />
                  </motion.button>
                ))}
              </div>

              <p className="text-[11px] text-romantic-charcoal/50 font-serif italic text-center mt-3">
                👉 Select an option to unlock your birthday answer!
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="answer"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-gradient-to-br from-white via-[#FFF9F2] to-[#FFF4EB] p-6 rounded-3xl border-2 border-romantic-rose shadow-2xl relative overflow-hidden flex flex-col items-center text-center"
            >
              {/* Confetti & Particle Celebration Emojis */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {['🎉', '✨', '💖', '🥳', '🚗', '🥤'].map((emoji, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ y: 80, opacity: 1, scale: 0.5 }}
                    animate={{ y: -120, opacity: 0, scale: 1.5, x: (idx % 2 === 0 ? 1 : -1) * 80 }}
                    transition={{ duration: 1.5, delay: idx * 0.1, repeat: Infinity, repeatDelay: 1 }}
                    className="absolute bottom-0 text-3xl"
                    style={{ left: `${15 + idx * 14}%` }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>

              <motion.div 
                animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.2, 1] }} 
                transition={{ duration: 0.8 }}
                className="w-14 h-14 bg-romantic-rose text-white rounded-full flex items-center justify-center shadow-lg mb-3"
              >
                <PartyPopper size={30} />
              </motion.div>

              <span className="text-xs font-serif font-bold text-romantic-rose uppercase tracking-widest bg-romantic-rose/10 px-3 py-1 rounded-full mb-2">
                Revealed! ✨
              </span>

              <h3 className="text-2xl md:text-3xl font-handwritten text-romantic-rose font-bold mb-2 leading-relaxed">
                {quiz.answer}
              </h3>

              <p className="text-sm font-serif text-romantic-charcoal/80 italic mb-5">
                You chose "{quiz.options[selectedOpt]}" ... but the truth is you are my absolute favourite person in the world! ❤️
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                className="px-5 py-2.5 bg-romantic-rose text-white text-xs font-serif font-bold rounded-full shadow-md hover:shadow-lg transition flex items-center gap-2"
              >
                <RefreshCw size={14} /> Try Quiz Again 💫
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 pt-4 border-t border-romantic-rose/20 text-xs font-serif text-romantic-rose italic text-center flex items-center justify-center gap-1">
        <Heart size={12} className="fill-current" /> Made specially for Tussu
      </div>
    </div>
  );
};

export default Quiz;
