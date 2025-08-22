
import React from 'react';
import type { Mood } from '../types';

interface MoodSelectorProps {
    onSelectMood: (mood: Mood) => void;
}

const moods: Mood[] = [
    { name: 'Happy', emoji: '😊' },
    { name: 'Healthy', emoji: '🥗' },
    { name: 'Adventure', emoji: '⭐' },
    { name: 'Lazy', emoji: '😴' },
    { name: 'Sweet', emoji: '🍬' },
    { name: 'Festive', emoji: '🎉' },
];

const MoodCard: React.FC<{ mood: Mood; onClick: () => void; }> = ({ mood, onClick }) => (
    <button
        onClick={onClick}
        className="flex flex-col items-center justify-center gap-3 bg-white border border-rose-100 rounded-2xl py-6 px-8 shadow-sm hover:shadow-md transition-all duration-200 hover:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
        aria-label={`Find recipes for a ${mood.name} mood`}
    >
        <div className="text-4xl" aria-hidden>
            {mood.emoji}
        </div>
        <div className="text-rose-800 font-semibold">
            {mood.name}
        </div>
    </button>
);

const MoodSelector: React.FC<MoodSelectorProps> = ({ onSelectMood }) => {
    return (
        <div className="w-full mx-auto flex flex-col items-center text-center">
            <div className="w-full flex flex-col justify-center items-center gap-3 self-stretch bg-rose-50 py-6 px-4">
                <p className="text-black/70 text-center text-[16px] font-normal tracking-[-0.32px]">Namaste from Neera’s Food Lab 🙏🏻</p>
                <h2 className="text-black text-center text-[28px] font-semibold tracking-[-1.12px]">How are you feeling today?</h2>
                <p className="text-black italic text-[16px] font-normal tracking-[-0.32px]">Pick your mood and unlock a recipe surprise. Let your feelings decide!</p>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-3xl">
                {moods.map((mood) => (
                    <MoodCard key={mood.name} mood={mood} onClick={() => onSelectMood(mood)} />
                ))}
            </div>

            <div className="w-full flex justify-center mt-5 pb-6">
                <button
                    onClick={() => onSelectMood({ name: 'Surprise', emoji: '🎲' })}
                    className="flex flex-col items-center justify-center gap-3 bg-white border border-rose-100 rounded-2xl py-6 px-12 shadow-sm hover:shadow-md transition-all duration-200 hover:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
                    aria-label="Find recipes with a Surprise mood"
                >
                    <div className="text-4xl" aria-hidden>🎲</div>
                    <div className="text-rose-800 font-semibold">Surprise</div>
                </button>
            </div>
        </div>
    );
};

export default MoodSelector;
