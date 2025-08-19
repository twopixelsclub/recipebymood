
import { useMemo } from 'react';
import { allRecipes } from '../data/recipes';
import type { Mood, Recipe } from '../types';

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

export const useRecipes = () => {
    const recipes = useMemo(() => allRecipes, []);

    const getRecipesByMood = (mood: Mood): Recipe[] => {
        const moodTag = `${mood.name} ${mood.emoji}`;
        
        let filteredRecipes: Recipe[];

        if (mood.name === 'Surprise') {
            // Surprise mood picks from all recipes
            filteredRecipes = [...recipes];
        } else {
             filteredRecipes = recipes.filter(recipe => 
                recipe.tags.some(tag => tag.trim() === moodTag)
            );
        }

        if (filteredRecipes.length === 0 && mood.name !== 'Surprise') {
            // Fallback to surprise if mood has no recipes
            filteredRecipes = recipes.filter(recipe => 
                recipe.tags.some(tag => tag.includes('Surprise'))
            );
        }

        const shuffled = shuffleArray(filteredRecipes);
        return shuffled.slice(0, 20);
    };

    return { getRecipesByMood };
};
