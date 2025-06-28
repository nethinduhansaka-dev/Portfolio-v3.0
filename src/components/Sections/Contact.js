import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Send, Youtube, Brain, Search, Star } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import Section from '../UI/Section';
import Button from '../UI/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create mailto link with form data
        const mailtoLink = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.open(mailtoLink);
    };

    return (
        <Section id="contact" className="border-t border-gray-600">
            <div className="text-center">
                {/* Section Header */}
                <h2 className="font-mono text-2xl md:text-3xl font-bold text-white mb-12  mt-12 uppercase tracking-wide">
                    Contact
                </h2>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <div className="mb-12">
                        <p className="font-mono text-lg text-gray-300 mb-8">
                            Let's connect and discuss potential collaborations or opportunities.
                        </p>

                        {/* Contact Links */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-12">
                            <Button
                                href={`mailto:${personalInfo.contact.email}`}
                                variant="outline"
                                className="flex flex-col items-center gap-2 p-6 h-auto hover:bg-red-600 hover:border-red-500 transition-all duration-200"
                            >
                                <Mail size={24} />
                                <span className="text-sm">Email</span>
                                <span className="text-xs text-gray-400">Direct Contact</span>
                            </Button>

                            <Button
                                href={personalInfo.contact.github}
                                variant="outline"
                                className="flex flex-col items-center gap-2 p-6 h-auto hover:bg-black hover:border-gray-500 transition-all duration-200"
                            >
                                <Github size={24} />
                                <span className="text-sm">GitHub</span>
                                <span className="text-xs text-gray-400">Code Repository</span>
                            </Button>

                            <Button
                                href={personalInfo.contact.linkedin}
                                variant="outline"
                                className="flex flex-col items-center gap-2 p-6 h-auto hover:bg-blue-600 hover:border-blue-500 transition-all duration-200"
                            >
                                <Linkedin size={24} />
                                <span className="text-sm">LinkedIn</span>
                                <span className="text-xs text-gray-400">Professional Network</span>
                            </Button>

                            <Button
                                href={personalInfo.contact.medium}
                                variant="outline"
                                className="flex flex-col items-center gap-2 p-6 h-auto hover:bg-black hover:border-gray-500 transition-all duration-200"
                            >
                                <FileText size={24} />
                                <span className="text-sm">Medium</span>
                                <span className="text-xs text-gray-400">Technical Articles</span>
                            </Button>

                            <Button
                                href="#"
                                variant="outline"
                                className="flex flex-col items-center gap-2 p-6 h-auto hover:bg-red-600 hover:border-red-500 transition-all duration-200"
                            >
                                <Youtube size={24} />
                                <span className="text-sm">YouTube</span>
                                <span className="text-xs text-gray-400">Video Content</span>
                            </Button>

                            <Button
                                href="#"
                                variant="outline"
                                className="flex flex-col items-center gap-2 p-6 h-auto hover:bg-teal-600 hover:border-teal-500 transition-all duration-200"
                            >
                                <Brain size={24} />
                                <span className="text-sm">ChatGPT</span>
                                <span className="text-xs text-gray-400">AI Assistant</span>
                            </Button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-2xl mx-auto">
                        <h3 className="font-mono text-xl font-bold text-white mb-8 uppercase">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6 text-left">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-mono text-sm text-white mb-2 uppercase">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-black border border-gray-600 text-white font-mono focus:border-white focus:outline-none"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label className="block font-mono text-sm text-white mb-2 uppercase">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-black border border-gray-600 text-white font-mono focus:border-white focus:outline-none"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-mono text-sm text-white mb-2 uppercase">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-black border border-gray-600 text-white font-mono focus:border-white focus:outline-none"
                                    placeholder="Project Collaboration / Job Opportunity / General Inquiry"
                                />
                            </div>

                            <div>
                                <label className="block font-mono text-sm text-white mb-2 uppercase">
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-black border border-gray-600 text-white font-mono focus:border-white focus:outline-none resize-vertical"
                                    placeholder="Tell me about your project or opportunity..."
                                />
                            </div>

                            <div className="text-center">
                                <Button
                                    type="submit"
                                    variant="default"
                                    size="large"
                                    className="flex items-center gap-2 mx-auto"
                                >
                                    <Send size={16} />
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Footer Info */}
                    <div className="mt-16 pt-8 border-t border-gray-600">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <h4 className="font-mono text-white font-bold mb-2 uppercase">Location</h4>
                                <p className="font-mono text-gray-300 text-sm">{personalInfo.location}</p>
                            </div>
                            <div>
                                <h4 className="font-mono text-white font-bold mb-2 uppercase">Languages</h4>
                                <p className="font-mono text-gray-300 text-sm">{personalInfo.languages.join(', ')}</p>
                            </div>
                            <div>
                                <h4 className="font-mono text-white font-bold mb-2 uppercase">Response Time</h4>
                                <p className="font-mono text-gray-300 text-sm">Within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
