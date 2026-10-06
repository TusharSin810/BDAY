import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../data/config';

const HisSafePlaces = () => {
  const { safePlaces } = config;

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-romantic-gold/5 blur-3xl"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-romantic-charcoal font-bold mb-4">Your Safe Places</h2>
          <p className="max-w-2xl mx-auto font-sans text-xl text-romantic-charcoal font-bold leading-relaxed">
            {safePlaces.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-romantic-cream shadow-xl mb-4">
              <img src={safePlaces.familyPhoto} alt="Family" className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80'; }} />
            </div>
            <h3 className="font-serif text-3xl text-romantic-charcoal font-bold">Family</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:-mt-12"
          >
            <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-romantic-cream shadow-xl mb-4">
              <img src={safePlaces.usPhoto} alt="Us" className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80'; }} />
            </div>
            <h3 className="font-serif text-3xl text-romantic-rose font-bold">Us ❤️</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-romantic-cream shadow-xl mb-4">
              <img src={safePlaces.friendsPhoto} alt="Friends" className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1529156069898-49953eb1b5ae?auto=format&fit=crop&q=80'; }} />
            </div>
            <h3 className="font-serif text-3xl text-romantic-charcoal font-bold">Friends</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HisSafePlaces;
