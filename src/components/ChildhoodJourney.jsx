import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../data/config';

const ChildhoodJourney = () => {
  return (
    <section className="py-20 px-4 bg-romantic-blush/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-romantic-charcoal font-bold mb-3">From Then to Now</h2>
          <p className="font-handwritten text-3xl md:text-4xl text-romantic-charcoal font-bold drop-shadow-sm">
            Watching you grow into the man I love ❤️
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {config.childhood.photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-4 pb-12 rounded-2xl shadow-xl relative transform border-2 border-romantic-gold/30"
              style={{ rotate: index % 2 === 0 ? '-2deg' : '3deg' }}
            >
              <img 
                src={photo.image} 
                alt={`Childhood ${photo.year}`}
                className="w-full h-64 md:h-72 object-cover mb-4 rounded-xl"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80';
                }}
              />
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <p className="font-handwritten text-2xl md:text-3xl text-romantic-charcoal font-bold">{photo.caption}</p>
                <p className="text-base font-serif font-bold text-romantic-rose uppercase tracking-widest">{photo.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChildhoodJourney;
