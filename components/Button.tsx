import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidth = false, className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-sm md:text-base";
    
    const variants = {
        primary: "bg-primary text-white hover:bg-primaryDark hover:shadow-lg focus:ring-primary",
        secondary: "bg-secondary text-white hover:bg-amber-600 hover:shadow-lg focus:ring-secondary",
        outline: "border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary",
        ghost: "text-slate-600 hover:text-primary hover:bg-slate-100",
    };

    const widthStyle = fullWidth ? "w-full" : "";

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;