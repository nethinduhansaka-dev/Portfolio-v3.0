import React from 'react';

const Section = ({ id, children, className = '' }) => {
    return (
        <section
            id={id}
            className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}
        >
            <div className="max-w-6xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;
