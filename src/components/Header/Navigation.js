import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import Button from '../UI/Button';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'instant' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full bg-black border-b border-gray-600 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="font-mono text-white font-bold text-lg">
                        NETHINDU HANSAKA
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {NAVIGATION_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className="font-mono text-white hover:text-gray-300 text-sm uppercase tracking-wide"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-gray-300"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-600">
                        <div className="py-4 space-y-2">
                            {NAVIGATION_ITEMS.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className="block w-full text-left font-mono text-white hover:text-gray-300 text-sm uppercase tracking-wide py-2"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
