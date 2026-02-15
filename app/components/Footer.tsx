import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="font-bold text-xl text-[#0a4373] mb-4">
                            AAA Healthcare
                        </div>
                        <p className="text-sm text-gray-500 mb-6">
                            Delivering independent, international accreditation programs that build trust and confidence in healthcare quality and safety.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-[#0a4373] transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-[#0a4373] transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-[#0a4373] transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-[#0a4373] transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="#about" className="text-sm text-gray-600 hover:text-[#0a4373]">About AAA</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0a4373]">Leadership</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0a4373]">Careers</Link></li>
                            <li><Link href="#contact" className="text-sm text-gray-600 hover:text-[#0a4373]">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0a4373]">Programs</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0a4373]">Standards</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0a4373]">Resources</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0a4373]">F.A.Q</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0a4373]">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0a4373]">Terms of Use</Link></li>
                            <li><Link href="#" className="text-sm text-gray-600 hover:text-[#0a4373]">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} AAA Healthcare. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
