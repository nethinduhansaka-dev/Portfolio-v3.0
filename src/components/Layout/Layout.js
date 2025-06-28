import React from 'react';
import Navigation from '../Header/Navigation';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navigation />
            <main>
                {children}
            </main>
            <footer className="border-t border-gray-600 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="font-mono text-gray-400 text-sm">
                        © 2025 Nethindu Hansaka. Built with React & Tailwind CSS. Powered by AI.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
