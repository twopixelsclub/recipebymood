
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
    // 9:16 aspect thumbnail - use maxres or hq to approach vertical crop when available
    const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : '';

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="bg-white border border-rose-100 rounded-2xl overflow-hidden flex flex-col text-left">
            <div className="w-full bg-rose-50 flex items-center justify-center" style={{ aspectRatio: '9 / 16' }}>
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
            <div className="p-5 flex flex-col flex-grow gap-2">
                <h4 className="text-black text-[20px] font-semibold leading-[23px] tracking-[-0.8px]">{recipe.name}</h4>
                <p className="text-black text-[14px] font-medium leading-[130%] tracking-[-0.56px]">{recipe.summary}</p>
                <a
                    href={recipe.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch recipe for ${recipe.name} on YouTube`}
                    className="mt-2 w-full max-w-[540px] text-center text-white py-2 px-4 rounded-lg border border-[#FF0060] bg-[#FF0060] hover:bg-[#C60B51] focus:outline-none focus:ring-2 focus:ring-[#FF0060]"
                >
                    Watch recipe
                </a>
            </div>
        </div>
    );
};

export default RecipeCard;
