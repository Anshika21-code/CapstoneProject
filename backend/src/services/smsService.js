// backend/src/services/smsService.js

export const sendSMS = async (phone, message) => {
  try {
    console.log(`SMS sent to ${phone}: ${message}`);
    return true;
  } catch (err) {
    console.log("SMS error:", err.message);
    return false;
  }
};
