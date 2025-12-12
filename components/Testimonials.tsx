import React from 'react';
import { TESTIMONIALS } from '@/constants';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-20 bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">Trusted by Thousands</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative">
                            <Quote className="text-green-100 absolute top-6 right-6" size={48} />
                            <p className="text-slate-600 mb-8 relative z-10 italic">"{t.content}"</p>
                            <div className="mt-auto flex items-center gap-4">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                                    <p className="text-xs text-primary font-semibold uppercase tracking-wide">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;