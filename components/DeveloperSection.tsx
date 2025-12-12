import React from 'react';
import { Code2, Download } from 'lucide-react';
import Button from '@/components/Button';

const DeveloperSection = () => {
    const handleDownload = () => {
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        // Create a time string safe for filenames (HH-MM-SS)
        const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
        
        const htmlContent = document.documentElement.outerHTML;
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ramify-landing-page-${dateStr}-${timeStr}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <section className="py-12 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                        <Code2 size={28} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-slate-900 text-lg">Developer Access</h3>
                            <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-wide">
                                v1.0.3
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 max-w-md">
                            Download the current source snapshot for local development or archival.
                        </p>
                    </div>
                </div>
                <Button 
                    variant="outline" 
                    onClick={handleDownload} 
                    className="gap-2 border-slate-300 text-slate-700 hover:bg-white hover:text-primary bg-white shadow-sm"
                >
                    <Download size={18} />
                    Download Source
                </Button>
            </div>
        </section>
    );
};

export default DeveloperSection;