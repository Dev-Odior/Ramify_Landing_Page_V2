import React, { useState } from 'react';
import { FAQ_CATEGORIES } from '@/constants';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openCategory, setOpenCategory] = useState<string | null>(FAQ_CATEGORIES[0].category);
    const [openItem, setOpenItem] = useState<string | null>(null);

    const toggleCategory = (cat: string) => {
        setOpenCategory(openCategory === cat ? null : cat);
        setOpenItem(null);
    };

    const toggleItem = (question: string) => {
        setOpenItem(openItem === question ? null : question);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-extrabold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                    {FAQ_CATEGORIES.map((cat, idx) => (
                        <div key={idx} className="bg-surface rounded-2xl overflow-hidden border border-slate-100">
                            <button 
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-slate-50 hover:bg-slate-100 transition-colors"
                                onClick={() => toggleCategory(cat.category)}
                            >
                                <h3 className="font-bold text-xl text-slate-900">{cat.category}</h3>
                                <div className={`transition-transform duration-300 ${openCategory === cat.category ? 'rotate-180' : ''}`}>
                                    <ChevronDown className="text-slate-400" />
                                </div>
                            </button>
                            
                            <div className={`transition-all duration-300 ease-in-out ${openCategory === cat.category ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-4 md:p-6 space-y-3">
                                    {cat.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="border-b border-slate-200 last:border-0 pb-3 last:pb-0">
                                            <button 
                                                className="w-full flex items-start justify-between py-3 text-left group"
                                                onClick={() => toggleItem(item.question)}
                                            >
                                                <span className={`font-medium text-base md:text-lg pr-4 transition-colors ${openItem === item.question ? 'text-primary font-bold' : 'text-slate-700 group-hover:text-primary'}`}>
                                                    {item.question}
                                                </span>
                                                <div className={`mt-1 transition-transform duration-200 ${openItem === item.question ? 'rotate-180 text-primary' : 'text-slate-400'}`}>
                                                    <ChevronDown size={18} />
                                                </div>
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-300 ${openItem === item.question ? 'max-h-48 mt-2' : 'max-h-0'}`}>
                                                <p className="text-slate-600 text-sm md:text-base leading-relaxed pl-1">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;