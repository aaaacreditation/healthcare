import React from 'react';
import { Section } from './ui/Section';
import { Globe2, Users, Building2 } from 'lucide-react';

const stats = [
    { id: 1, name: 'Countries Presence', value: '53+', icon: Globe2 },
    { id: 2, name: 'Team Members', value: '200+', icon: Users }, // Placeholder number
    { id: 3, name: 'Accredited Facilities', value: '500+', icon: Building2 }, // Placeholder number
];

export const GlobalPresence = () => {
    return (
        <Section className="bg-[#0a4373] text-white">
            <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Global Presence</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-200">
                        AAA’s reach extends across 53 countries, bringing a consistent, world-class standard of excellence to diverse industries.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 text-center sm:grid-cols-3 lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col items-center justify-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
                            <stat.icon className="h-8 w-8 text-white mb-4" />
                            <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                            <dd className="text-4xl font-bold tracking-tight text-white">{stat.value}</dd>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <div className="rounded-xl overflow-hidden bg-white/5 p-4 text-center">
                        <div className="relative aspect-[2/1] w-full rounded-lg overflow-hidden">
                            <img
                                src="/map.png"
                                alt="AAA Global Presence Map"
                                className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Leadership & Governance</h3>
                        <p className="text-gray-300">
                            AAA’s reach extends across 53 countries, bringing a consistent, world-class standard of excellence to diverse industries. At its core, AAA is deeply committed to healthcare ensuring hospitals, clinics, and medical institutions meet the highest benchmarks of safety, service, and patient care. AAA’s story is one of connection, linking institutions to global best practices, fostering confidence in every certificate issued, and ultimately, building a new generation of trust.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Team/Leadership placeholder */}
                        <div className="aspect-video bg-white/10 rounded-xl flex items-center justify-center">
                            <span className="text-gray-400">Leadership Overview Photo</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
