'use client';

import React, { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
    LogOut, FileText, MessageSquare, Users, TrendingUp,
    Building2, Mail, Phone, Globe2, Calendar, Loader2, Stethoscope, Hospital
} from 'lucide-react';

interface Application {
    id: string;
    orgName: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    contactPerson: string;
    role: string | null;
    phone: string;
    email: string;
    orgType: string;
    employees: number;
    website: string | null;
    social: string | null;
    source: string;
    createdAt: string;
}

interface ContactInquiry {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: string | null;
    message: string;
    source: string;
    createdAt: string;
}

type TabKey = 'healthcare-apps' | 'clinics-apps' | 'healthcare-contacts' | 'clinics-contacts';

export default function DashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<TabKey>('healthcare-apps');
    const [applications, setApplications] = useState<Application[]>([]);
    const [contacts, setContacts] = useState<ContactInquiry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/dashboard/login');
        }
    }, [status, router]);

    useEffect(() => {
        if (status === 'authenticated') {
            fetchData();
        }
    }, [status]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [appsRes, contactsRes] = await Promise.all([
                fetch('/api/applications'),
                fetch('/api/contacts'),
            ]);
            if (appsRes.ok) setApplications(await appsRes.json());
            if (contactsRes.ok) setContacts(await contactsRes.json());
        } catch (err) {
            console.error('Failed to fetch data:', err);
        } finally {
            setLoading(false);
        }
    };

    if (status === 'loading' || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="h-8 w-8 animate-spin text-[#0a4373]" />
            </div>
        );
    }

    if (!session) return null;

    // Filter by source
    const healthcareApps = applications.filter(a => a.source === 'healthcare');
    const clinicsApps = applications.filter(a => a.source === 'clinics');
    const healthcareContacts = contacts.filter(c => c.source === 'healthcare');
    const clinicsContacts = contacts.filter(c => c.source === 'clinics');

    const todayApps = applications.filter(a =>
        new Date(a.createdAt).toDateString() === new Date().toDateString()
    ).length;

    const todayContacts = contacts.filter(c =>
        new Date(c.createdAt).toDateString() === new Date().toDateString()
    ).length;

    const tabs: { key: TabKey; label: string; icon: React.ElementType; count: number }[] = [
        { key: 'healthcare-apps', label: 'Healthcare Applications', icon: Hospital, count: healthcareApps.length },
        { key: 'clinics-apps', label: 'Clinics Applications', icon: Stethoscope, count: clinicsApps.length },
        { key: 'healthcare-contacts', label: 'Healthcare Inquiries', icon: MessageSquare, count: healthcareContacts.length },
        { key: 'clinics-contacts', label: 'Clinics Inquiries', icon: Mail, count: clinicsContacts.length },
    ];

    const getActiveApplications = () => {
        if (activeTab === 'healthcare-apps') return healthcareApps;
        if (activeTab === 'clinics-apps') return clinicsApps;
        return [];
    };

    const getActiveContacts = () => {
        if (activeTab === 'healthcare-contacts') return healthcareContacts;
        if (activeTab === 'clinics-contacts') return clinicsContacts;
        return [];
    };

    const isAppTab = activeTab === 'healthcare-apps' || activeTab === 'clinics-apps';
    const isContactTab = activeTab === 'healthcare-contacts' || activeTab === 'clinics-contacts';

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Nav */}
            <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="font-bold text-xl text-[#0a4373]">AAA Healthcare</div>
                        <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Dashboard</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">{session.user?.email}</span>
                        <button
                            onClick={() => signOut({ callbackUrl: '/dashboard/login' })}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <LogOut className="h-4 w-4" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <Hospital className="h-5 w-5 text-[#0a4373]" />
                            </div>
                            <span className="text-sm font-medium text-gray-500">Healthcare Apps</span>
                        </div>
                        <div className="text-3xl font-bold text-gray-900">{healthcareApps.length}</div>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-teal-50 rounded-lg">
                                <Stethoscope className="h-5 w-5 text-teal-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-500">Clinics Apps</span>
                        </div>
                        <div className="text-3xl font-bold text-gray-900">{clinicsApps.length}</div>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-green-50 rounded-lg">
                                <MessageSquare className="h-5 w-5 text-green-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-500">Healthcare Inquiries</span>
                        </div>
                        <div className="text-3xl font-bold text-gray-900">{healthcareContacts.length}</div>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-orange-50 rounded-lg">
                                <Users className="h-5 w-5 text-orange-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-500">Clinics Inquiries</span>
                        </div>
                        <div className="text-3xl font-bold text-gray-900">{clinicsContacts.length}</div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="border-b border-gray-100 px-6">
                        <nav className="flex gap-6 overflow-x-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.key
                                        ? 'border-[#0a4373] text-[#0a4373]'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    <span className="inline-flex items-center gap-2">
                                        <tab.icon className="h-4 w-4" />
                                        {tab.label} ({tab.count})
                                    </span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="p-6">
                        {isAppTab && (
                            getActiveApplications().length === 0 ? (
                                <div className="text-center py-12 text-gray-500">
                                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-30" />
                                    <p className="font-medium">No applications yet</p>
                                    <p className="text-sm mt-1">Applications will appear here when submitted.</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {getActiveApplications().map((app) => (
                                        <div key={app.id} className="border border-gray-100 rounded-xl p-6 hover:shadow-sm transition-shadow">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                                        <Building2 className="h-5 w-5 text-[#0a4373]" />
                                                        {app.orgName}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 mt-1">{app.orgType} • {app.employees} employees</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${app.source === 'clinics' ? 'bg-teal-100 text-teal-700' : 'bg-blue-100 text-blue-700'}`}>
                                                        {app.source}
                                                    </span>
                                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                                        <Calendar className="h-3.5 w-3.5" />
                                                        {new Date(app.createdAt).toLocaleDateString('en-US', {
                                                            year: 'numeric', month: 'short', day: 'numeric',
                                                            hour: '2-digit', minute: '2-digit'
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Users className="h-4 w-4 text-gray-400" />
                                                    <span><strong>Contact:</strong> {app.contactPerson}{app.role ? ` (${app.role})` : ''}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Mail className="h-4 w-4 text-gray-400" />
                                                    <span>{app.email}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Phone className="h-4 w-4 text-gray-400" />
                                                    <span>{app.phone}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Globe2 className="h-4 w-4 text-gray-400" />
                                                    <span>{app.city}, {app.state} {app.zip} – {app.country}</span>
                                                </div>
                                                {app.website && (
                                                    <div className="flex items-center gap-2 text-gray-600">
                                                        <Globe2 className="h-4 w-4 text-gray-400" />
                                                        <a href={app.website} target="_blank" rel="noopener noreferrer" className="text-[#0a4373] hover:underline truncate">{app.website}</a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        )}

                        {isContactTab && (
                            getActiveContacts().length === 0 ? (
                                <div className="text-center py-12 text-gray-500">
                                    <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-30" />
                                    <p className="font-medium">No inquiries yet</p>
                                    <p className="text-sm mt-1">Contact inquiries will appear here when submitted.</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {getActiveContacts().map((contact) => (
                                        <div key={contact.id} className="border border-gray-100 rounded-xl p-6 hover:shadow-sm transition-shadow">
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h3 className="text-lg font-bold text-gray-900">
                                                        {contact.firstName} {contact.lastName}
                                                    </h3>
                                                    {contact.organization && (
                                                        <p className="text-sm text-gray-500">{contact.organization}</p>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${contact.source === 'clinics' ? 'bg-teal-100 text-teal-700' : 'bg-blue-100 text-blue-700'}`}>
                                                        {contact.source}
                                                    </span>
                                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                                        <Calendar className="h-3.5 w-3.5" />
                                                        {new Date(contact.createdAt).toLocaleDateString('en-US', {
                                                            year: 'numeric', month: 'short', day: 'numeric',
                                                            hour: '2-digit', minute: '2-digit'
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                                                <Mail className="h-4 w-4 text-gray-400" />
                                                <span>{contact.email}</span>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                                                {contact.message}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
