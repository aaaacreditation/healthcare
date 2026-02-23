import React from 'react';
import { Section } from './ui/Section';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export const About = () => {
    return (
        <Section className="bg-gray-50" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="text-[#0a4373] font-semibold tracking-wide uppercase text-sm">About Us</span>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Driving Excellence in Healthcare
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        The American Accreditation Association (AAA) stands as an independent, International Society for Quality in Health Care (ISQua) recognized accreditation body having its credibility backed by recognition from the US government.
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        AAA’s reach extends across 53 countries, bringing a consistent, world-class standard of excellence to diverse industries. At its core, AAA is deeply committed to healthcare ensuring hospitals, clinics, and medical institutions meet the highest benchmarks of safety, service, and patient care.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-50 rounded-lg text-[#0a4373]">
                                <Target className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
                        </div>
                        <p className="text-gray-600">
                            Deliver independent, international accreditation programs that build trust and confidence in healthcare quality and safety.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-50 rounded-lg text-[#0a4373]">
                                <Eye className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
                        </div>
                        <p className="text-gray-600">
                            To provide globally accepted healthcare accreditation that protects public health, safety, and the environment while exceeding stakeholder expectations.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
