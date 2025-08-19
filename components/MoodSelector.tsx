
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
    { name: 'Sweet', emoji: '🧁' },
    { name: 'Festive', emoji: '🎉' },
    { name: 'Surprise', emoji: '🎲' },
];

const MoodButton: React.FC<{ mood: Mood, onClick: () => void }> = ({ mood, onClick }) => (
    <button
        onClick={onClick}
        aria-label={`Find recipes for a ${mood.name} mood`}
        className="w-full text-lg font-semibold bg-white border border-gray-200 rounded-xl py-3 px-6 text-center transition-all duration-300 hover:shadow-md hover:border-[#FF0060] focus:outline-none focus:ring-2 focus:ring-[#FF0060] focus:ring-offset-2"
    >
        {mood.name} {mood.emoji}
    </button>
);

const MoodSelector: React.FC<MoodSelectorProps> = ({ onSelectMood }) => {
    return (
        <div className="w-full max-w-md mx-auto flex flex-col items-center text-center p-4">
            <div className="bg-white/50 rounded-2xl p-6 w-full">
                <p className="text-lg">Namaste from Neera's Food Lab 🙏</p>
                <h2 className="text-3xl sm:text-4xl font-bold my-2">Which Flavor Matches Your Mood Today?</h2>
                <p className="text-gray-600 mb-8">Let your feelings decide! Pick your mood and unlock a recipe surprise.</p>
            </div>

            <div className="text-6xl my-8 animate-bounce">😊</div>
            
            <div className="w-full space-y-4">
                {moods.map((mood) => (
                    <MoodButton key={mood.name} mood={mood} onClick={() => onSelectMood(mood)} />
                ))}
            </div>
        </div>
    );
};

export default MoodSelector;
