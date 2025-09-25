import React from 'react';
import { SongResult } from '../types';

interface ResultsPageProps {
  result: SongResult;
  aiDescription: string;
  onRestart: () => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ result, aiDescription, onRestart }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-8 animate-fade-in-slow">
      <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden md:flex">
        <img
          src={result.imageUrl}
          alt={`Album art for ${result.album}`}
          className="w-full md:w-1/2 h-auto object-cover"
        />
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div>
            <p className="font-sans text-sm text-slate-500 uppercase tracking-wider animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>Your Era Is... 💫</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-800 mt-1 mb-2 animate-slide-in-bottom" style={{ animationDelay: '0.5s' }}>
              {result.song}
            </h2>
            <p className="font-sans text-md text-slate-600 mb-6 animate-slide-in-bottom" style={{ animationDelay: '0.7s' }}>from the album <span className="font-semibold">{result.album}</span></p>

            <div className="font-sans text-slate-700 leading-relaxed text-left space-y-4 animate-slide-in-bottom" style={{ animationDelay: '1s' }}>
              <p>{aiDescription}</p>
            </div>
          </div>

          <button
            onClick={onRestart}
            className="mt-8 w-full font-sans font-bold text-md bg-white text-slate-800 px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 animate-slide-in-bottom"
            style={{ animationDelay: '1.3s' }}
          >
            Find Another Era 💖
          </button>
        </div>
      </div>
    </div>
  );
};