
import { NextResponse } from 'next/server';
import { sendOTP } from '@/lib/auth';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { phone } = body;

        if (!phone) {
            return NextResponse.json(
                { success: false, error: 'Phone number is required' },
                { status: 400 }
            );
        }

        const result = await sendOTP(phone);

        return NextResponse.json({
            success: true,
            message: result.message,
            data: {
                otpId: result.otpId,
                expiresIn: 300
            }
        });
    } catch (error) {
        console.error('Send OTP Error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
