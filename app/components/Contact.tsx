'use client';

import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Mail, Phone, MapPin, Globe, CheckCircle, Loader2 } from 'lucide-react';

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            organization: formData.get('organization'),
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Submission failed');

            setIsSuccess(true);
            form.reset();
            setTimeout(() => setIsSuccess(false), 4000);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section className="bg-gray-50" id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Ready to start your accreditation journey? Our team is here to guide you every step of the way.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-lg shadow-sm text-[#0a4373]">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Email Us</h3>
                                <p className="text-gray-600">info@aaa-accreditation.org</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-lg shadow-sm text-[#0a4373]">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Call Us</h3>
                                <p className="text-gray-600">T: +1 (571) 601 2616</p>
                                <p className="text-gray-600">Fax: +1 (571) 376 6582</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-lg shadow-sm text-[#0a4373]">
                                <Globe className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">International Operations</h3>
                                <p className="text-gray-600">Tel./Whatsapp: +44 (748) 755 0737</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-lg shadow-sm text-[#0a4373]">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Visit Us</h3>
                                <p className="text-gray-600">8609 Westwood Center Drive</p>
                                <p className="text-gray-600">Tysons Corner, VA 22182, USA</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-6">Send an Inquiry</h3>

                    {isSuccess && (
                        <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm">
                            <CheckCircle className="h-5 w-5 shrink-0" />
                            Thank you! Your inquiry has been submitted successfully.
                        </div>
                    )}

                    {error && (
                        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                            {error}
                        </div>
                    )}

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                                <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a4373] focus:border-transparent outline-none transition-all" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                                <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a4373] focus:border-transparent outline-none transition-all" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                            <input type="email" id="contactEmail" name="email" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a4373] focus:border-transparent outline-none transition-all" />
                        </div>

                        <div>
                            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                            <input type="text" id="organization" name="organization" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a4373] focus:border-transparent outline-none transition-all" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                            <textarea id="message" name="message" required rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a4373] focus:border-transparent outline-none transition-all"></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-12 px-8 text-base font-semibold rounded-md inline-flex items-center justify-center transition-all shadow-sm text-white bg-[#0a4373] hover:bg-[#08365d] disabled:opacity-60"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                                    Sending...
                                </>
                            ) : 'Send Inquiry'}
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
};
