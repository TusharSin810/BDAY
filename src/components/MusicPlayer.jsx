import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { config } from '../data/config';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  
  // Use the first song from soundtrack as default global
  const track = config.soundtrack[0];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src={track.file} loop />
      <motion.div 
        className="glass-panel rounded-full p-2 flex items-center gap-3 shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 bg-romantic-gold rounded-full flex items-center justify-center text-white hover:bg-opacity-80 transition"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
        </button>
        <div className="hidden md:block">
          <p className="text-xs font-semibold text-romantic-charcoal">{track.title}</p>
          <p className="text-[10px] text-gray-500">{track.artist}</p>
        </div>
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 text-romantic-charcoal hover:text-romantic-gold transition"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </motion.div>
    </div>
  );
};

export default MusicPlayer;
