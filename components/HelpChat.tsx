'use client';
import Crisp from 'crisp-sdk-web'; // सही इंपोर्ट, @crisp/chatbox को हटाया

export default function HelpChat() {
  return <Crisp websiteId={process.env.CRISP_WEBSITE_ID} />;
}
