import React from 'react';
import { Section } from './ui/Section';

export const GlobalPresence = () => {
    return (
        <Section className="bg-[#0a4373] text-white">
            <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">Leadership & Governance</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-200 max-w-4xl mx-auto">
                        At its core, AAA is deeply committed to healthcare ensuring hospitals, clinics, and medical institutions meet the highest benchmarks of safety, service, and patient care. AAA’s story is one of connection, linking institutions to global best practices, fostering confidence in every certificate issued, and ultimately, building a new generation of trust.
                    </p>
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
            </div>
        </Section>
    );
};
