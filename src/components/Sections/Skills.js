import React from 'react';
import { skills } from '../../data/skills';
import { technologyBadges, technologyLinks } from '../../data/technologyBadges';
import Section from '../UI/Section';
import Badge from '../UI/Badge';

const Skills = () => {
    // Helper function to get badge for a skill
    const getSkillBadge = (skillName) => {
        // Map skills to appropriate badge categories
        const skillToBadgeMapping = {
            // AI Tools
            'GitHub Copilot': technologyBadges.aiTools,
            'Claude': technologyBadges.aiTools,
            'ChatGPT': technologyBadges.aiTools,
            'Perplexity': technologyBadges.aiTools,
            'Gemini': technologyBadges.aiTools,
            // Programming Languages
            'JavaScript': technologyBadges.programmingLanguages,
            'Python': technologyBadges.programmingLanguages,
            'Java': technologyBadges.programmingLanguages,
            'Go': technologyBadges.programmingLanguages,
            'PHP': technologyBadges.programmingLanguages,
            'HTML5': technologyBadges.programmingLanguages,
            'CSS3': technologyBadges.programmingLanguages,
            // Frontend
            'React': technologyBadges.frontend,
            'Next.js': technologyBadges.frontend,
            'TailwindCSS': technologyBadges.frontend,
            'Bootstrap': technologyBadges.frontend,
            // Backend
            'Node.js': technologyBadges.backend,
            'Express.js': technologyBadges.backend,
            'Django': technologyBadges.backend,
            'Flask': technologyBadges.backend,
            // Mobile
            'React Native': technologyBadges.mobile,
            'Android': technologyBadges.mobile,
            // Desktop
            'Electron': technologyBadges.desktop,
            'Qt': technologyBadges.desktop,
            // Databases
            'MongoDB': technologyBadges.databases,
            'MySQL': technologyBadges.databases,
            'SQLite': technologyBadges.databases,
            'Firebase': technologyBadges.databases,
            'Supabase': technologyBadges.databases,
            // Tools
            'Git': technologyBadges.tools,
            'GitHub': technologyBadges.tools,
            'VS Code': technologyBadges.tools,
            'NLP APIs': technologyBadges.tools,
            'Encryption': technologyBadges.tools,
            'Kivy': technologyBadges.tools,
            'RESTful APIs': technologyBadges.tools,
            'Assembly Language': technologyBadges.tools,
            'Computer Architecture': technologyBadges.tools
        };

        // Find the appropriate category and then find the badge
        for (const [mappedSkill, category] of Object.entries(skillToBadgeMapping)) {
            if (mappedSkill.toLowerCase() === skillName.toLowerCase()) {
                return category.find(badge => badge.name.toLowerCase() === skillName.toLowerCase());
            }
        }

        // Fallback: search all categories
        const allBadges = [
            ...technologyBadges.aiTools,
            ...technologyBadges.programmingLanguages,
            ...technologyBadges.frontend,
            ...technologyBadges.backend,
            ...technologyBadges.mobile,
            ...technologyBadges.desktop,
            ...technologyBadges.databases,
            ...technologyBadges.tools
        ];

        return allBadges.find(badge =>
            badge.name.toLowerCase() === skillName.toLowerCase() ||
            badge.alt.toLowerCase() === skillName.toLowerCase() ||
            badge.name.toLowerCase().includes(skillName.toLowerCase()) ||
            skillName.toLowerCase().includes(badge.name.toLowerCase())
        );
    };

    const skillCategories = [
        {
            title: 'AI Development Tools',
            skills: skills.aiDevelopmentTools,
            icon: '🤖'
        },
        {
            title: 'Programming Languages',
            skills: skills.programmingLanguages,
            icon: '💻'
        },
        {
            title: 'Mobile Development',
            skills: skills.mobileDevelopment,
            icon: '📱'
        },
        {
            title: 'Web Development',
            skills: skills.webDevelopment,
            icon: '🌐'
        },
        {
            title: 'Desktop Development',
            skills: skills.desktopDevelopment,
            icon: '🖥️'
        },
        {
            title: 'Backend Development',
            skills: skills.backendDevelopment,
            icon: '⚙️'
        },
        {
            title: 'Database & Tools',
            skills: skills.databaseTools,
            icon: '🗄️'
        },
        {
            title: 'Development Tools',
            skills: skills.developmentTools,
            icon: '🛠️'
        }
    ];

    return (
        <Section id="skills" className="border-t border-gray-600">
            <div className="text-center">
                {/* Section Header */}
                <h2 className="font-mono text-2xl md:text-3xl font-bold text-white mb-12  mt-12  uppercase tracking-wide">
                    Technical Skills
                </h2>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="text-left">
                            <h3 className="font-mono text-lg font-bold text-white mb-4 uppercase flex items-center gap-2">
                                <span>{category.icon}</span>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => {
                                    const badge = getSkillBadge(skill);
                                    if (badge) {
                                        const externalLink = technologyLinks[badge.name];
                                        return (
                                            <a
                                                key={skill}
                                                href={externalLink || "#projects"}
                                                target={externalLink ? "_blank" : "_self"}
                                                rel={externalLink ? "noopener noreferrer" : ""}
                                                className="transition-transform hover:scale-105"
                                                title={externalLink ? `Learn more about ${badge.name}` : `View projects using ${badge.name}`}
                                            >
                                                <img
                                                    src={badge.url}
                                                    alt={badge.alt}
                                                    className="h-6 border border-gray-700"
                                                />
                                            </a>
                                        );
                                    }
                                    return (
                                        <Badge key={skill} variant="tech" tech={skill} className="text-sm">
                                            {skill}
                                        </Badge>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Platform Expertise */}
                <div className="mt-16">
                    <h3 className="font-mono text-xl font-bold text-white mb-8 uppercase">
                        🎯 Platform Expertise
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        {skills.platforms.map((platform) => (
                            <div key={platform} className="border border-gray-600 p-4 bg-black">
                                <p className="font-mono text-white">{platform}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Technical Knowledge */}
                <div className="mt-16">
                    <h3 className="font-mono text-xl font-bold text-white mb-8 uppercase">
                        📚 Additional Technical Knowledge
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="text-left border border-gray-600 p-6 bg-black">
                            <h4 className="font-mono text-white font-bold mb-4">Development Tools & APIs</h4>
                            <ul className="font-mono text-gray-300 text-sm space-y-2">
                                <li>• GitHub CLI (git copilot), GitHub Discussions</li>
                                <li>• REST APIs, Express.js</li>
                                <li>• Assembly language, Computer architecture</li>
                            </ul>
                        </div>
                        <div className="text-left border border-gray-600 p-6 bg-black">
                            <h4 className="font-mono text-white font-bold mb-4">AI/ML & Cloud Services</h4>
                            <ul className="font-mono text-gray-300 text-sm space-y-2">
                                <li>• AI/ML: Self-study and implementation readiness</li>
                                <li>• Advanced Git & GitHub (contributor-level)</li>
                                <li>• Firebase, Supabase (authentication and storage)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Note */}
                <div className="mt-12 text-center">
                    <p className="font-mono text-sm text-gray-400">
                        💡 All skills enhanced with AI-assisted development workflows
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Skills;
