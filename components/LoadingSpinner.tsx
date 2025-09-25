import React from 'react';

const loadingMessages = [
    "Strumming a sparkly guitar for your results... 🎸✨",
    "Finding the perfect, glittery lyric... ✍️💖",
    "Riding a unicorn through the eras... 🦄",
    "Writing your name in a blank space (with a heart)... ❤️",
    "Remembering it all too well (and adding some sparkle)... 🧣✨",
];

export const LoadingSpinner: React.FC = () => {
    const [message, setMessage] = React.useState(loadingMessages[0]);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setMessage(prevMessage => {
                const currentIndex = loadingMessages.indexOf(prevMessage);
                const nextIndex = (currentIndex + 1) % loadingMessages.length;
                return loadingMessages[nextIndex];
            });
        }, 2500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center text-center p-8 animate-fade-in">
            <div className="w-16 h-16 border-4 border-fuchsia-200 border-t-fuchsia-500 rounded-full animate-spin mb-6"></div>
            <h2 className="font-serif text-3xl font-bold text-slate-700 mb-2">Crafting your story... 🎀</h2>
            <p key={message} className="font-sans text-slate-600 animate-text-focus-in">{message}</p>
        </div>
    );
};