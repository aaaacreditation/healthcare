import React from 'react';
import Image from 'next/image';
import { Section } from '../../components/ui/Section';
import { ShieldCheck, Building2, Star, Globe2 } from 'lucide-react';

const benefits = [
    {
        icon: ShieldCheck,
        title: 'Strengthened Patient Trust',
        description: 'Accreditation demonstrates verified commitment to patient safety and professional care standards.',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Building2,
        title: 'Protection of Brand Reputation',
        description: 'Structured governance reduces clinical, operational, and reputational risk.',
        gradient: 'from-indigo-500 to-blue-500',
    },
    {
        icon: Star,
        title: 'Competitive Differentiation',
        description: 'Stand apart through recognized accreditation aligned with international standards.',
        gradient: 'from-cyan-500 to-teal-500',
    },
    {
        icon: Globe2,
        title: 'Positioning for Medical Tourism & International Patients',
        description: 'Align your clinic with globally benchmarked healthcare expectations.',
        gradient: 'from-teal-500 to-emerald-500',
    },
];

export const ClinicsAbout = () => {
    return (
        <Section className="bg-gray-50" id="about">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Why Clinics Choose the American Accreditation Association (AAA)
                </h2>
                <p className="mt-4 text-lg text-[#0a4373] font-medium">
                    A Credible Accreditation Partner for Clinics Worldwide
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 mb-16">
                <p className="text-lg leading-8 text-gray-600">
                    Outpatient care involves real clinical responsibility and reputation impact. Clinics are expected to show clear, structured systems that protect patients and ensure professional practice.
                </p>
                <p className="text-lg leading-8 text-gray-600">
                    AAA Clinic Accreditation provides internationally recognized validation that your clinic meets globally benchmarked standards for safety, governance, and quality — tailored specifically for outpatient and specialty settings.
                </p>
                <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4">
                    <img src="/isquaeea.jpg" alt="ISQua EEA" className="h-10 w-auto object-contain" />
                    <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>AAA Healthcare Accreditation Standards</strong> have been assessed by ISQua EEA, confirming alignment with international best practice requirements.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} text-white mb-5 shadow-lg`}>
                            <benefit.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {benefit.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Global Presence */}
            <div className="mt-20 text-center">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
                    Global Presence
                </h3>
                <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                    AAA operates in more than <span className="font-semibold text-[#0a4373]">53 countries</span> across the globe, bringing world-class accreditation standards to healthcare facilities worldwide.
                </p>
                <div className="relative w-full max-w-4xl mx-auto">
                    <Image
                        src="/map.png"
                        alt="AAA Global Operations Map — Present in over 53 countries"
                        width={1200}
                        height={600}
                        className="w-full h-auto rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </Section>
    );
};
