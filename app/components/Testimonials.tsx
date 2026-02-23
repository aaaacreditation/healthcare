import React from 'react';
import { Section } from './ui/Section';

const clinics = [
    {
        name: "Domus Salutis Clinic",
        location: "Legnago - Italy",
        flag: "/accreditedorganizations/flag/italy.png",
        logo: "/accreditedorganizations/domus.jpeg",
        layout: "left"
    },
    {
        name: "Debeauty Clinic",
        location: "Colorado - USA",
        flag: "/accreditedorganizations/flag/usa.webp",
        logo: "/accreditedorganizations/debeauty.jpeg",
        layout: "right"
    },
    {
        name: "Monarch Master Injectors",
        location: "Texas - USA",
        flag: "/accreditedorganizations/flag/usa.webp",
        logo: "",
        layout: "left"
    },
    {
        name: "ZSK Aesthetics",
        location: "Islamabad - Pakistan",
        flag: "",
        logo: "",
        layout: "right"
    },
    {
        name: "Indian Medical Aesthetic",
        location: "Mumbai - India",
        flag: "",
        logo: "",
        layout: "left"
    },
    {
        name: "Millennia Wellness",
        location: "Texas - USA",
        flag: "/accreditedorganizations/flag/usa.webp",
        logo: "",
        layout: "right"
    }
];

export const Testimonials = () => {
    return (
        <Section className="bg-white" id="testimonials">
            <div className="mx-auto max-w-4xl text-center mb-16">
                <div className="bg-[#0a4373] text-white py-4 px-8 md:px-16 rounded-3xl inline-block shadow-md">
                    <h2 className="text-xl md:text-2xl font-bold tracking-wide">
                        Be Part of our Accredited Cosmetology Clinics
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 max-w-6xl mx-auto px-4">
                {clinics.map((clinic, index) => (
                    <div key={index} className="flex items-center justify-between w-full">
                        {clinic.layout === 'left' ? (
                            <>
                                {/* Flag */}
                                <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full overflow-hidden flex items-center justify-center bg-transparent">
                                    {clinic.flag ? <img src={clinic.flag} alt="Flag" className="w-full h-full object-cover" /> : <div className="w-10 h-10 rounded-full bg-gray-200"></div>}
                                </div>
                                {/* Name */}
                                <div className="flex-1 px-4 text-center">
                                    <h3 className="text-base md:text-lg font-bold text-[#0a4373]">{clinic.name}</h3>
                                    <p className="text-xs md:text-sm text-gray-500">{clinic.location}</p>
                                </div>
                                {/* Logo */}
                                <div className="w-20 md:w-24 h-16 shrink-0 flex items-center justify-end">
                                    {clinic.logo ? <img src={clinic.logo} alt="Logo" className="max-w-full max-h-full object-contain" /> : <div className="text-xs text-transparent">Logo</div>}
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Logo */}
                                <div className="w-20 md:w-24 h-16 shrink-0 flex items-center justify-start">
                                    {clinic.logo ? <img src={clinic.logo} alt="Logo" className="max-w-full max-h-full object-contain" /> : <div className="text-xs text-transparent">Logo</div>}
                                </div>
                                {/* Name */}
                                <div className="flex-1 px-4 text-center">
                                    <h3 className="text-base md:text-lg font-bold text-[#0a4373]">{clinic.name}</h3>
                                    <p className="text-xs md:text-sm text-gray-500">{clinic.location}</p>
                                </div>
                                {/* Flag */}
                                <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full overflow-hidden flex items-center justify-center bg-transparent">
                                    {clinic.flag ? <img src={clinic.flag} alt="Flag" className="w-full h-full object-cover" /> : <div className="w-10 h-10 rounded-full bg-gray-200"></div>}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* The "Partnering with Excellence" section has been removed entirely */}
        </Section>
    );
};
