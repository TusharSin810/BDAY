import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../data/config';

const Timeline = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-romantic-cream overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-romantic-charcoal mb-4">Our Story</h2>
        </motion.div>

        <div className="relative mt-12 md:mt-32">
          {/* Vertical line for mobile, horizontal for desktop */}
          <div className="absolute left-8 md:left-0 md:top-1/2 md:-translate-y-1/2 bottom-0 md:bottom-auto w-1 md:w-full h-full md:h-1 bg-romantic-gold/30 rounded"></div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-4 justify-between relative z-10">
            {config.timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start md:items-center flex-col relative pl-20 md:pl-0 flex-1"
              >
                {/* Timeline Node */}
                <div className="absolute left-[1.35rem] md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-romantic-gold border-4 border-romantic-cream z-20 md:top-1/2 md:-translate-y-1/2 mt-1 md:mt-0"></div>
                
                {/* Timeline Card */}
                <div className={`glass-panel p-6 rounded-xl w-full max-w-xs mx-auto ${index % 2 === 0 ? 'md:-mt-52' : 'md:mt-52'}`}>
                  <span className="text-sm font-bold text-romantic-gold uppercase tracking-wider">{event.date}</span>
                  <h3 className="font-serif text-xl mt-2 mb-2 text-romantic-charcoal">{event.title}</h3>
                  <p className="text-sm text-romantic-charcoal/80 mb-4">{event.description}</p>
                  <img src={event.photo} alt={event.title} className="w-full h-32 object-cover rounded-lg" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80'; }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
