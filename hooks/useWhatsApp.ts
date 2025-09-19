import { useCallback } from 'react';
import { twilioClient } from '../lib/twilioClient';

export const useWhatsApp = () => {
  const sendMessage = useCallback(async (to, message) => {
    await twilioClient.messages.create({
      body: message,
      from: 'whatsapp:+14155238886',
      to: `whatsapp:${to}`,
    });
  }, []);

  return sendMessage;
};
