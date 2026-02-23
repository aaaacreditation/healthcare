import React from 'react';
import { Section } from './ui/Section';
import { ArrowDown } from 'lucide-react';

const steps = [
    { name: 'Application & Eligibility Review', description: 'Submit your application for initial assessment.' },
    { name: 'Gap Analysis', description: 'Identify areas for improvement against standards.' },
    { name: 'Documentation Review', description: 'Comprehensive review of policies and procedures.' },
    { name: 'On-site / Remote Survey', description: 'Detailed inspection by AAA surveyors.' },
    { name: 'Accreditation Decision', description: 'Final review and awarding of accreditation status.' },
    { name: 'Continuous Quality Improvement', description: 'Periodic survey at 18 months to ensure ongoing compliance.' },
];

export const Process = () => {
    return (
        <Section className="bg-gray-50" id="process">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Accreditation Process
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    A clear, structured path to excellence.
                </p>
            </div>

            <div className="relative mt-12 hidden lg:block">
                {/* Horizontal Line for Desktop */}
                <div className="absolute top-6 left-[8%] right-[8%] h-0.5 bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative">
                {steps.map((step, index) => (
                    <div key={step.name} className="relative flex flex-col items-center">
                        {/* Number Circle */}
                        <div className="flex items-center justify-center w-12 h-12 bg-[#0a4373] rounded-full text-white font-bold z-10 mb-6 shrink-0 shadow-md ring-4 ring-gray-50">
                            {index + 1}
                        </div>

                        {/* Content */}
                        <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 text-center w-full h-full flex flex-col items-center flex-1 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-shadow">
                            <h3 className="text-base font-bold text-[#0a4373] mb-3 leading-snug">{step.name}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
