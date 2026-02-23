'use client';

import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ShieldCheck, ClipboardCheck, Zap, Globe, TrendingUp, Plane } from 'lucide-react';
import { ApplicationModal } from './ApplicationModal';

const features = [
    {
        name: 'Improved patient safety & outcomes',
        icon: ShieldCheck,
        description: 'Establish robust protocols that directly enhance patient care and safety.'
    },
    {
        name: 'Regulatory readiness & compliance',
        icon: ClipboardCheck,
        description: 'Ensure your facility meets all national and international regulatory requirements.'
    },
    {
        name: 'Seamless Accreditation Process',
        icon: Zap,
        description: 'Experience a streamlined, efficient journey to accreditation with expert guidance.'
    },
    {
        name: 'Global recognition & credibility',
        icon: Globe,
        description: 'Join a network of elite healthcare providers recognized for excellence worldwide.'
    },
    {
        name: 'Better returns on investment',
        icon: TrendingUp,
        description: 'Optimize operations and improve efficiency, leading to better financial performance.'
    },
    {
        name: 'Enhanced Medical Tourism',
        icon: Plane,
        description: 'Attract international patients by demonstrating world-class standards.'
    }
];

export const WhyAAA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Section className="bg-white" id="why-aaa">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-[#0a4373]">Benefits</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Why AAA Accreditation Matters
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Investing in accreditation is investing in the future of your healthcare facility.
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {features.map((feature) => (
                        <div key={feature.name} className="flex flex-col items-start">
                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a4373]">
                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                {feature.name}
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">{feature.description}</p>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
            <div className="mt-16 flex justify-center">
                <Button size="lg" onClick={() => setIsModalOpen(true)}>
                    Start your accreditation journey
                </Button>
            </div>
            <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Section>
    );
};
