import React from 'react';

const Card = ({ children, className = '', hover = false }) => {
    const baseClasses = 'bg-black border border-gray-600 p-6 transition-all duration-200';
    const hoverClasses = hover ? 'hover:bg-gray-900 hover:border-gray-500 hover:shadow-lg' : '';

    return (
        <div className={`${baseClasses} ${hoverClasses} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
