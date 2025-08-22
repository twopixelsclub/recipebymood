
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
                <div className="max-w-4xl mx-auto flex flex-col items-center px-4 text-center">
                    <button onClick={onGoBack} className="flex items-center gap-2 text-[#1e1e1e] mb-2 hover:opacity-80">
                        <img src="/recipebymood/ArrowLeft.png" alt="Go back" className="h-4 w-4" />
                        <span className="text-sm">Go back</span>
                    </button>
                    <h3 className="text-[28px] font-semibold tracking-[-1.12px]">Yay! You’re in a {mood.name} Mood! {mood.emoji}</h3>
                    <p className="text-black italic text-[16px] font-normal tracking-[-0.32px] mt-1">Here are some handpicked recipes just for you—let's cook up something special together!</p>
                </div>
            </div>


            {recipes.length > 0 ? (
                <div className="w-full max-w-2xl flex flex-col gap-4 mt-4">
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
