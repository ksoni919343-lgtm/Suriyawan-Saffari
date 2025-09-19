'use client';
import Crisp from '@crisp/chatbox';

export default function HelpChat() {
  return <Crisp websiteId={process.env.CRISP_WEBSITE_ID} />;
}
