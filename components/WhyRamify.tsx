import React from 'react';
import { WHY_RAMIFY_REASONS } from '@/constants';

const WhyRamify = () => {
    return (
        <section className="py-20 bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Nigerians Choose Ramify</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Visual Comparison */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center">
                        <h3 className="text-lg font-bold text-slate-800 mb-6 text-center">Price Volatility vs Ramify Stability</h3>
                        <div className="relative h-64 w-full border-b border-l border-slate-200">
                            {/* Grid lines */}
                            <div className="absolute top-0 w-full border-t border-slate-100 h-full flex flex-col justify-between">
                                <div className="border-t border-slate-100"></div>
                                <div className="border-t border-slate-100"></div>
                                <div className="border-t border-slate-100"></div>
                            </div>
                            
                            {/* Volatile Market Line (Red) */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,80 Q20,75 30,60 T60,40 T90,10" fill="none" stroke="#EF4444" strokeWidth="3" strokeDasharray="4,4" />
                            </svg>
                            <div className="absolute top-[5%] right-0 text-red-500 text-xs font-bold bg-white px-1">Market Price</div>

                            {/* Stable Ramify Line (Green) */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,70 L100,70" fill="none" stroke="#0EAD69" strokeWidth="4" />
                            </svg>
                            <div className="absolute top-[65%] right-0 text-primary text-xs font-bold bg-white px-1">Ramify Price (Locked)</div>
                        </div>
                        <p className="text-center text-xs text-slate-500 mt-4">Typical price trend 3 months to Sallah</p>
                    </div>

                    {/* Reasons Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {WHY_RAMIFY_REASONS.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 text-secondary">
                                        <Icon size={20} />
                                    </div>
                                    <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyRamify;