// utils/otp.js
const twilio = require('twilio');

const accountSid = 'AC09dc57cfe592c9bd84f5566f5c2ca91f';
const authToken = 'ccfc8ac87ed62e386daf047f4944718c';
const client = new twilio(accountSid, authToken);

// Generate a random 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send OTP via SMS
const sendOtp = (to, otp) => {
  return client.messages.create({
    body: `Your verification code: ${otp}`,
    from: '+916201789895',
    to,
  });
};

module.exports = { generateOTP, sendOtp };
