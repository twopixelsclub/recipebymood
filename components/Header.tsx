
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="w-full max-w-4xl mx-auto flex justify-center items-center pt-10 pb-0">
            <img 
                src={`${import.meta.env.BASE_URL}NeeraFoodlab_Logo.svg`} 
                alt="Neera Food Lab" 
                className="h-10 md:h-12 object-contain"
            />
        </header>
    );
};

export default Header;
