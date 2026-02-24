import React from 'react';
import { Section } from './ui/Section';

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

            <div className="mt-12 flex justify-center">
                <img
                    src="/process.png"
                    alt="AAA Accreditation Process"
                    className="w-full max-w-5xl h-auto rounded-xl shadow-lg border border-gray-100"
                />
            </div>
        </Section>
    );
};
