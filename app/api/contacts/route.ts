import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { sendContactNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, phone, organization, website, message, source } = body;

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !organization || !website || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const inquiry = await prisma.contactInquiry.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                organization,
                website,
                message,
                source: source || 'healthcare',
            },
        });

        // Send email notification (non-blocking)
        sendContactNotification({
            firstName, lastName, email, phone, organization, website, message,
        });

        return NextResponse.json({ success: true, id: inquiry.id }, { status: 201 });
    } catch (error) {
        console.error('Error creating contact inquiry:', error);
        return NextResponse.json(
            { error: 'Failed to create inquiry' },
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

        const inquiries = await prisma.contactInquiry.findMany({
            where: source ? { source } : undefined,
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json(inquiries);
    } catch (error) {
        console.error('Error fetching inquiries:', error);
        return NextResponse.json(
            { error: 'Failed to fetch inquiries' },
            { status: 500 }
        );
    }
}
