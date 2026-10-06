import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../data/config';

const AboutHim = () => {
  const { aboutHim } = config;

  return (
    <section className="min-h-screen py-20 px-4 md:px-20 flex flex-col items-center justify-center bg-romantic-cream relative">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-romantic-gold/20 -rotate-6 rounded-2xl transform"></div>
          <img 
            src={aboutHim.photo} 
            alt={aboutHim.name}
            className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-xl"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80';
            }}
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-romantic-charcoal">
            Meet <span className="text-romantic-gold font-handwritten text-5xl ml-2">{aboutHim.name}</span>
          </h2>
          
          <div className="space-y-4 text-romantic-charcoal text-xl font-medium">
            <p><strong className="text-romantic-charcoal font-bold">Nickname:</strong> {aboutHim.nickname}</p>
            <p><strong className="text-romantic-charcoal font-bold">Favourite Food:</strong> {aboutHim.favouriteFood}</p>
            <p><strong className="text-romantic-charcoal font-bold">Favourite Song:</strong> {aboutHim.favouriteSong}</p>
            <p><strong className="text-romantic-charcoal font-bold">Favourite Colour:</strong> {aboutHim.favouriteColour}</p>
            <p><strong className="text-romantic-charcoal font-bold">Favourite Place:</strong> {aboutHim.favouritePlace}</p>
            <p><strong className="text-romantic-charcoal font-bold">Known For:</strong> {aboutHim.knownFor}</p>
          </div>

          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-handwritten text-3xl md:text-4xl text-romantic-rose font-bold pt-6 drop-shadow-sm leading-relaxed"
          >
            And somehow, I got lucky enough to call you mine. ❤️
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHim;
