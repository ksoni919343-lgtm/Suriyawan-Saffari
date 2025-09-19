'use client';
import { useWhatsApp } from '../hooks/useWhatsApp';

export default function WhatsAppNotify({ to, message }) {
  const { sendMessage } = useWhatsApp();

  const handleSend = async () => {
    await sendMessage(to, message);
  };

  return <button onClick={handleSend}>Send WhatsApp</button>;
}
