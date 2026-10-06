import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, PartyPopper } from 'lucide-react';
import { config } from '../data/config';

const PersonalityCards = () => {
  const [openCardId, setOpenCardId] = useState(null);

  const toggleCard = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <section className="py-24 px-4 md:px-20 bg-gradient-to-b from-romantic-cream via-romantic-blush/20 to-romantic-cream relative overflow-hidden">
      {/* Decorative floating background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-romantic-rose/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-romantic-gold/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-romantic-rose text-white text-base font-bold shadow-lg mb-3 border-2 border-white">
            <PartyPopper size={18} className="animate-bounce" /> Tap each envelope to open 💌
          </div>
          <h2 className="text-4xl md:text-6xl font-handwritten text-romantic-charcoal mb-2">
            Things That Make You,
          </h2>
          <h2 className="text-5xl md:text-6xl font-serif text-romantic-rose italic">
            You ✨
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {config.personality.traits.map((trait, index) => {
            const isOpen = openCardId === trait.id;

            return (
              <motion.div
                key={trait.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                onClick={() => toggleCard(trait.id)}
                className="cursor-pointer relative min-h-[220px] flex flex-col justify-between items-center text-center p-6 rounded-3xl bg-white/90 shadow-xl border-2 border-romantic-gold/30 hover:border-romantic-rose/50 transition-all group overflow-hidden"
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Bursting Particles Effect when Opened */}
                <AnimatePresence>
                  {isOpen && (
                    <>
                      <motion.div
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: [1, 1.6, 2], opacity: [1, 0.8, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0 pointer-events-none flex items-center justify-center"
                      >
                        <span className="text-4xl">🎉</span>
                      </motion.div>
                      
                      {/* Floating hearts bursting out */}
                      <motion.span
                        initial={{ y: 0, opacity: 1, x: -10 }}
                        animate={{ y: -60, opacity: 0, x: -30 }}
                        transition={{ duration: 0.8 }}
                        className="absolute text-2xl pointer-events-none top-1/2 left-1/4"
                      >
                        ❤️
                      </motion.span>
                      <motion.span
                        initial={{ y: 0, opacity: 1, x: 10 }}
                        animate={{ y: -60, opacity: 0, x: 30 }}
                        transition={{ duration: 0.8 }}
                        className="absolute text-2xl pointer-events-none top-1/2 right-1/4"
                      >
                        💖
                      </motion.span>
                    </>
                  )}
                </AnimatePresence>

                {/* Envelope Front / Closed State */}
                {!isOpen ? (
                  <div className="w-full h-full flex flex-col items-center justify-between py-2">
                    <div className="w-12 h-12 bg-romantic-rose/10 text-romantic-rose rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition transform">
                      <Mail size={24} />
                    </div>
                    <h3 className="font-serif text-2xl text-romantic-charcoal font-bold">{trait.title}</h3>
                    <span className="text-xs font-serif uppercase tracking-widest text-romantic-gold pt-4 flex items-center gap-1 group-hover:text-romantic-rose transition">
                      <Sparkles size={12} /> Open Note
                    </span>
                  </div>
                ) : (
                  /* Opened Envelope Message State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full h-full flex flex-col justify-between items-center bg-gradient-to-br from-romantic-rose/15 to-romantic-cream/80 p-4 rounded-2xl border border-romantic-rose/30"
                  >
                    <div className="flex justify-between items-center w-full text-romantic-rose text-xs font-semibold uppercase tracking-wider mb-2">
                      <span>{trait.title}</span>
                      <Heart size={14} className="fill-current animate-bounce" />
                    </div>
                    <p className="font-handwritten text-2xl md:text-3xl text-romantic-charcoal leading-snug my-auto">
                      "{trait.message}"
                    </p>
                    <span className="text-[10px] text-gray-400 font-serif pt-2">(Click to fold back)</span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PersonalityCards;
