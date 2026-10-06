import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Play, Pause, X, Youtube, Heart } from 'lucide-react';
import { config } from '../data/config';

const Soundtrack = () => {
  const [activeSongIndex, setActiveSongIndex] = useState(null);
  const [kissBurstIndex, setKissBurstIndex] = useState(null);

  const handleTogglePlay = (index) => {
    if (activeSongIndex === index) {
      setActiveSongIndex(null);
    } else {
      setActiveSongIndex(index);
      setKissBurstIndex(index);
      setTimeout(() => setKissBurstIndex(null), 1200);
    }
  };

  const kissEmojis = ['😘', '💋', '😚', '💖', '🥰', '💕', '✨', '💋'];

  return (
    <section className="py-20 px-4 bg-romantic-charcoal text-romantic-cream relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Music className="w-12 h-12 mx-auto text-romantic-gold mb-4 opacity-70 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-serif mb-3 text-white">His Soundtrack 🎵</h2>
          <p className="text-romantic-cream/70 font-sans text-sm md:text-base">
            Click play to watch & listen to his favorite tracks right here on the page
          </p>
        </motion.div>

        <div className="space-y-6">
          {config.soundtrack.map((song, index) => {
            const isPlaying = activeSongIndex === index;
            const isKissing = kissBurstIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative bg-white/5 border rounded-2xl p-6 transition-all shadow-xl hover:bg-white/10 ${isPlaying ? 'border-romantic-gold/60 bg-white/10' : 'border-white/10'}`}
              >
                {/* Pucchi / Kiss Emoji Burst Animation */}
                <AnimatePresence>
                  {isKissing && (
                    <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden rounded-2xl flex items-center justify-center">
                      {kissEmojis.map((emoji, i) => (
                        <motion.span
                          key={i}
                          initial={{ 
                            scale: 0, 
                            opacity: 1, 
                            x: 0, 
                            y: 0 
                          }}
                          animate={{ 
                            scale: [0.8, 1.8, 1.4], 
                            opacity: [1, 0.9, 0],
                            x: (i % 2 === 0 ? 1 : -1) * (Math.random() * 120 + 30),
                            y: -(Math.random() * 140 + 40)
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.1, delay: i * 0.08, ease: "easeOut" }}
                          className="absolute text-4xl md:text-5xl filter drop-shadow-lg select-none"
                        >
                          {emoji}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                  <div className="relative w-28 h-28 flex-shrink-0 group rounded-xl overflow-hidden shadow-md">
                    <img 
                      src={song.cover} 
                      alt={song.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80'; }}
                    />
                    <button
                      onClick={() => handleTogglePlay(index)}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center text-white opacity-90 hover:opacity-100 transition"
                      title={isPlaying ? "Close Video" : "Play Video"}
                    >
                      {isPlaying ? (
                        <div className="w-12 h-12 bg-romantic-rose rounded-full flex items-center justify-center shadow-lg">
                          <Pause size={24} className="text-white" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 bg-romantic-gold rounded-full flex items-center justify-center shadow-lg pl-1">
                          <Play size={24} className="text-romantic-charcoal" />
                        </div>
                      )}
                    </button>
                  </div>

                  <div className="text-center sm:text-left flex-1 space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-serif text-white font-bold">{song.title}</h3>
                        <p className="text-romantic-gold font-semibold text-sm">{song.artist}</p>
                      </div>

                      <div className="flex items-center gap-2 mx-auto sm:mx-0">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleTogglePlay(index)}
                          className={`px-5 py-2.5 rounded-full font-bold text-xs transition flex items-center gap-2 shadow ${isPlaying ? 'bg-romantic-rose text-white' : 'bg-romantic-gold text-romantic-charcoal hover:bg-white'}`}
                        >
                          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                          <span>{isPlaying ? "Close Player" : "▶ Play Song 😘"}</span>
                        </motion.button>
                        
                        {song.directUrl && (
                          <a
                            href={song.directUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2.5 bg-red-600/80 text-white hover:bg-red-600 font-semibold text-xs rounded-full transition flex items-center gap-1 shadow"
                            title="Open link directly on YouTube"
                          >
                            <Youtube size={14} /> YouTube ↗
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="font-handwritten text-xl text-romantic-cream/90 pt-2">"{song.reason}"</p>
                  </div>
                </div>

                {/* Embedded Video Player */}
                <AnimatePresence>
                  {isPlaying && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-4 border-t border-white/10 relative z-10"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-romantic-gold flex items-center gap-2">
                          <Youtube size={16} className="text-red-500" /> Playing: {song.title} ({song.artist}) <Heart size={14} className="text-romantic-rose fill-romantic-rose animate-bounce inline" />
                        </span>
                        
                        <button 
                          onClick={() => setActiveSongIndex(null)}
                          className="text-xs text-white/60 hover:text-white flex items-center gap-1"
                        >
                          <X size={14} /> Close
                        </button>
                      </div>

                      {song.youtubeEmbedId ? (
                        <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black border border-white/20">
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${song.youtubeEmbedId}?autoplay=1&rel=0`}
                            title={song.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full border-0"
                          ></iframe>
                        </div>
                      ) : null}

                      <div className="text-center mt-3">
                        <a
                          href={song.directUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-romantic-gold hover:underline flex items-center justify-center gap-1"
                        >
                          If video is blocked on your browser, click here to watch directly on YouTube ↗
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Soundtrack;
