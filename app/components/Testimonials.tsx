import React from 'react';
import { Section } from './ui/Section';
import { Building2 } from 'lucide-react';

const testimonials = [
    {
        organization: "City General Hospital",
        country: "United Arab Emirates",
        type: "Hospital Accreditation",
        year: "2024",
        logoConfig: "bg-blue-100 text-blue-600"
    },
    {
        organization: "Royal Care Clinic",
        country: "Saudi Arabia",
        type: "Ambulaory Care Center",
        year: "2023",
        logoConfig: "bg-green-100 text-green-600"
    },
    {
        organization: "Sunrise Rehabilitation",
        country: "Egypt",
        type: "Rehabilitation Center",
        year: "2024",
        logoConfig: "bg-orange-100 text-orange-600"
    },
    {
        organization: "Elite Dental Group",
        country: "Kuwait",
        type: "Dental Center",
        year: "2023",
        logoConfig: "bg-purple-100 text-purple-600"
    }
];

export const Testimonials = () => {
    return (
        <Section className="bg-white" id="testimonials">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Trusted by Leading Institutions
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    Join a growing network of accredited healthcare providers.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {testimonials.map((item, index) => (
                    <div key={index} className="flex flex-col items-center p-6 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md transition-shadow">
                        <div className={`h-16 w-16 mb-4 rounded-full flex items-center justify-center ${item.logoConfig}`}>
                            <Building2 className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 text-center">{item.organization}</h3>
                        <p className="text-sm text-gray-500 mb-2">{item.country}</p>
                        <div className="mt-auto pt-4 border-t border-gray-100 w-full text-center">
                            <span className="block text-xs font-semibold uppercase tracking-wide text-[#0a4373]">{item.type}</span>
                            <span className="block text-xs text-gray-400 mt-1">Accredited {item.year}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Logo Grid Placeholder */}
            <div className="mt-16 pt-8 border-t border-gray-100">
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Partnering with Excellence</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale">
                    {/* Placeholders for logos */}
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-12 bg-gray-200 rounded animate-pulse"></div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
