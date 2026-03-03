'use client';

import React, { useState } from 'react';
import { Section } from '../../components/ui/Section';
import { ApplicationModal } from '../../components/ApplicationModal';

export const ClinicsEligibility = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-6 md:py-8 bg-white" id="eligibility">
            <div className="flex justify-center">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="h-14 px-12 text-lg font-semibold rounded-xl inline-flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: '#0a4373', color: '#ffffff' }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#08365d'; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#0a4373'; }}
                >
                    Apply Now
                </button>
            </div>
            <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} source="clinics" />
        </section>
    );
};
