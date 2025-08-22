
import React, { useState } from 'react';

const Header: React.FC = () => {
    return (
        <header className="w-full max-w-4xl mx-auto flex justify-center items-center pt-10 pb-0">
            {(() => {
                const candidateSources = [
                    `${import.meta.env.BASE_URL}NeeraFoodlab_Logo.svg`,
                    `/recipebymood/NeeraFoodlab_Logo.svg`,
                    `/NeeraFoodlab_Logo.svg`,
                ];
                const [srcIndex, setSrcIndex] = useState(0);
                const handleError = () => {
                    if (srcIndex < candidateSources.length - 1) {
                        setSrcIndex(srcIndex + 1);
                    }
                };
                return (
                    <img
                        src={candidateSources[srcIndex]}
                        onError={handleError}
                        alt="Neera Food Lab"
                        className="h-10 md:h-12 object-contain"
                        crossOrigin="anonymous"
                    />
                );
            })()}
        </header>
    );
};

export default Header;
