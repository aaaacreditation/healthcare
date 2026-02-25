'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { ApplicationModal } from './ApplicationModal';

const navLinks = [
    { href: 'https://aaa-accreditation.org', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#why-aaa', label: 'Why AAA' },
    { href: '#process', label: 'Process' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
];

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
                <Link href="https://aaa-accreditation.org" className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="AAA Healthcare Logo"
                        className="h-16 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-[#0a4373] transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button size="sm" onClick={() => setIsApplicationModalOpen(true)}>Apply Now</Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <X className="h-6 w-6 text-gray-700" />
                    ) : (
                        <Menu className="h-6 w-6 text-gray-700" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation Panel */}
            {mobileOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <nav className="flex flex-col px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#0a4373] transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2 px-4">
                            <Button size="sm" className="w-full" onClick={() => { setMobileOpen(false); setIsApplicationModalOpen(true); }}>
                                Apply Now
                            </Button>
                        </div>
                    </nav>
                </div>
            )}

            <ApplicationModal
                isOpen={isApplicationModalOpen}
                onClose={() => setIsApplicationModalOpen(false)}
            />
        </header>
    );
};
