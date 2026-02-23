'use client';

import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { CheckCircle2, FileText } from 'lucide-react';
import { ApplicationModal } from './ApplicationModal';

const eligibleEntities = [
    "Public & private hospitals",
    "Specialty clinics",
    "Multi-specialty clinics",
    "Dental clinics",
    "Day care surgery centers",
    "Rehabilitation centers"
];

export const Eligibility = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Section className="bg-[#0a4373] text-white" id="eligibility">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                        Who Is Eligible?
                    </h2>
                    <p className="text-lg text-blue-100 mb-8">
                        AAA Accreditation is designed for a wide range of healthcare facilities committed to quality.
                    </p>
                    <ul className="space-y-4">
                        {eligibleEntities.map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <CheckCircle2 className="h-6 w-6 text-cyan-300 shrink-0" />
                                <span className="text-lg font-medium text-white">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Ready to Take the Next Step?</h3>
                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full h-12 px-8 text-base font-medium rounded-md inline-flex items-center justify-center transition-colors shadow-sm"
                            style={{ backgroundColor: '#0a4373', color: '#ffffff' }}
                            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#08365d'; }}
                            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#0a4373'; }}
                        >
                            Apply for Hospital Accreditation
                        </button>
                        <a
                            href="https://aaa-accreditation.org/healthcare-accreditation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-12 px-8 text-base font-medium rounded-md inline-flex items-center justify-center transition-colors border-2"
                            style={{ borderColor: '#0a4373', color: '#0a4373', backgroundColor: 'transparent' }}
                            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#f0f7ff'; }}
                            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                        >
                            <FileText className="mr-2 h-5 w-5" />
                            Healthcare Standards – Overview PDF
                        </a>
                    </div>
                </div>
            </div>
            <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Section>
    );
};
