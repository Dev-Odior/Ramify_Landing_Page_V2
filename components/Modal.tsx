import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
                className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-200 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between p-5 md:p-6 border-b border-slate-100 shrink-0">
                    <h3 className="text-xl font-bold text-slate-900 pr-8">{title}</h3>
                    <button 
                        onClick={onClose}
                        className="absolute right-4 top-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-600"
                    >
                        <X size={20} />
                    </button>
                </div>
                
                <div className="p-5 md:p-6 overflow-y-auto custom-scrollbar leading-relaxed text-slate-600 whitespace-pre-wrap">
                    {children}
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-2xl shrink-0 flex justify-end">
                    <button 
                        onClick={onClose}
                        className="px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
            <div className="absolute inset-0 -z-10" onClick={onClose}></div>
        </div>
    );
};

export default Modal;