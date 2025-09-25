import React from 'react';

export const Intro: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <div
        className="text-[200px] md:text-[300px] text-yellow-200 animate-intro-sparkle"
      >
        ✨
      </div>
      <h1
        className="absolute font-serif font-bold text-slate-800 animate-intro-text text-center"
        style={{ fontSize: 'clamp(3rem, 10vw, 5rem)' }}
      >
        The Eras of You
      </h1>
    </div>
  );
};