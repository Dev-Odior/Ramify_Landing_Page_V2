import React from 'react';
import { Apple, Play } from 'lucide-react';

const DownloadApp = () => {
    return (
        <section id="download-app" className="py-20 bg-primary overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 border border-white/20">COMING SOON</div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ramify App Arriving Early 2026</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-lg mx-auto md:mx-0">We are building the ultimate savings and delivery experience. Stay tuned for the official launch on iOS and Android.</p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-70 cursor-not-allowed">
                            <button disabled className="flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-3.5 rounded-xl transition-colors font-bold cursor-not-allowed">
                                <Apple size={24} />
                                <span>App Store</span>
                            </button>
                            <button disabled className="flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-6 py-3.5 rounded-xl transition-colors font-bold cursor-not-allowed">
                                <Play size={24} fill="currentColor" />
                                <span>Google Play</span>
                            </button>
                        </div>
                        <p className="text-white/40 text-xs mt-3 font-medium">Buttons will be active upon launch</p>
                    </div>

                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="bg-white p-4 rounded-3xl w-64 h-64 flex flex-col items-center justify-center text-center">
                            <div className="w-48 h-48 bg-slate-900 rounded-xl mb-3 flex items-center justify-center text-white/50 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                                    <span className="text-4xl font-black text-white/10 -rotate-12">2026</span>
                                </div>
                            </div>
                            <p className="font-bold text-slate-900 text-sm">Join the waitlist soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;