
async function main() {
    const phone = '+919999999999';
    const baseUrl = 'http://localhost:3001/api/v1/auth';

    console.log('1. Sending OTP...');
    try {
        const sendRes = await fetch(`${baseUrl}/send-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone })
        });

        if (!sendRes.ok) {
            console.error('Send OTP Failed:', await sendRes.text());
            process.exit(1);
        }

        const sendData = await sendRes.json();
        console.log('Send OTP Success:', sendData);
        const otpId = sendData.data.otpId;

        if (!otpId) {
            console.error('No OTP ID returned');
            process.exit(1);
        }

        console.log('2. Verifying OTP (Fixed: 123456)...');
        const verifyRes = await fetch(`${baseUrl}/verify-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, otp: '123456', otpId })
        });

        if (!verifyRes.ok) {
            console.error('Verify OTP Failed:', await verifyRes.text());
            process.exit(1);
        }

        const verifyData = await verifyRes.json();
        console.log('Verify OTP Success:', verifyData);
        console.log('Access Token:', verifyData.data.tokens.accessToken ? 'Present' : 'Missing');

    } catch (err) {
        console.error('Test Failed:', err);
        process.exit(1);
    }
}

main();
