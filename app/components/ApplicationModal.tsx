'use client';

import React, { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const countries = [
    "United States", "Canada", "United Kingdom", "United Arab Emirates",
    "Saudi Arabia", "Egypt", "Kuwait", "Italy", "Pakistan", "India", "Other"
];

const organizationTypes = [
    "Hospital", "Clinic", "Diagnostic Center", "Dental Clinic",
    "Primary Care", "Specialty Center", "Wellness Facility",
    "Training Institute", "Other"
];

export const ApplicationModal = ({ isOpen, onClose }: ApplicationModalProps) => {
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
            orgName: formData.get('orgName'),
            city: formData.get('city'),
            state: formData.get('state'),
            zip: formData.get('zip'),
            country: formData.get('country'),
            contactPerson: formData.get('contactPerson'),
            role: formData.get('role'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            orgType: formData.get('orgType'),
            employees: formData.get('employees'),
            website: formData.get('website'),
            social: formData.get('social'),
        };

        try {
            const res = await fetch('/api/applications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Submission failed');

            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
            }, 2500);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6">
            <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl my-auto animate-fade-in-up">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-900">Application Form</h3>
                    <button
                        onClick={onClose}
                        className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 overflow-y-auto max-h-[75vh]">
                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-16">
                            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h4>
                            <p className="text-gray-600 text-center">Thank you for your interest. Our team will review your application and get back to you shortly.</p>
                        </div>
                    ) : (
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Section 1: Organization Details */}
                            <div>
                                <h4 className="text-lg font-semibold text-[#0a4373] mb-4 border-b border-gray-100 pb-2">Organization Information</h4>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="orgName" className="block text-sm font-medium text-gray-700 mb-1">Organization Name*</label>
                                        <input type="text" id="orgName" name="orgName" required className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#0a4373] focus:outline-none focus:ring-1 focus:ring-[#0a4373]" />
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City*</label>
                                        <input type="text" id="city" name="city" required className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#0a4373] focus:outline-none focus:ring-1 focus:ring-[#0a4373]" />
                                    </div>
                                    <div>
                                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State/Province*</label>
                                        <input type="text" id="state" name="state" required className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#0a4373] focus:outline-none focus:ring-1 focus:ring-[#0a4373]" />
                                    </div>
                                    <div>
                                        <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">ZIP/Postal Code*</label>
                                        <input type="text" id="zip" name="zip" required className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#0a4373] focus:outline-none focus:ring-1 focus:ring-[#0a4373]" />
                                    </div>
                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country/Region*</label>
                                        <select id="country" name="country" required className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#0a4373] focus:outline-none focus:ring-1 focus:ring-[#0a4373]">
                                            <option value="">Select a country</option>
                                            {countries.map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Primary Contact Details */}
                            <div>
                                <h4 className="text-lg font-semibold text-[#0a4373] mb-4 border-b border-gray-100 pb-2">Primary Contact Details</h4>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">Primary Contact Person*</label>
                                        <input type="text" id="contactPerson" name="contactPerson" required className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#0a4373] focus:outline-none focus:ring-1 focus:ring-[#0a4373]" />
                                    </div>
                                    <div>
                                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Role/Title</label>
                                        <input type="text" id="role" name="role" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#0a4373] focus:outline-none focus:ring-1 focus:ring-[#0a4373]" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telephone*</label>
                                        <input type="tel" id="phone" name="phone" required className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#0a4373] focus:outline-none focus:ring-1 focus:ring-[#0a4373]" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                                        <input type="email" id="email" name="email" required className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#0a4373] focus:outline-none focus:ring-1 focus:ring-[#0a4373]" />
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Organization Profile */}
                            <div>
                                <h4 className="text-lg font-semibold text-[#0a4373] mb-4 border-b border-gray-100 pb-2">Organization Profile</h4>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="orgType" className="block text-sm font-medium text-gray-700 mb-1">Type of Organization*</label>
                                        <select id="orgType" name="orgType" required className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#0a4373] focus:outline-none focus:ring-1 focus:ring-[#0a4373]">
                                            <option value="">Select type</option>
                                            {organizationTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">Number of Employees*</label>
                                        <input type="number" id="employees" name="employees" required min="1" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#0a4373] focus:outline-none focus:ring-1 focus:ring-[#0a4373]" />
                                    </div>
                                </div>
                            </div>

                            {/* Section 4: Supporting Information */}
                            <div>
                                <h4 className="text-lg font-semibold text-[#0a4373] mb-4 border-b border-gray-100 pb-2">Supporting Information (Optional)</h4>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                                        <input type="url" id="website" name="website" placeholder="https://" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#0a4373] focus:outline-none focus:ring-1 focus:ring-[#0a4373]" />
                                    </div>
                                    <div>
                                        <label htmlFor="social" className="block text-sm font-medium text-gray-700 mb-1">Social Media / LinkedIn Page</label>
                                        <input type="url" id="social" name="social" placeholder="https://" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#0a4373] focus:outline-none focus:ring-1 focus:ring-[#0a4373]" />
                                    </div>
                                </div>
                            </div>

                            {/* Consent & Submission */}
                            <div className="pt-4 border-t border-gray-100">
                                <div className="flex items-start mb-6">
                                    <div className="flex h-5 items-center">
                                        <input id="consent" type="checkbox" required className="h-4 w-4 rounded border-gray-300 text-[#0a4373] focus:ring-[#0a4373]" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="consent" className="text-gray-600">
                                            By submitting this form, you agree to AAA&apos;s Privacy Policy and Terms of Service, and you authorize AAA to contact you regarding your request.
                                        </label>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="px-6 py-2.5 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0a4373]"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-6 py-2.5 rounded-md text-sm font-medium text-white bg-[#0a4373] hover:bg-[#08365d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0a4373] min-w-[120px] disabled:opacity-60 inline-flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : 'Submit'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
