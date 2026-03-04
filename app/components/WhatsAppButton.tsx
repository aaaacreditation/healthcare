'use client';

import React from 'react';

export const WhatsAppButton = () => {
    const phoneNumber = '447487550737';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-7 h-7"
            >
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.907 15.907 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.602c-.388 1.094-2.27 2.092-3.13 2.158-.86.066-1.666.388-5.616-1.168-4.764-1.878-7.776-6.754-8.012-7.068-.234-.314-1.916-2.548-1.916-4.86s1.214-3.448 1.644-3.92c.432-.472.94-.59 1.254-.59.314 0 .628.002.902.016.29.016.678-.11 1.06.808.388.936 1.332 3.248 1.448 3.482.118.234.196.508.04.82-.158.314-.236.508-.47.784-.234.274-.494.614-.704.824-.236.236-.482.49-.208.962.276.472 1.226 2.022 2.632 3.276 1.81 1.614 3.338 2.114 3.81 2.348.472.234.748.196 1.022-.118.276-.314 1.178-1.372 1.49-1.844.314-.472.628-.39 1.06-.234.432.156 2.744 1.294 3.216 1.528.472.236.786.354.902.548.118.196.118 1.128-.27 2.222z" />
            </svg>
            <span className="absolute right-16 bg-white text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                Chat with us
            </span>
        </a>
    );
};
