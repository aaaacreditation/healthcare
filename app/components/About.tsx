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
                        AAA provides accreditation to the healthcare sector in accordance with the AAA Accreditation Standards for Healthcare Facilities.
                        The AAA standards have been assessed and accredited by the International Society for Quality in Health Care (ISQua EEA)
                        against the Guidelines and Principles for the Development of Health and Social Care Standards, 5th Edition, Version 1.0, September 2018.
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        This means that the development of and content of AAA’s Accreditation Standards for Healthcare Facilities has been assessed and found to meet international best practice requirements.
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
