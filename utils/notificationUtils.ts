import { admin } from '../lib/notifications';

export async function sendNotification(token, message) {
  await admin.messaging().send({ token, notification: { body: message } });
}
