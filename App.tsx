
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MoodSelector from './components/MoodSelector';
import RecipeList from './components/RecipeList';
import type { Mood } from './types';

const App: React.FC = () => {
    const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
    const [view, setView] = useState<'mood' | 'recipes'>('mood');

    useEffect(() => {
        if (selectedMood) {
            setView('recipes');
        } else {
            setView('mood');
        }
    }, [selectedMood]);

    const handleSelectMood = (mood: Mood) => {
        setSelectedMood(mood);
    };

    const handleGoBack = () => {
        setSelectedMood(null);
    };

    return (
        <div className="min-h-screen text-[#1e1e1e] flex flex-col items-center px-4 sm:px-6 md:px-8">
            <Header />
            <main className="w-full max-w-4xl mx-auto flex-grow flex flex-col items-center mt-8">
                <div className={`w-full transition-opacity duration-500 ${view === 'mood' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                    {view === 'mood' && <MoodSelector onSelectMood={handleSelectMood} />}
                </div>
                <div className={`w-full transition-opacity duration-500 ${view === 'recipes' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                     {view === 'recipes' && selectedMood && <RecipeList mood={selectedMood} onGoBack={handleGoBack} />}
                </div>
            </main>
        </div>
    );
};

export default App;
