
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
            <button onClick={onGoBack} className="self-start text-[#FF0060] font-semibold mb-6 hover:underline">
                &larr; Go back
            </button>
            <h2 className="text-3xl sm:text-4xl font-bold">Which Flavor Matches Your Mood Today?</h2>
            <p className="text-gray-600 mt-2 mb-8">Let your feelings decide! Pick your mood and unlock a recipe surprise.</p>
            
            <div className="text-6xl mb-4">😊</div>

            <h3 className="text-2xl font-bold mb-2">
                Yay! You’re in a {mood.name} Mood! {mood.emoji}
            </h3>
            <p className="max-w-xl text-gray-700 mb-12">
                Here are some handpicked recipes just for you—let's cook up something special together!
            </p>

            {recipes.length > 0 ? (
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
