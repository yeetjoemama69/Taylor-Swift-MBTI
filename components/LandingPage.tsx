import React from 'react';

interface LandingPageProps {
  onStart: () => void;
}

const Sparkle: React.FC<{className?: string; style?: React.CSSProperties}> = ({className, style}) => (
    <div className={`absolute text-yellow-200 text-2xl animate-sparkle ${className}`} style={style}>✨</div>
);

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-4 md:p-8 overflow-hidden">
      <Sparkle className="top-[5%] left-[5%]" style={{animationDelay: '0s'}} />
      <Sparkle className="top-[15%] right-[10%]" style={{animationDelay: '1s'}} />
      <Sparkle className="top-[50%] left-[2%]" style={{animationDelay: '3.5s'}} />
      <Sparkle className="bottom-[25%] left-[15%]" style={{animationDelay: '2s'}} />
      <Sparkle className="bottom-[10%] right-[5%]" style={{animationDelay: '3s'}} />
      <Sparkle className="top-[40%] right-[2%]" style={{animationDelay: '4.5s'}} />
      <Sparkle className="top-[80%] left-[40%]" style={{animationDelay: '4s'}} />

      <div className="z-10 bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl animate-fade-in flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">
        <div className="md:w-1/2">
            <img 
                src="https://picsum.photos/seed/unicorn-era/600/800" 
                alt="A whimsical, artistic, unicorn-themed portrait of Taylor Swift"
                className="w-full h-full object-cover animate-fade-in-slow"
            />
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center text-center p-8 md:p-12">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-slate-800 mb-2 animate-text-focus-in" style={{ animationDelay: '0.2s' }}>
            The Eras of You 💖
            </h1>
            <p className="font-sans text-lg md:text-xl text-slate-600 mb-8 animate-slide-in-bottom" style={{ animationDelay: '0.7s' }}>
            A Taylor's Version Personality Test 🦄✨
            </p>
            <button
            onClick={onStart}
            className="font-sans font-bold text-lg bg-white text-slate-800 px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 animate-slide-in-bottom"
            style={{ animationDelay: '1.2s' }}
            >
            Start the Magic ✨
            </button>
        </div>
      </div>
    </div>
  );
};