import React from 'react';
import { VALUE_PROPS } from '@/constants';

const ValueProp = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {VALUE_PROPS.map((prop, index) => {
                        const Icon = prop.icon;
                        return (
                            <div key={index} className="group p-6 rounded-2xl bg-surface border border-slate-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="text-primary" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-2">{prop.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{prop.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ValueProp;