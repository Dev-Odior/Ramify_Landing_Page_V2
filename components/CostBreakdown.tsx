
import React from 'react';
import { PRICING_TIERS, PRICING_ADDONS } from '@/constants';
import { Check, Info, Phone } from 'lucide-react';
import Button from '@/components/Button';

const CostBreakdown = () => {
    return (
        <section id="pricing" className="py-20 bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Transparent Pricing</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-6">Fair Prices. No Hidden Fees.</h2>
                    <p className="text-slate-600 text-lg">We procure early to give you the best rates. Choose the plan that fits your budget.</p>
                </div>

                {/* Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {PRICING_TIERS.map((tier, idx) => (
                        <div key={idx} className={`relative rounded-3xl p-8 flex flex-col ${tier.highlight ? 'bg-white shadow-xl ring-2 ring-primary scale-105 z-10' : 'bg-white border border-slate-200 shadow-sm'}`}>
                            {tier.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                                    Best Value
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-slate-500 mb-2">{tier.name}</h3>
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-3xl md:text-4xl font-extrabold text-slate-300 line-through decoration-slate-300 decoration-4 select-none">
                                        ₦ ---,---
                                    </span>
                                    <span className="inline-block mt-1 bg-secondary/10 text-secondary text-xs font-bold px-3 py-1.5 rounded-lg border border-secondary/20">
                                        Prices available upon launch
                                    </span>
                                </div>
                                <p className="text-primary font-medium mt-4">{tier.weight}</p>
                            </div>
                            <div className="flex-grow space-y-4 mb-8">
                                {tier.features.map((feat, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check size={12} className="text-primary" strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-600 text-sm">{feat}</span>
                                    </div>
                                ))}
                            </div>
                            <Button variant={tier.highlight ? 'primary' : 'outline'} fullWidth>
                                Choose {tier.name}
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="text-center max-w-2xl mx-auto mb-20">
                    <p className="text-slate-600 italic font-medium bg-white px-6 py-4 rounded-2xl border border-slate-100 shadow-sm inline-block">
                        "Regardless that our prices aren’t shown yet, we guarantee that our prices will be very fair and affordable compared to market rates."
                    </p>
                </div>

                {/* Add-ons and Service Fee */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Optional Add-ons</h3>
                        <div className="space-y-4">
                            {PRICING_ADDONS.map((addon, idx) => (
                                <div key={idx} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                                    <span className="text-slate-700 font-medium">{addon.name}</span>
                                    <span className="text-slate-900 font-bold">{addon.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-lg flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                        <h3 className="text-xl font-bold mb-4 relative z-10">Service Fee: ₦ 2,000 per order</h3>
                        <p className="text-slate-300 mb-6 relative z-10">This small flat fee covers the entire logistics of your order, ensuring a hassle-free experience.</p>
                        <ul className="space-y-2 mb-0 relative z-10">
                            <li className="flex items-center gap-2 text-sm text-slate-300"><Check size={16} className="text-primary" /> Procurement coordination</li>
                            <li className="flex items-center gap-2 text-sm text-slate-300"><Check size={16} className="text-primary" /> Feedlot management</li>
                            <li className="flex items-center gap-2 text-sm text-slate-300"><Check size={16} className="text-primary" /> Logistics planning</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-green-50 rounded-2xl p-8 border border-green-100">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-full text-primary shadow-sm shrink-0 hidden sm:block">
                                <Info size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-1">Business & Group Orders</h4>
                                <p className="text-slate-600 text-sm mb-1"><strong>Businesses:</strong> Volume discounts available for orders above 10 rams.</p>
                                <p className="text-slate-600 text-sm"><strong>Ajo Groups:</strong> No extra fees to create or join a group.</p>
                            </div>
                        </div>
                        <Button variant="secondary" className="shrink-0 flex items-center gap-2">
                            <Phone size={18} /> Contact Sales
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CostBreakdown;
