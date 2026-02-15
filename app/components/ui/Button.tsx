import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string; // Allow overriding classes if needed
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary text-white hover:bg-[#08365d] shadow-sm", // Darker shade for hover
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        outline: "border border-input bg-background hover:bg-gray-100 text-primary border-primary",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
    };

    const sizes = {
        sm: "h-9 px-3 text-xs",
        md: "h-10 py-2 px-4 text-sm",
        lg: "h-12 px-8 text-base",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
