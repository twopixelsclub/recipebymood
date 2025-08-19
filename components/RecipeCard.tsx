
import React, { useState } from 'react';
import type { Recipe } from '../types';

interface RecipeCardProps {
    recipe: Recipe;
}

const getYouTubeVideoId = (url: string): string | null => {
    try {
        const urlObj = new URL(url);
        if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
            if (urlObj.pathname === '/watch') {
                return urlObj.searchParams.get('v');
            }
            if (urlObj.pathname.startsWith('/shorts/')) {
                return urlObj.pathname.split('/shorts/')[1];
            }
        }
        if (urlObj.hostname === 'youtu.be') {
            return urlObj.pathname.substring(1);
        }
    } catch (e) {
        console.error("Invalid URL:", url);
    }
    return null;
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const [imageError, setImageError] = useState(false);
    const videoId = getYouTubeVideoId(recipe.videoLink);
    const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : '';

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col text-left transition-transform duration-300 hover:scale-105">
            <div className="aspect-video w-full bg-gray-100 flex items-center justify-center">
                {!imageError && thumbnailUrl ? (
                    <img
                        src={thumbnailUrl}
                        alt={`Thumbnail for ${recipe.name}`}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                        loading="lazy"
                    />
                ) : (
                    <div className="text-4xl text-gray-400" role="img" aria-label="Fallback food icon">🍽️</div>
                )}
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-bold text-lg text-[#1e1e1e] leading-tight mb-2 flex-grow">{recipe.name}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{recipe.summary}</p>
                <a
                    href={recipe.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch recipe for ${recipe.name} on YouTube`}
                    className="mt-auto w-full text-center bg-[#FF0060] text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-300 hover:bg-[#D90052] focus:outline-none focus:ring-2 focus:ring-[#FF0060] focus:ring-offset-2"
                >
                    Watch recipe
                </a>
            </div>
        </div>
    );
};

export default RecipeCard;
