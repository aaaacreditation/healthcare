'use client';

import React from 'react';
import { Section } from './ui/Section';

const images = [
    { src: '/images/gallery-1.jpeg', alt: 'AAA Healthcare Accreditation 1' },
    { src: '/images/gallery-2.jpeg', alt: 'AAA Healthcare Accreditation 2' },
    { src: '/images/gallery-3.jpeg', alt: 'AAA Healthcare Accreditation 3' },
    { src: '/images/gallery-4.jpeg', alt: 'AAA Healthcare Accreditation 4' },
    { src: '/images/gallery-5.jpeg', alt: 'AAA Healthcare Accreditation 5' },
];

// Duplicate the images to create seamless looping
const doubledImages = [...images, ...images];

export const Gallery = () => {
    return (
        <Section className="bg-gray-50 !py-12 md:!py-16 overflow-hidden" id="gallery">
            <div className="text-center mb-10">
                <h2 className="text-base font-semibold leading-7 text-[#0a4373] uppercase tracking-wide">
                    Gallery
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Excellence in Action
                </p>
            </div>

            {/* Row 1 – scrolls left */}
            <div className="relative mb-4 overflow-hidden">
                {/* Gradient masks for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                <div className="marquee-track marquee-left">
                    {doubledImages.map((img, i) => (
                        <div
                            key={`row1-${i}`}
                            className="flex-shrink-0 w-72 h-48 mx-2 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2 – scrolls right */}
            <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                <div className="marquee-track marquee-right">
                    {doubledImages.map((img, i) => (
                        <div
                            key={`row2-${i}`}
                            className="flex-shrink-0 w-72 h-48 mx-2 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
