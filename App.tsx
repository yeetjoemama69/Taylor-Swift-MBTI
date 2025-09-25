import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { QuizPage } from './components/QuizPage';
import { ResultsPage } from './components/ResultsPage';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Intro } from './components/Intro';
import { QUIZ_QUESTIONS, SONG_MAPPING } from './constants';
import { PersonalityScores, PersonalityType, SongResult, PersonalityDimension, Answer } from './types';
import { generateAiDescription } from './services/geminiService';

type GameState = 'intro' | 'start' | 'quiz' | 'loading' | 'results';

const INITIAL_SCORES: PersonalityScores = {
  I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
};

function App() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<PersonalityScores>(INITIAL_SCORES);
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<SongResult | null>(null);
  const [aiDescription, setAiDescription] = useState<string>('');

  useEffect(() => {
    if (gameState === 'intro') {
      const timer = setTimeout(() => {
        setGameState('start');
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [gameState]);

  const calculateResult = useCallback(async (finalScores: PersonalityScores, finalAnswers: Answer[]) => {
    setGameState('loading');
    
    const iVsE = finalScores.I >= finalScores.E ? 'I' : 'E';
    const sVsN = finalScores.S >= finalScores.N ? 'S' : 'N';
    const tVsF = finalScores.T >= finalScores.F ? 'T' : 'F';
    const jVsP = finalScores.J >= finalScores.P ? 'J' : 'P';

    const personalityType = `${iVsE}${sVsN}${tVsF}${jVsP}` as PersonalityType;
    const songOptions = SONG_MAPPING[personalityType];
    const songData = songOptions[Math.floor(Math.random() * songOptions.length)];


    const generatedDescription = await generateAiDescription(songData, finalAnswers);
    setAiDescription(generatedDescription);

    setResult(songData);
    setGameState('results');
  }, []);

  const handleAnswerSelect = useCallback((answer: Answer) => {
    const answerScores = answer.scores;
    const newScores = { ...scores };
    for (const key in answerScores) {
      const dim = key as PersonalityDimension;
      newScores[dim] += answerScores[dim] || 0;
    }
    setScores(newScores);

    const newAnswers = [...userAnswers, answer];
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newScores, newAnswers);
    }
  }, [scores, currentQuestionIndex, calculateResult, userAnswers]);
  
  const handleRestart = () => {
    setGameState('start');
    setCurrentQuestionIndex(0);
    setScores(INITIAL_SCORES);
    setUserAnswers([]);
    setResult(null);
    setAiDescription('');
  };

  const renderContent = () => {
    switch (gameState) {
      case 'intro':
        return <Intro />;
      case 'quiz':
        return (
          <QuizPage
            key={currentQuestionIndex}
            question={QUIZ_QUESTIONS[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={QUIZ_QUESTIONS.length}
            onAnswer={handleAnswerSelect}
          />
        );
      case 'loading':
        return <LoadingSpinner />;
      case 'results':
        return result && <ResultsPage result={result} aiDescription={aiDescription} onRestart={handleRestart} />;
      case 'start':
      default:
        return <LandingPage onStart={() => setGameState('quiz')} />;
    }
  };

  return (
    <main className="font-sans bg-gradient-to-br from-pink-200 via-fuchsia-100 to-cyan-200 min-h-screen w-full flex items-center justify-center transition-all duration-500">
      {renderContent()}
    </main>
  );
}

export default App;