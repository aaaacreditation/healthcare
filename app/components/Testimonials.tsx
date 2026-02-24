import React from 'react';
import { Section } from './ui/Section';

const clinics = [
    {
        name: "Global Medical City",
        location: "Cairo - Egypt",
        logo: "/accreditedorganizations/globalmediaclcity.jpeg",
    },
    {
        name: "Domus Salutis Clinic",
        location: "Legnago - Italy",
        logo: "/accreditedorganizations/domus.jpeg",
    },
    {
        name: "Debeauty Clinic",
        location: "Colorado - USA",
        logo: "/accreditedorganizations/debeauty.jpeg",
    },
    {
        name: "Millennia Wellness",
        location: "Texas - USA",
        logo: "/accreditedorganizations/millennia.jpeg",
    }
];

export const Testimonials = () => {
    return (
        <Section className="bg-white" id="testimonials">
            <div className="mx-auto max-w-4xl text-center mb-16">
                <div className="bg-[#0a4373] text-white py-4 px-8 md:px-16 rounded-3xl inline-block shadow-md">
                    <h2 className="text-xl md:text-2xl font-bold tracking-wide">
                        Be a part of our Accredited Organizations
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 max-w-5xl mx-auto px-4">
                {clinics.map((clinic, index) => (
                    <div key={index} className="flex items-center gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        {/* Logo */}
                        <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 p-2 text-center overflow-hidden">
                            {clinic.logo ? (
                                <img src={clinic.logo} alt={`${clinic.name} Logo`} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-xs text-gray-400 font-medium px-2">Logo Pending</span>
                            )}
                        </div>
                        {/* Name */}
                        <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-bold text-[#0a4373]">{clinic.name}</h3>
                            <p className="text-sm md:text-base text-gray-500 mt-1">{clinic.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
