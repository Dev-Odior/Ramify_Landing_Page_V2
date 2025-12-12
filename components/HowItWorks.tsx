import React from 'react';
import { HOW_IT_WORKS_STEPS } from '@/constants';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-surface relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
            
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Simple Process</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-6">How Ramify Works</h2>
                    <p className="text-slate-600 text-lg">From your first deposit to the festival celebration, we handle everything in five simple steps.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
                    {HOW_IT_WORKS_STEPS.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="flex flex-col items-center text-center relative group">
                                {index < HOW_IT_WORKS_STEPS.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 -right-1/2 w-full text-slate-200 z-0">
                                        <ArrowRight size={24} className="mx-auto" />
                                    </div>
                                )}
                                
                                <div className="w-16 h-16 bg-white border-2 border-slate-100 shadow-lg shadow-slate-100 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                                    <Icon className="text-primary" size={28} strokeWidth={1.5} />
                                    <div className="absolute -top-3 -right-3 w-7 h-7 bg-secondary text-white text-sm font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed px-2">{step.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;