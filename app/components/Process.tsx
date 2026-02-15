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

            <div className="relative">
                {/* Vertical Line for Desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

                <div className="space-y-12 lg:space-y-0">
                    {steps.map((step, index) => (
                        <div key={step.name} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex-1 w-full lg:w-1/2 p-6">
                                <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                                    <h3 className="text-xl font-bold text-[#0a4373] mb-2">{index + 1}. {step.name}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-center w-12 h-12 bg-[#0a4373] rounded-full text-white font-bold z-10 shrink-0 my-4 lg:my-0">
                                {index + 1}
                            </div>

                            <div className="flex-1 w-full lg:w-1/2 p-6">
                                {/* Empty space for the alternating layout */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
