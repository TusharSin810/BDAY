import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../data/config';

const FinalSurprise = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="min-h-screen bg-romantic-charcoal flex flex-col items-center justify-center relative overflow-hidden py-20">
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="button"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center"
          >
            <button
              onClick={() => setRevealed(true)}
              className="px-10 py-4 bg-transparent border-2 border-romantic-gold text-romantic-gold rounded-full font-serif text-xl hover:bg-romantic-gold hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              One last thing...
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="surprise"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-center px-4 max-w-3xl flex flex-col items-center"
          >
            {/* Simple CSS Confetti placeholder effect using absolute divs */}
            <div className="absolute inset-0 pointer-events-none">
               {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ top: "-10%", left: `${Math.random() * 100}%`, opacity: 1 }}
                    animate={{ top: "110%", opacity: 0 }}
                    transition={{ duration: Math.random() * 2 + 2, ease: "linear", repeat: Infinity }}
                    className="absolute w-2 h-2 rounded-full"
                    style={{ backgroundColor: ['#d4af37', '#e8caca', '#fdfbf7'][i % 3] }}
                  />
               ))}
            </div>

            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-5xl md:text-7xl font-handwritten text-romantic-rose mb-8"
            >
              Happy Birthday, {config.boyName} ❤️
            </motion.h2>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-xl md:text-2xl font-serif text-romantic-cream/90 mb-4"
            >
              Thank you for being my favourite person.
            </motion.p>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="text-xl md:text-2xl font-serif text-romantic-cream/90 mb-4"
            >
              If I had to choose you again, I'd still choose you.
            </motion.p>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
              className="text-2xl md:text-3xl font-serif text-romantic-gold mb-16"
            >
              Every. Single. Time.
            </motion.p>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 5, duration: 2 }}
              className="mt-8 border-t border-romantic-gold/30 pt-8 w-full"
            >
              <h3 className="font-handwritten text-4xl text-romantic-rose">You + Me</h3>
              <p className="font-serif text-romantic-cream/70 mt-2">My favourite story.</p>
              <p className="font-serif text-romantic-gold mt-4 tracking-widest uppercase text-sm">To be continued...</p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FinalSurprise;
