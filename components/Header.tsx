import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';
import Button from '@/components/Button';
import Logo from '@/components/Logo';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                const headerOffset = 90;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <div className="cursor-pointer select-none flex items-center" onClick={scrollToTop}>
                    <Logo className="h-9 md:h-12 w-auto" />
                    <span className="ml-[8px] text-primary font-sans font-bold text-[1.8em] leading-none">Ramify</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a 
                            key={item.label} 
                            href={item.href} 
                            className="text-slate-600 hover:text-primary font-medium text-sm transition-colors"
                            onClick={(e) => handleNavClick(e, item.href)}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Button onClick={(e) => handleNavClick(e, '#download-app')}>Download App</Button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-slate-700 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                        {NAV_ITEMS.map((item) => (
                            <a 
                                key={item.label} 
                                href={item.href} 
                                className="text-slate-700 font-medium py-2 border-b border-slate-100"
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="flex flex-col gap-3 mt-2">
                            <Button fullWidth onClick={(e) => handleNavClick(e, '#download-app')}>Download App</Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;