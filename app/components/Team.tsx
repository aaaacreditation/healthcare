'use client';

import React from 'react';
import { Section } from './ui/Section';

const teamMembers = [
    {
        name: 'Dr. Ruhina Khan',
        title: 'Business Development Manager – Healthcare Accreditation',
        image: '/team/Ruhina.jpg',
        bio: 'Dr. Ruhina Khan is a healthcare operations strategist and accreditation expert dedicated to advancing international quality standards. She works closely with healthcare institutions to strengthen compliance, optimize systems, and build globally recognized credibility through structured, sustainable growth strategies.',
    },
    {
        name: 'Willena McGee',
        title: 'Board Member',
        image: '/team/Willena.jpeg',
        bio: 'Willena is an AAA board member and Founder and CEO of Uplifted Abilities. With over 20 years of experience in healthcare, project management, education, and consulting services, she guides new and existing Non-Emergency Medical Transportation (NEMT) providers through accreditation, regulatory compliance, and business planning.',
    },
    {
        name: 'Antonia Vitori',
        title: 'Healthcare Accreditation Surveyor',
        image: '/team/antonia.jpg',
        bio: 'Antonia brings many years of experience in the healthcare compliance sector and currently serves as an AAA Healthcare Accreditation Surveyor. She graduated from the Royal College of Surgeons in Ireland and is the Chief Governance, Risk and Compliance Officer at Brookhaven Healthcare Ireland. She previously held the position of Compliance, Quality and Safety Manager at Cowper Care Ireland.',
    },
    {
        name: 'Dr. Rodolfo Buccico',
        title: 'Accreditation Advisor',
        image: '/team/rodolfo.jpg',
        bio: 'Dr. Rodolfo Buccico is a seasoned medical and public health professional with extensive expertise in preventive medicine, epidemiology, and healthcare management. He currently serves as a Chief Medical Officer and advisor, bringing deep experience in public health strategy, real-world evidence, and patient-centred care. With a background in hygiene and preventive medicine from the Università Federico II di Napoli, he has held leadership roles including director of clinical services and senior healthcare administration.',
    },
    {
        name: 'Orlando Santana',
        title: 'Board Member',
        image: '/team/Orlando.jpeg',
        bio: 'With over 30 years of experience in development, Health and Safety across multinational organizations including American Airlines as the International Safety Head Lead, Orlando brings a wealth of expertise and a deep commitment to quality education in accreditation.',
    },
    {
        name: 'Dr. Dawn Lindsey',
        title: 'Board Member',
        image: '/team/Dawn.jpeg',
        bio: 'Dr. Dawn brings more than 25 years of experience in regulatory compliance, quality assurance, and operational governance. She serves as the President and CEO of Vari-Tek LLC. Dr. Dawn holds a PhD in Public Policy and Social Change, as well as a Doctorate in Educational Leadership. She also maintains multiple professional certifications, including Six Sigma, ISO and internal auditing, OSHA reporting, and Title IX compliance.',
    },
    {
        name: 'Kara Heinrichs',
        title: 'Board Member',
        image: '/team/Kara.jpeg',
        bio: 'Kara Heinrichs is a senior Learning and Leadership Development professional with extensive experience designing, implementing, and evaluating large-scale training and development programs across enterprise environments. She has led onboarding, compliance-aligned learning systems, and performance evaluation frameworks for global organizations including Meta, LiveRamp, Auth0, and the Port of Seattle. With a PhD in Organizational Development and strong expertise in governance, dashboards, and program evaluation, Kara brings a structured, quality-driven approach to workforce development.',
    },
    {
        name: 'Michael Peters',
        title: 'Board Member',
        image: '/team/Michael.png',
        bio: 'Michael is the CEO of Lazarus Alliance Certification and has served as an independent information Cyber security consultant, executive, researcher and author. He is an internationally recognized and awarded security expert with years of IT and business leadership experience. He has contributed significantly to curriculum development for graduate degree programs in information security, advanced technology, cyberspace law, and privacy, and to industry standard professional certifications.',
    },
];

export const Team = () => {
    return (
        <Section className="bg-gray-50" id="team">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
                <h2 className="text-base font-semibold leading-7 text-[#0a4373] uppercase tracking-wide">
                    Our Team
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Meet our Team
                </p>
                <p className="mt-4 text-lg text-gray-600">
                    Dedicated professionals committed to elevating healthcare standards worldwide.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-4">
                {teamMembers.map((member) => (
                    <div key={member.name} className="flip-card group">
                        <div className="flip-card-inner">
                            {/* Front */}
                            <div className="flip-card-front bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                                <div className="w-32 h-32 mb-6 rounded-full overflow-hidden shadow-inner flex shrink-0 border-4 border-gray-50 bg-gray-100">
                                    <img
                                        src={member.image}
                                        alt={`Portrait of ${member.name}`}
                                        className="w-full h-full object-cover object-top"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            if (target.parentElement) {
                                                target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-[#0a4373] text-white text-3xl font-bold">${member.name.split(' ').map(n => n[0]).join('')}</div>`;
                                            }
                                        }}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{member.name}</h3>
                                <p className="text-sm font-medium text-[#0a4373] text-center">{member.title}</p>
                                <p className="text-xs text-gray-400 mt-3">Hover to read more</p>
                            </div>

                            {/* Back */}
                            <div className="flip-card-back bg-[#0a4373] p-6 rounded-2xl shadow-sm border border-[#0a4373] flex flex-col justify-center">
                                <h3 className="text-lg font-bold text-white mb-1 text-center">{member.name}</h3>
                                <p className="text-xs font-medium text-blue-200 mb-4 text-center">{member.title}</p>
                                <p className="text-sm text-gray-200 leading-relaxed text-center overflow-y-auto max-h-[200px] custom-scrollbar">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
