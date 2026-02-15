import React from 'react';

interface SectionProps {
    id?: string;
    className?: string; // Allow custom classes like background colors
    children: React.ReactNode;
    containerClass?: string;
}

export const Section: React.FC<SectionProps> = ({
    id,
    className = "bg-white",
    children,
    containerClass = ""
}) => {
    return (
        <section id={id} className={`py-16 md:py-24 ${className}`}>
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ${containerClass}`}>
                {children}
            </div>
        </section>
    );
};
