import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = 'info@aaa-accreditation.org';
const DASHBOARD_URL = process.env.NEXTAUTH_URL || 'https://healthcare.aaa-accreditation.org';

export async function sendApplicationNotification(data: {
    orgName: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    contactPerson: string;
    role?: string;
    phone: string;
    email: string;
    orgType: string;
    employees: number;
    website?: string;
    social?: string;
}) {
    try {
        await resend.emails.send({
            from: 'AAA Healthcare <notifications@aaa-accreditation.org>',
            to: ADMIN_EMAIL,
            subject: '🏥 New Healthcare Application Form Lead',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #0a4373, #0d5a9e); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 22px;">New Healthcare Application</h1>
                        <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 14px;">A new organization has applied for accreditation</p>
                    </div>
                    
                    <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
                        <h2 style="color: #0a4373; font-size: 16px; margin-top: 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Organization Details</h2>
                        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                            <tr><td style="padding: 8px 0; color: #6b7280; width: 40%;">Organization Name</td><td style="padding: 8px 0; font-weight: bold; color: #111827;">${data.orgName}</td></tr>
                            <tr style="background: #f9fafb;"><td style="padding: 8px; color: #6b7280;">Organization Type</td><td style="padding: 8px; font-weight: bold; color: #111827;">${data.orgType}</td></tr>
                            <tr><td style="padding: 8px 0; color: #6b7280;">Employees</td><td style="padding: 8px 0; font-weight: bold; color: #111827;">${data.employees}</td></tr>
                            <tr style="background: #f9fafb;"><td style="padding: 8px; color: #6b7280;">Location</td><td style="padding: 8px; font-weight: bold; color: #111827;">${data.city}, ${data.state} ${data.zip}, ${data.country}</td></tr>
                            ${data.website ? `<tr><td style="padding: 8px 0; color: #6b7280;">Website</td><td style="padding: 8px 0; font-weight: bold; color: #111827;">${data.website}</td></tr>` : ''}
                            ${data.social ? `<tr style="background: #f9fafb;"><td style="padding: 8px; color: #6b7280;">Social Media</td><td style="padding: 8px; font-weight: bold; color: #111827;">${data.social}</td></tr>` : ''}
                        </table>

                        <h2 style="color: #0a4373; font-size: 16px; margin-top: 24px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Contact Person</h2>
                        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                            <tr><td style="padding: 8px 0; color: #6b7280; width: 40%;">Name</td><td style="padding: 8px 0; font-weight: bold; color: #111827;">${data.contactPerson}</td></tr>
                            ${data.role ? `<tr style="background: #f9fafb;"><td style="padding: 8px; color: #6b7280;">Role</td><td style="padding: 8px; font-weight: bold; color: #111827;">${data.role}</td></tr>` : ''}
                            <tr><td style="padding: 8px 0; color: #6b7280;">Email</td><td style="padding: 8px 0; font-weight: bold; color: #111827;"><a href="mailto:${data.email}" style="color: #0a4373;">${data.email}</a></td></tr>
                            <tr style="background: #f9fafb;"><td style="padding: 8px; color: #6b7280;">Phone</td><td style="padding: 8px; font-weight: bold; color: #111827;">${data.phone}</td></tr>
                        </table>

                        <div style="text-align: center; margin-top: 30px;">
                            <a href="${DASHBOARD_URL}/dashboard" style="display: inline-block; background: #0a4373; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">
                                View in Dashboard →
                            </a>
                        </div>
                    </div>
                    
                    <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 16px;">
                        AAA Healthcare Accreditation System
                    </p>
                </div>
            `,
        });
    } catch (error) {
        console.error('Failed to send application notification email:', error);
    }
}

export async function sendContactNotification(data: {
    firstName: string;
    lastName: string;
    email: string;
    organization?: string;
    message: string;
}) {
    try {
        await resend.emails.send({
            from: 'AAA Healthcare <notifications@aaa-accreditation.org>',
            to: ADMIN_EMAIL,
            subject: '✉️ New Healthcare Contact Message',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; padding: 20px;">
                    <div style="background: linear-gradient(135deg, #0a4373, #0d5a9e); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 22px;">New Contact Message</h1>
                        <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 14px;">Someone has reached out via the contact form</p>
                    </div>
                    
                    <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
                        <h2 style="color: #0a4373; font-size: 16px; margin-top: 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Contact Details</h2>
                        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                            <tr><td style="padding: 8px 0; color: #6b7280; width: 40%;">Name</td><td style="padding: 8px 0; font-weight: bold; color: #111827;">${data.firstName} ${data.lastName}</td></tr>
                            <tr style="background: #f9fafb;"><td style="padding: 8px; color: #6b7280;">Email</td><td style="padding: 8px; font-weight: bold; color: #111827;"><a href="mailto:${data.email}" style="color: #0a4373;">${data.email}</a></td></tr>
                            ${data.organization ? `<tr><td style="padding: 8px 0; color: #6b7280;">Organization</td><td style="padding: 8px 0; font-weight: bold; color: #111827;">${data.organization}</td></tr>` : ''}
                        </table>

                        <h2 style="color: #0a4373; font-size: 16px; margin-top: 24px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Message</h2>
                        <div style="background: #f9fafb; padding: 16px; border-radius: 8px; font-size: 14px; color: #374151; line-height: 1.6;">
                            ${data.message}
                        </div>

                        <div style="text-align: center; margin-top: 30px;">
                            <a href="${DASHBOARD_URL}/dashboard" style="display: inline-block; background: #0a4373; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">
                                View in Dashboard →
                            </a>
                        </div>
                    </div>
                    
                    <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 16px;">
                        AAA Healthcare Accreditation System
                    </p>
                </div>
            `,
        });
    } catch (error) {
        console.error('Failed to send contact notification email:', error);
    }
}
