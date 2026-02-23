'use client';

import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, ShieldCheck, Globe2, Award } from 'lucide-react';

export const Hero = () => {
    return (
        <div className="relative isolate overflow-hidden hero-gradient-bg min-h-[90vh] flex items-center">
            {/* Animated background shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Large floating circle */}
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 animate-float" />
                {/* Medium circle */}
                <div className="absolute top-1/2 -left-12 w-64 h-64 rounded-full bg-white/5 animate-float-delayed" />
                {/* Small accent circle */}
                <div className="absolute bottom-20 right-1/3 w-32 h-32 rounded-full bg-white/10 animate-pulse-slow" />
                {/* Subtle grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
                {/* Shimmer overlay */}
                <div className="absolute inset-0 animate-shimmer" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left – Text Content */}
                    <div className="text-white">
                        <div className="animate-fade-in-up">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-200 ring-1 ring-white/20 mb-6">
                                <Award className="h-4 w-4" />
                                ISQua Accredited Standards
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight animate-fade-in-up-delay-1">
                            Accreditation Designed for{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                                Sustainable Healthcare Excellence
                            </span>
                        </h1>

                        <p className="mt-6 text-lg sm:text-xl leading-8 text-blue-100/80 max-w-xl animate-fade-in-up-delay-2">
                            Internationally aligned standards supporting patient safety, clinical excellence, and organizational performance.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up-delay-3">
                            <a
                                href="#contact"
                                className="h-12 px-8 text-base font-semibold rounded-md inline-flex items-center justify-center transition-all shadow-lg shadow-black/20 hover:shadow-xl"
                                style={{ backgroundColor: '#ffffff', color: '#0a4373' }}
                            >
                                Apply for Accreditation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="#about"
                                className="h-12 px-8 text-base font-medium rounded-md inline-flex items-center justify-center transition-all ring-1 ring-white/30 hover:ring-white/60"
                                style={{ color: '#ffffff', backgroundColor: 'transparent' }}
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Right – Stats Cards */}
                    <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in-up-delay-2">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                            <ShieldCheck className="h-8 w-8 text-cyan-300 mb-3" />
                            <div className="text-3xl font-bold text-white">53+</div>
                            <div className="text-sm text-blue-200 mt-1">Countries Worldwide</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors mt-8">
                            <Globe2 className="h-8 w-8 text-cyan-300 mb-3" />
                            <div className="text-3xl font-bold text-white">500+</div>
                            <div className="text-sm text-blue-200 mt-1">Accredited Facilities</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                            <img src="/isqua.png" alt="ISQua Logo" className="h-12 w-auto object-contain mb-3" />
                            <div className="text-3xl font-bold text-white">ISQua</div>
                            <div className="text-sm text-blue-200 mt-1">Internationally Recognized</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors mt-8">
                            <ShieldCheck className="h-8 w-8 text-cyan-300 mb-3" />
                            <div className="text-3xl font-bold text-white">24/7</div>
                            <div className="text-sm text-blue-200 mt-1">Continuous Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>
    );
};
