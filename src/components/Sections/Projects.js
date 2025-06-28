import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects, projectCategories } from '../../data/projects';
import { technologyBadges, technologyLinks } from '../../data/technologyBadges';
import Section from '../UI/Section';
import Card from '../UI/Card';
import Badge from '../UI/Badge';
import Button from '../UI/Button';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    // Helper function to get badge for a technology
    const getTechBadge = (techName) => {
        // First check if there's a specific project badge
        for (const [projectKey, badges] of Object.entries(technologyBadges.projects)) {
            const badge = badges.find(b =>
                b.name.toLowerCase() === techName.toLowerCase() ||
                b.alt.toLowerCase() === techName.toLowerCase()
            );
            if (badge) return badge;
        }

        // Then check all other categories
        const allBadges = [
            ...technologyBadges.programmingLanguages,
            ...technologyBadges.frontend,
            ...technologyBadges.backend,
            ...technologyBadges.mobile,
            ...technologyBadges.desktop,
            ...technologyBadges.databases,
            ...technologyBadges.tools,
            ...technologyBadges.aiTools
        ];

        // Try exact match first
        let badge = allBadges.find(b =>
            b.name.toLowerCase() === techName.toLowerCase() ||
            b.alt.toLowerCase() === techName.toLowerCase()
        );

        // If no exact match, try partial matches
        if (!badge) {
            badge = allBadges.find(b =>
                b.name.toLowerCase().includes(techName.toLowerCase()) ||
                techName.toLowerCase().includes(b.name.toLowerCase()) ||
                b.alt.toLowerCase().includes(techName.toLowerCase()) ||
                techName.toLowerCase().includes(b.alt.toLowerCase())
            );
        }

        return badge;
    };

    return (
        <Section id="projects" className="border-t border-gray-600">
            <div className="text-center">
                {/* Section Header */}
                <h2 className="font-mono text-2xl md:text-3xl font-bold text-white mb-12  mt-12 uppercase tracking-wide">
                    Key Projects & Portfolio
                </h2>

                {/* Category Filter */}
                <div className="mb-12">
                    <div className="flex flex-wrap justify-center gap-2">
                        {projectCategories.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? 'default' : 'outline'}
                                size="small"
                                onClick={() => setActiveCategory(category)}
                                className="font-mono uppercase"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <Card key={project.id} hover className="text-left h-full flex flex-col project-card">
                            {/* Project Header */}
                            <div className="mb-4">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-mono text-lg font-bold text-white">
                                        {project.title}
                                    </h3>
                                    <Badge variant="outline" className="text-xs">
                                        {project.category}
                                    </Badge>
                                </div>
                                <p className="font-mono text-sm text-gray-300 mb-3">
                                    {project.description}
                                </p>
                            </div>

                            {/* Technologies */}
                            <div className="mb-4 flex-grow">
                                <h4 className="font-mono text-sm text-white mb-2 uppercase">
                                    Technologies:
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                    {project.technologies.map((tech) => {
                                        const badge = getTechBadge(tech);
                                        if (badge) {
                                            const externalLink = technologyLinks[badge.name];
                                            return (
                                                <a
                                                    key={tech}
                                                    href={externalLink || "#skills"}
                                                    target={externalLink ? "_blank" : "_self"}
                                                    rel={externalLink ? "noopener noreferrer" : ""}
                                                    className="transition-transform hover:scale-105"
                                                    title={externalLink ? `Learn more about ${badge.name}` : `View skills section`}
                                                >
                                                    <img
                                                        src={badge.url}
                                                        alt={badge.alt}
                                                        className="h-5 border border-gray-700"
                                                    />
                                                </a>
                                            );
                                        }
                                        return (
                                            <Badge key={tech} variant="tech" tech={tech} className="text-xs">
                                                {tech}
                                            </Badge>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Platform & Status */}
                            <div className="mb-4">
                                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                                    <div>
                                        <span className="text-gray-400">Platform:</span>
                                        <br />
                                        <span className="text-white">{project.platform}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-400">Status:</span>
                                        <br />
                                        <span className="text-green-400">{project.status}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex gap-2 mt-auto">
                                <Button
                                    href={project.repository}
                                    variant="outline"
                                    size="small"
                                    className="flex items-center gap-1 text-xs"
                                >
                                    <Github size={14} />
                                    Code
                                </Button>
                                {project.demo && (
                                    <Button
                                        href={project.demo}
                                        variant="outline"
                                        size="small"
                                        className="flex items-center gap-1 text-xs"
                                    >
                                        <ExternalLink size={14} />
                                        Demo
                                    </Button>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Featured Applications Note */}
                <div className="mt-12 text-center">
                    <p className="font-mono text-sm text-gray-400">
                        ⭐ Featured Applications showcasing cross-platform development expertise
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Projects;
