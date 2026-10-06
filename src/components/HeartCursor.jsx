import React, { useEffect, useState } from 'react';

const HeartCursor = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    let lastTime = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 50) return; // limit spawn rate
      lastTime = now;

      const heartSymbols = ['❤️', '💖', '💕', '✨', '🌸', '💘'];
      const randomSymbol = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
      
      const newParticle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        symbol: randomSymbol,
        size: Math.random() * 12 + 14,
        rotation: Math.random() * 40 - 20,
      };

      setParticles((prev) => [...prev.slice(-20), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const removeParticle = (id) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          onAnimationEnd={() => removeParticle(p.id)}
          className="absolute inline-block animate-float-heart select-none"
          style={{
            left: `${p.x - 10}px`,
            top: `${p.y - 10}px`,
            fontSize: `${p.size}px`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
};

export default HeartCursor;
