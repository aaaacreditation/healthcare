import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export const Contact = () => {
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
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input type="text" id="first-name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a4373] focus:border-transparent outline-none transition-all" />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input type="text" id="last-name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a4373] focus:border-transparent outline-none transition-all" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a4373] focus:border-transparent outline-none transition-all" />
                        </div>

                        <div>
                            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                            <input type="text" id="organization" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a4373] focus:border-transparent outline-none transition-all" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a4373] focus:border-transparent outline-none transition-all"></textarea>
                        </div>

                        <Button size="lg" className="w-full">
                            Send Inquiry
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
};
