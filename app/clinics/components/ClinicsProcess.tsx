import React from 'react';
import { Section } from '../../components/ui/Section';

export const ClinicsProcess = () => {
    return (
        <Section className="bg-gray-50" id="process">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Accreditation Process
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                    AAA Clinics Accreditation is based on professional judgment, evidence review, and practical evaluation of real clinical practice.
                </p>
            </div>

            <div className="mt-12 flex justify-center">
                <img
                    src="/im.png"
                    alt="AAA Clinics Accreditation Process"
                    className="w-full max-w-5xl h-auto rounded-xl shadow-lg border border-gray-100"
                />
            </div>
        </Section>
    );
};
