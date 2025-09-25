import React from 'react';
import { Question, Answer } from '../types';

interface QuizPageProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: Answer) => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ question, questionNumber, totalQuestions, onAnswer }) => {
  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto p-8 animate-fade-in">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2 font-sans text-slate-600">
          <span>Question {questionNumber} of {totalQuestions} 🎶</span>
        </div>
        <div className="w-full bg-white/50 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-pink-400 to-purple-400 h-2.5 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center animate-text-focus-in">
          {question.question}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => onAnswer(answer)}
              className="font-sans text-slate-700 bg-white/70 backdrop-blur-sm p-5 rounded-lg shadow-md hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-left flex items-center space-x-4 animate-slide-in-bottom"
              style={{ animationDelay: `${0.5 + index * 0.15}s` }}
            >
              <span className="text-2xl">{answer.icon}</span>
              <span>{answer.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};