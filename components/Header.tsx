
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="w-full max-w-4xl mx-auto flex justify-center items-center py-4">
            <h1 className="text-3xl font-bold tracking-tighter">
                <span className="font-geist-sans">neera</span>
                <span className="text-[#FF0060] font-geist-sans">foodlab</span>
            </h1>
        </header>
    );
};

export default Header;
