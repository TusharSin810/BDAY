import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from './data/config';

// Import all components
import HeartCursor from './components/HeartCursor';
import IntroScreen from './components/IntroScreen';
import AboutHim from './components/AboutHim';
import ChildhoodJourney from './components/ChildhoodJourney';
import PersonalityCards from './components/PersonalityCards';
import HisSafePlaces from './components/HisSafePlaces';
import PhotoGallery from './components/PhotoGallery';
import FavouriteThings from './components/FavouriteThings';
import Soundtrack from './components/Soundtrack';
import LoveReasons from './components/LoveReasons';
import InsideJokes from './components/InsideJokes';
import Quiz from './components/Quiz';
import OneMoment from './components/OneMoment';
import LoveLetter from './components/LoveLetter';
import FinalSurprise from './components/FinalSurprise';

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-romantic-cream font-sans overflow-x-hidden selection:bg-romantic-rose selection:text-white">
      <HeartCursor />
      <AnimatePresence>
        {!entered ? (
          <IntroScreen onEnter={() => setEntered(true)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col w-full"
          >
            <AboutHim />
            <ChildhoodJourney />
            <PersonalityCards />
            <HisSafePlaces />
            <PhotoGallery />
            <FavouriteThings />
            <Soundtrack />
            <LoveReasons />
            {/* Side-by-Side: Inside Jokes & Quiz Challenge */}
            <section className="py-20 px-4 bg-gradient-to-b from-romantic-cream via-romantic-blush/15 to-romantic-cream relative overflow-hidden">
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                <div className="glass-panel p-6 md:p-8 rounded-3xl border-2 border-romantic-rose/20 shadow-xl flex flex-col justify-between relative">
                  <InsideJokes />
                </div>
                <div className="glass-panel p-6 md:p-8 rounded-3xl border-2 border-romantic-gold/30 shadow-xl flex flex-col justify-between relative">
                  <Quiz />
                </div>
              </div>
            </section>
            <OneMoment />
            <LoveLetter />
            <FinalSurprise />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
