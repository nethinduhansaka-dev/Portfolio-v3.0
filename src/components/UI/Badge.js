import React from 'react';

const Badge = ({ children, variant = 'default', tech = null, className = '' }) => {
    const baseClasses = 'px-3 py-1 text-sm font-mono border inline-flex items-center gap-1';

    // Technology-specific styling
    const techColors = {
        // AI Tools
        'GitHub Copilot': 'bg-black text-white border-gray-600',
        'Claude': 'bg-orange-600 text-white border-orange-500',
        'ChatGPT': 'bg-teal-600 text-white border-teal-500',
        'Perplexity': 'bg-blue-500 text-white border-blue-400',
        'Gemini': 'gemini-gradient text-white border-purple-500',

        // Programming Languages
        'JavaScript': 'bg-yellow-400 text-black border-yellow-300',
        'Python': 'bg-blue-600 text-white border-blue-500',
        'Java': 'bg-orange-600 text-white border-orange-500',
        'Go': 'bg-cyan-500 text-white border-cyan-400',
        'PHP': 'bg-purple-600 text-white border-purple-500',
        'HTML5': 'bg-orange-500 text-white border-orange-400',
        'CSS3': 'bg-blue-500 text-white border-blue-400',

        // Frameworks & Libraries
        'React': 'bg-blue-400 text-black border-blue-300',
        'React Native': 'bg-blue-400 text-black border-blue-300',
        'Next.js': 'bg-black text-white border-gray-600',
        'Node.js': 'bg-green-600 text-white border-green-500',
        'Django': 'bg-green-800 text-white border-green-700',
        'Flask': 'bg-gray-100 text-black border-gray-300',
        'TailwindCSS': 'bg-teal-500 text-white border-teal-400',
        'Express.js': 'bg-black text-white border-gray-600',

        // Mobile & Desktop
        'Android': 'bg-green-500 text-white border-green-400',
        'Qt': 'bg-green-600 text-white border-green-500',
        'Electron': 'bg-gray-700 text-white border-gray-600',

        // Databases
        'MongoDB': 'bg-green-600 text-white border-green-500',
        'MySQL': 'bg-blue-600 text-white border-blue-500',
        'SQLite': 'bg-blue-500 text-white border-blue-400',
        'Firebase': 'bg-orange-500 text-white border-orange-400',
        'Supabase': 'bg-green-500 text-white border-green-400',

        // Tools
        'Git': 'bg-orange-600 text-white border-orange-500',
        'GitHub': 'bg-black text-white border-gray-600',
        'VS Code': 'bg-blue-600 text-white border-blue-500',
    };

    const variants = {
        default: 'bg-black text-white border-gray-600',
        outline: 'bg-transparent text-white border-gray-600',
        tech: tech && techColors[tech] ? techColors[tech] : 'bg-gray-900 text-white border-gray-700'
    };

    const badgeClass = `${baseClasses} ${variants[variant]} ${className}`;

    return (
        <span className={badgeClass}>
            {children}
        </span>
    );
};

export default Badge;
