import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, organization, message } = body;

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
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
                organization: organization || null,
                message,
            },
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

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const inquiries = await prisma.contactInquiry.findMany({
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
