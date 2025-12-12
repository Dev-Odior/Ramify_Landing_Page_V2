
import React, { useState } from 'react';
import { Instagram, Twitter, Youtube, ChevronDown, ChevronUp, Music } from 'lucide-react';
import Modal from '@/components/Modal';
import { FOOTER_LINKS, FOOTER_MODAL_CONTENT } from '@/constants';
import Logo from '@/components/Logo';

const Footer = () => {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const toggleSection = (category: string) => {
        setOpenSections(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const handleLinkClick = (key: string, type?: string) => {
        if (FOOTER_MODAL_CONTENT[key]) {
            setActiveModal(key);
        }
    };

    const currentModalContent = activeModal ? FOOTER_MODAL_CONTENT[activeModal] : null;

    return (
        <footer className="bg-slate-900 text-slate-300 pt-12 md:pt-20 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-3">
                        <div className="flex items-center gap-2 mb-6">
                            <Logo className="h-10 w-auto" variant="white" />
                        </div>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            Making festive celebrations stress-free and affordable for every Nigerian through smart savings and reliable agriculture.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-2 lg:gap-y-0">
                        {FOOTER_LINKS.map((section) => (
                            <div key={section.category} className="border-b border-slate-800 lg:border-none">
                                <button 
                                    onClick={() => toggleSection(section.category)}
                                    className="w-full flex items-center justify-between py-4 lg:py-0 lg:mb-6 text-left group focus:outline-none"
                                >
                                    <h4 className="text-white font-bold text-base lg:text-sm group-hover:text-primary transition-colors">{section.category}</h4>
                                    <div className="lg:hidden text-slate-500">
                                        {openSections[section.category] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </div>
                                </button>
                                
                                <div className={`
                                    overflow-hidden transition-all duration-300 ease-in-out
                                    ${openSections[section.category] ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100 lg:pb-0'}
                                `}>
                                    <ul className="space-y-3 text-sm">
                                        {section.items.map((item) => (
                                            <li key={item.key}>
                                                <button 
                                                    onClick={() => handleLinkClick(item.key, item.type)}
                                                    className="text-left text-slate-400 hover:text-white transition-colors flex items-center gap-2 w-full"
                                                >
                                                    {item.type === 'partner' && <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>}
                                                    {item.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        {/* Social (Custom Section) */}
                        <div className="border-b border-slate-800 lg:border-none">
                            <button 
                                onClick={() => toggleSection('Social')}
                                className="w-full flex items-center justify-between py-4 lg:py-0 lg:mb-6 text-left group focus:outline-none"
                            >
                                <h4 className="text-white font-bold text-base lg:text-sm group-hover:text-primary transition-colors">Connect</h4>
                                <div className="lg:hidden text-slate-500">
                                    {openSections['Social'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </div>
                            </button>
                            <div className={`
                                    overflow-hidden transition-all duration-300 ease-in-out
                                    ${openSections['Social'] ? 'max-h-48 opacity-100 pb-4' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100 lg:pb-0'}
                                `}>
                                <ul className="space-y-4 text-sm">
                                    <li><a href="#" target="_blank" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"><Instagram size={18} /> Instagram</a></li>
                                    <li><a href="#" target="_blank" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"><Music size={18} /> TikTok</a></li>
                                    <li><a href="#" target="_blank" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"><Twitter size={18} /> Twitter/X</a></li>
                                    <li><a href="#" target="_blank" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"><Youtube size={18} /> YouTube</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© 2025 Ramify Tech Ventures</p>
                    <p className="flex items-center gap-1">Powered by <span className="text-primary font-bold">Ramify</span></p>
                </div>
            </div>

            {/* Modal */}
            {currentModalContent && (
                <Modal 
                    isOpen={!!activeModal} 
                    onClose={() => setActiveModal(null)} 
                    title={currentModalContent.title}
                >
                    {currentModalContent.content}
                </Modal>
            )}
        </footer>
    );
};

export default Footer;
