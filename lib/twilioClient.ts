import Twilio from 'twilio';

export const twilioClient = Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
