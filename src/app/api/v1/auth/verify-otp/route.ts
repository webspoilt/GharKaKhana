
import { NextResponse } from 'next/server';
import { verifyOTP, signToken } from '@/lib/auth';
import { db as prisma } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { phone, otp, otpId } = body;

        if (!phone || !otp || !otpId) {
            return NextResponse.json(
                { success: false, error: 'Phone, OTP, and OTP ID are required' },
                { status: 400 }
            );
        }

        const isValid = await verifyOTP(otpId, otp);

        if (!isValid) {
            return NextResponse.json(
                { success: false, error: 'Invalid or expired OTP' },
                { status: 400 }
            );
        }

        // Find or create user
        let user = await prisma.user.findUnique({
            where: { phone }
        });

        let isNewUser = false;

        if (!user) {
            user = await prisma.user.create({
                data: {
                    phone,
                    isVerified: true
                }
            });
            isNewUser = true;
        }

        // Generate tokens
        const accessToken = signToken({
            userId: user.id,
            phone: user.phone
        });

        const refreshToken = signToken({
            userId: user.id,
            phone: user.phone
        }); // In real app, refresh tokens should have different expiry and be stored in DB

        return NextResponse.json({
            success: true,
            data: {
                user: {
                    id: user.id,
                    phone: user.phone,
                    name: user.name,
                    isNewUser
                },
                tokens: {
                    accessToken,
                    refreshToken,
                    expiresIn: 604800 // 7 days
                }
            }
        });

    } catch (error) {
        console.error('Verify OTP Error:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
