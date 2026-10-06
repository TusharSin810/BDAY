import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../data/config';

const OneMoment = () => {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={config.oneMoment.photo} 
          alt="One Moment" 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80'; }} 
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center px-4 max-w-4xl"
      >
        <p className="text-white/80 uppercase tracking-[0.2em] mb-8 font-sans text-sm">If I could keep one moment forever</p>
        <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
          "{config.oneMoment.text}"
        </h2>
      </motion.div>
    </section>
  );
};

export default OneMoment;
