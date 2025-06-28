import React from 'react';

const Button = ({
    children,
    variant = 'default',
    size = 'medium',
    className = '',
    onClick,
    href,
    ...props
}) => {
    const baseClasses = 'font-mono border transition-all duration-200';

    const variants = {
        default: 'bg-black text-white border-gray-600 hover:bg-gray-900',
        outline: 'bg-transparent text-white border-gray-600 hover:bg-gray-900',
        ghost: 'bg-transparent text-white border-transparent hover:bg-gray-900'
    };

    const sizes = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg'
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
                style={{ pointerEvents: 'auto', zIndex: 10, position: 'relative' }}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={classes}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
