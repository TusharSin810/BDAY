import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { config } from '../data/config';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="py-20 px-4 bg-romantic-blush/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-romantic-charcoal mb-4">Our Memories</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 p-8">
          {config.gallery.map((item, index) => {
            // Random rotation between -6 and +6 degrees
            const rotation = index % 2 === 0 ? Math.random() * -6 : Math.random() * 6;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10, rotate: 0 }}
                style={{ rotate: `${rotation}deg` }}
                onClick={() => setSelectedPhoto(item)}
                className="bg-white p-3 pb-12 rounded shadow-lg cursor-pointer transform transition-transform"
              >
                <img 
                  src={item.image} 
                  alt={item.caption} 
                  className="w-48 h-48 md:w-64 md:h-64 object-cover"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80'; }} 
                />
                <p className="absolute bottom-4 left-0 right-0 text-center font-handwritten text-xl text-romantic-charcoal">
                  {item.caption}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <button 
                className="absolute top-6 right-6 text-white hover:text-romantic-gold transition"
                onClick={() => setSelectedPhoto(null)}
              >
                <X size={32} />
              </button>
              
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white p-4 pb-16 rounded-xl max-w-3xl w-full relative"
                onClick={e => e.stopPropagation()}
              >
                <img 
                  src={selectedPhoto.image} 
                  alt={selectedPhoto.caption} 
                  className="w-full h-auto max-h-[70vh] object-contain rounded"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&q=80'; }} 
                />
                <p className="absolute bottom-6 left-0 right-0 text-center font-handwritten text-3xl text-romantic-charcoal">
                  {selectedPhoto.caption}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGallery;
