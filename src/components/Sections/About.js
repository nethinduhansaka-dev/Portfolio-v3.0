import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import Section from '../UI/Section';

const About = () => {
    return (
        <Section id="about" className="border-t border-gray-600">
            <div className="text-center">
                {/* Section Header */}
                <h2 className="font-mono text-2xl md:text-3xl font-bold text-white mb-12 mt-12 uppercase tracking-wide">
                    About Me
                </h2>

                <div className="max-w-4xl mx-auto">
                    {/* Main Description */}
                    <div className="mb-12">
                        <p className="font-mono text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                            I am a dedicated Software Engineering student at the Open University of Sri Lanka and an AI-Assisted Developer specializing in cross-platform application development. I harness the power of advanced AI tools including GitHub Copilot, Claude, ChatGPT, Perplexity, and Gemini to create innovative solutions across Mobile, Web, and Desktop platforms, combining human creativity with artificial intelligence to deliver exceptional user experiences.
                        </p>
                    </div>

                    {/* Key Information Grid */}
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div>
                            <h3 className="font-mono text-lg font-bold text-white mb-4 uppercase">
                                Location & Languages
                            </h3>
                            <ul className="font-mono text-gray-300 space-y-2">
                                <li>📍 {personalInfo.location}</li>
                                <li>🗣️ {personalInfo.languages.join(', ')}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-mono text-lg font-bold text-white mb-4 uppercase">
                                Specialization
                            </h3>
                            <ul className="font-mono text-gray-300 space-y-2">
                                <li>🎯 {personalInfo.specialization}</li>
                                <li>⚡ AI-Enhanced Development Workflows</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-mono text-lg font-bold text-white mb-4 uppercase">
                                AI Tools & Platforms
                            </h3>
                            <ul className="font-mono text-gray-300 space-y-2">
                                {personalInfo.aiTools.map((tool) => (
                                    <li key={tool.name}> {tool.name} ({tool.category})</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-mono text-lg font-bold text-white mb-4 uppercase">
                                Current Focus
                            </h3>
                            <ul className="font-mono text-gray-300 space-y-2">
                                <li>📱 Mobile (React Native, Java)</li>
                                <li>🌐 Web (React, Next.js, Django, Flask)</li>
                                <li>💻 Desktop (Python Qt/Kivy, Electron, Tauri)</li>
                                <li>🔗 Real-time Applications</li>
                            </ul>
                        </div>
                    </div>

                    {/* Additional Technical Knowledge */}
                    <div className="mt-12 text-center">
                        <h3 className="font-mono text-lg font-bold text-white mb-6 uppercase">
                            Additional Technical Knowledge
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 text-left">
                            <div className="font-mono text-gray-300 space-y-2">
                                <ul className="space-y-2">
                                    <li>Development Tools: GitHub CLI (git copilot), GitHub Discussions</li>
                                    <li>API Development: REST APIs, Express.js</li>
                                    <li>Low-Level Programming: Assembly language, Computer architecture</li>
                                </ul>
                            </div>
                            <div className="font-mono text-gray-300 space-y-2">
                                <ul className="space-y-2">
                                    <li>AI/ML: Self-study and implementation readiness</li>
                                    <li>Version Control: Advanced Git & GitHub (contributor-level)</li>
                                    <li>Cloud Services: Firebase, Supabase (authentication and storage)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
