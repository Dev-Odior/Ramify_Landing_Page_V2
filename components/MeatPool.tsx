import React from 'react';
import { Users, Zap, Split, AlertCircle } from 'lucide-react';
import Button from '@/components/Button';

const MeatPool = () => {
    return (
        <section className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-6 border border-secondary/20">
                            <Zap size={14} fill="currentColor" />
                            New Feature
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            No Group? No Problem. <br />
                            <span className="text-primary">Join a Meat Pool.</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Don't have people to split a ram with? We connect you with verified buyers in your location to share a premium ram. We handle the grouping, processing, and deliver your share in hygienic meat packs.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto lg:mx-0">
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <Users size={20} />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white font-bold text-sm">Auto-Pairing</h4>
                                    <p className="text-slate-400 text-xs">We match you instantly</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                                    <Split size={20} />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white font-bold text-sm">Fair Splitting</h4>
                                    <p className="text-slate-400 text-xs">Standardized cuts</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex items-start gap-3 mb-8 text-left">
                            <AlertCircle className="text-secondary shrink-0 mt-0.5" size={20} />
                            <div>
                                <h5 className="text-secondary font-bold text-sm mb-1">Instant Payment Required</h5>
                                <p className="text-slate-400 text-xs leading-relaxed">Unlike our individual plans, Meat Pools require immediate payment to lock your slot and ensure the group is fully funded for procurement. Savings plans are not available for this feature.</p>
                            </div>
                        </div>

                        <Button className="w-full sm:w-auto">Find a Pool Near Me</Button>
                    </div>

                    <div className="flex-1 w-full max-w-md">
                        <div className="bg-white rounded-3xl p-6 shadow-2xl relative">
                            <div className="absolute -top-4 -right-4 bg-primary text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                                Live Pool
                            </div>
                            <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-6">
                                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl">
                                    🥩
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">Lagos Mainland Pool #42</h3>
                                    <p className="text-slate-500 text-xs">Large Ram • 4 Shares Total</p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-600 font-medium">Progress</span>
                                    <span className="text-primary font-bold">3/4 Filled</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-3">
                                    <div className="bg-primary h-3 rounded-full w-3/4 shadow-sm relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-sm"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-xs text-slate-400">
                                    <span>Started 2 hrs ago</span>
                                    <span>Closing soon</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex -space-x-2">
                                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://picsum.photos/100/100?random=20" alt="User" />
                                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://picsum.photos/100/100?random=21" alt="User" />
                                    <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://picsum.photos/100/100?random=22" alt="User" />
                                </div>
                                <span className="text-slate-500 text-sm font-medium">+ You?</span>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-slate-600 text-sm">Price per Share</span>
                                    <span className="text-slate-900 font-bold text-lg">₦ 105,000</span>
                                </div>
                                <p className="text-xs text-slate-400">Includes ram, slaughtering, processing & packaging</p>
                            </div>

                            <button className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primaryDark transition-colors shadow-lg shadow-primary/20">
                                Secure Final Slot
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeatPool;