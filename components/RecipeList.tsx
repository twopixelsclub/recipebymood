
import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import { useRecipes } from '../hooks/useRecipes';
import type { Mood, Recipe } from '../types';

interface RecipeListProps {
    mood: Mood;
    onGoBack: () => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ mood, onGoBack }) => {
    const { getRecipesByMood } = useRecipes();
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        setRecipes(getRecipesByMood(mood));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mood]);

    return (
        <div className="w-full flex flex-col items-center text-center animate-fade-in">
            <div className="w-full bg-rose-50 border-b border-rose-100 py-4">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <button onClick={onGoBack} className="flex items-center gap-2 text-[#1e1e1e] mb-2 hover:opacity-80">
                        <img src="/recipebymood/ArrowLeft.png" alt="Go back" className="h-4 w-4" />
                        <span className="text-sm">Go back</span>
                    </button>
                    <h3 className="text-xl font-semibold">Yay! You’re in a {mood.name} Mood! {mood.emoji}</h3>
                </div>
            </div>

            <p className="max-w-2xl text-[#000] italic mt-4 mb-6">
                Here are some handpicked recipes just for you—let's cook up something special together!
            </p>

            {recipes.length > 0 ? (
                <div className="w-full max-w-3xl flex flex-col gap-4">
                    {recipes.map((recipe, index) => (
                        <RecipeCard key={`${recipe.videoLink}-${index}`} recipe={recipe} />
                    ))}
                </div>
            ) : (
                <div className="text-center bg-white rounded-xl p-8 shadow-sm">
                    <p className="text-xl font-semibold">No recipes found for this mood yet.</p>
                    <p className="text-gray-600 mt-2">Please try another mood!</p>
                </div>
            )}
        </div>
    );
};

export default RecipeList;
