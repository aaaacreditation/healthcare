'use client';

import React from 'react';
import { Section } from '../../components/ui/Section';
import { ShieldCheck, HeartPulse, UserCheck, Building, BarChart3 } from 'lucide-react';

const evaluationAreas = [
    {
        icon: ShieldCheck,
        title: 'Patient-Centered Care & Rights',
        description: 'Respecting patient dignity, informed consent, proper identification, and confidentiality.',
        color: 'from-blue-500 to-blue-600',
        iconBg: 'bg-blue-500/10',
        borderColor: 'border-blue-500/20',
    },
    {
        icon: HeartPulse,
        title: 'Clinical Care & Patient Safety',
        description: 'Appropriate patient assessment, infection prevention measures, and emergency preparedness relevant to the clinic\'s services.',
        color: 'from-rose-500 to-pink-600',
        iconBg: 'bg-rose-500/10',
        borderColor: 'border-rose-500/20',
    },
    {
        icon: UserCheck,
        title: 'Workforce & Clinical Competence',
        description: 'Qualified and licensed professionals working within clearly defined scopes of practice.',
        color: 'from-emerald-500 to-teal-600',
        iconBg: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/20',
    },
    {
        icon: Building,
        title: 'Facilities, Equipment & Environment',
        description: 'Safe clinical facilities with appropriate and properly maintained equipment.',
        color: 'from-amber-500 to-orange-600',
        iconBg: 'bg-amber-500/10',
        borderColor: 'border-amber-500/20',
    },
    {
        icon: BarChart3,
        title: 'Governance, Quality & Improvement',
        description: 'Defined leadership responsibility, incident management, and ongoing quality improvement systems.',
        color: 'from-violet-500 to-purple-600',
        iconBg: 'bg-violet-500/10',
        borderColor: 'border-violet-500/20',
    },
];

export const ClinicsEvaluation = () => {
    return (
        <Section className="bg-white" id="evaluation">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
                <h2 className="text-base font-semibold leading-7 text-[#0a4373] uppercase tracking-wide">
                    Standards & Evaluation
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    What We Evaluate in Your Clinic
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    AAA Clinics Accreditation applies structured healthcare standards tailored to outpatient and specialty clinics. Evaluation is proportionate to the clinic&apos;s scope of services and level of clinical risk.
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-6">
                    {evaluationAreas.map((area, index) => (
                        <div key={index} className={`flex flex-col lg:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''}`}>
                            <dt className="flex items-center gap-4 text-base font-semibold leading-7 text-gray-900 border-b border-gray-100 pb-4 mb-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0a4373] text-white shadow-md">
                                    <area.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                {area.title}
                            </dt>
                            <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">{area.description}</p>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </Section>
    );
};
