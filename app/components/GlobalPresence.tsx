import React from 'react';
import { Section } from './ui/Section';
import { Globe2, Users, Building2, ShieldCheck, ClipboardCheck, Zap, Globe, TrendingUp, Plane } from 'lucide-react';

const stats = [
    { id: 1, name: 'Countries Presence', value: '53+', icon: Globe2 },
    { id: 2, name: 'Team Members', value: '200+', icon: Users }, // Placeholder number
    { id: 3, name: 'Accredited Facilities', value: '500+', icon: Building2 }, // Placeholder number
];

const listItems = [
    { name: 'Improved patient safety & outcomes', icon: ShieldCheck },
    { name: 'Regulatory readiness & compliance', icon: ClipboardCheck },
    { name: 'Seamless Accreditation Process', icon: Zap },
    { name: 'Global recognition & credibility', icon: Globe },
    { name: 'Better returns on investment', icon: TrendingUp },
    { name: 'Enhanced Medical Tourism', icon: Plane }
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
                    <div className="relative bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/5">
                        <h4 className="text-xl font-bold text-white mb-6">Why AAA Accreditation Matters</h4>
                        <ul className="space-y-4">
                            {listItems.map((item, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <div className="p-2 bg-blue-500/20 rounded-lg shrink-0">
                                        <item.icon className="h-5 w-5 text-cyan-300" />
                                    </div>
                                    <span className="text-gray-100 font-medium">{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};
