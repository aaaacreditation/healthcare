import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { sendApplicationNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            orgName, city, state, zip, country,
            contactPerson, role, phone, email,
            orgType, employees, website, social, source
        } = body;

        // Validate required fields
        if (!orgName || !city || !state || !zip || !country ||
            !contactPerson || !role || !phone || !email || !orgType || !employees) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const application = await prisma.application.create({
            data: {
                orgName,
                city,
                state,
                zip,
                country,
                contactPerson,
                role,
                phone,
                email,
                orgType,
                employees: parseInt(employees),
                website: website || null,
                social: social || null,
                source: source || 'healthcare',
            },
        });

        // Send email notification (non-blocking)
        sendApplicationNotification({
            orgName, city, state, zip, country,
            contactPerson, role, phone, email,
            orgType, employees: parseInt(employees),
            website, social,
        });

        return NextResponse.json({ success: true, id: application.id }, { status: 201 });
    } catch (error) {
        console.error('Error creating application:', error);
        return NextResponse.json(
            { error: 'Failed to create application' },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { searchParams } = new URL(request.url);
        const source = searchParams.get('source');

        const applications = await prisma.application.findMany({
            where: source ? { source } : undefined,
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json(applications);
    } catch (error) {
        console.error('Error fetching applications:', error);
        return NextResponse.json(
            { error: 'Failed to fetch applications' },
            { status: 500 }
        );
    }
}
