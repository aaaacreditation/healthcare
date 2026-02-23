import React from 'react';
import { Section } from './ui/Section';

const teamMembers = [
    { name: 'Dawn', image: '/team/Dawn.jpeg' },
    { name: 'Kara', image: '/team/Kara.jpeg' },
    { name: 'Michael', image: '/team/Michael.png' },
    { name: 'Willena', image: '/team/Willena.jpeg' },
];

export const Team = () => {
    return (
        <Section className="bg-gray-50" id="team">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
                <h2 className="text-base font-semibold leading-7 text-[#0a4373] uppercase tracking-wide">
                    Our People
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Meet the Leadership and Team
                </p>
                <p className="mt-4 text-lg text-gray-600">
                    Dedicated professionals committed to elevating healthcare standards worldwide.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-4">
                {teamMembers.map((member) => (
                    <div key={member.name} className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-32 h-32 mb-6 rounded-full overflow-hidden shadow-inner flex shrink-0 border-4 border-gray-50 bg-gray-100">
                            <img
                                src={member.image}
                                alt={`Portrait of ${member.name}`}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-sm font-medium text-[#0a4373]">Leadership Team</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
