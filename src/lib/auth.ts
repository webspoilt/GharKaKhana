
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'development-secret-key-123';
const MSG91_AUTH_KEY = process.env.MSG91_AUTH_KEY || 'mock-msg91-key';

// Mock in-memory OTP store (In production, use Redis)
const otpStore: Record<string, { otp: string; expires: number }> = {};

export interface TokenPayload {
    userId: string;
    phone: string;
    role?: string;
}

export const signToken = (payload: TokenPayload): string => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
};

export const verifyToken = (token: string): TokenPayload | null => {
    try {
        return jwt.verify(token, JWT_SECRET) as TokenPayload;
    } catch (error) {
        return null;
    }
};

export const generateOTP = (): string => {
    // Generate 6 digit OTP
    return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendOTP = async (phone: string): Promise<{ success: boolean; message: string; otpId?: string }> => {
    let otp = generateOTP();

    // FIXED OTP FOR TESTING
    if (phone === '+919999999999') {
        otp = '123456';
    }

    const otpId = `otp_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    // Store OTP with 5 minute expiration
    otpStore[otpId] = {
        otp,
        expires: Date.now() + 5 * 60 * 1000
    };

    // Mock Request to MSG91
    console.log(`[MOCK MSG91] Sending OTP ${otp} to ${phone}`);

    // In a real implementation:
    // await fetch('https://api.msg91.com/api/v5/otp', { ... })

    return {
        success: true,
        message: 'OTP sent successfully',
        otpId
    };
};

export const verifyOTP = async (otpId: string, otp: string): Promise<boolean> => {
    const stored = otpStore[otpId];

    if (!stored) {
        return false;
    }

    if (Date.now() > stored.expires) {
        delete otpStore[otpId];
        return false;
    }

    if (stored.otp !== otp) {
        return false;
    }

    // Clear OTP after successful verification
    delete otpStore[otpId];
    return true;
};
