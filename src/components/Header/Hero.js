import React from 'react';
import { Github, Linkedin, Mail, FileText, Youtube } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { technologyBadges, technologyLinks } from '../../data/technologyBadges';
import Section from '../UI/Section';
import Badge from '../UI/Badge';
import Button from '../UI/Button';

const Hero = () => {
    return (
        <Section id="hero" className="pt-32 pb-16">
            <div className="text-center">
                {/* Name */}
                <h1 className="font-mono text-4xl md:text-6xl font-bold text-white mb-4 uppercase">
                    {personalInfo.name}
                </h1>

                {/* Title */}
                <h2 className="font-mono text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                    {personalInfo.title}
                </h2>

                {/* Description */}
                <p className="font-mono text-base md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                    {personalInfo.description}
                </p>

                {/* AI Tools */}
                <div className="mb-12">
                    <h3 className="font-mono text-sm uppercase text-white mb-4 tracking-wide">
                        Powered By AI Tools:
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {technologyBadges.aiTools.map((badge) => (
                            <a
                                key={badge.name}
                                href={technologyLinks[badge.name] || "#skills"}
                                target={technologyLinks[badge.name] ? "_blank" : "_self"}
                                rel={technologyLinks[badge.name] ? "noopener noreferrer" : ""}
                                className="transition-transform hover:scale-105"
                                title={`Learn more about ${badge.name}`}
                            >
                                <img
                                    src={badge.url}
                                    alt={badge.alt}
                                    className="h-6 border border-gray-700"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Links with Brand Colors */}
                <div className="flex flex-wrap justify-center gap-4">
                    <Button
                        href={`mailto:${personalInfo.contact.email}`}
                        variant="outline"
                        className="flex items-center gap-2 hover:bg-red-600 hover:border-red-500"
                    >
                        <Mail size={16} />
                        Email
                    </Button>
                    <Button
                        href={personalInfo.contact.github}
                        variant="outline"
                        className="flex items-center gap-2 hover:bg-black hover:border-gray-500"
                    >
                        <Github size={16} />
                        GitHub
                    </Button>
                    <Button
                        href={personalInfo.contact.linkedin}
                        variant="outline"
                        className="flex items-center gap-2 hover:bg-blue-600 hover:border-blue-500"
                    >
                        <Linkedin size={16} />
                        LinkedIn
                    </Button>
                    <Button
                        href={personalInfo.contact.medium}
                        variant="outline"
                        className="flex items-center gap-2 hover:bg-black hover:border-gray-500"
                    >
                        <FileText size={16} />
                        Medium
                    </Button>
                    <Button
                        href="#"
                        variant="outline"
                        className="flex items-center gap-2 hover:bg-red-600 hover:border-red-500"
                    >
                        <Youtube size={16} />
                        YouTube
                    </Button>
                </div>

                {/* Location & Languages */}
                <div className="mt-8 text-gray-500 font-mono text-sm">
                    <p>{personalInfo.location} • {personalInfo.languages.join(', ')}</p>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
