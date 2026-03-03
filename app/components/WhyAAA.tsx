'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
        <Section className="bg-white" id="standards">
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
            <div className="mt-16 flex justify-center">
                <Button size="lg" onClick={() => setIsModalOpen(true)}>
                    Start your accreditation journey
                </Button>
            </div>
            <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </Section>
    );
};
