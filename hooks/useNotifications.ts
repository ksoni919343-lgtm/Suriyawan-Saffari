import { useCallback } from 'react';
import { admin } from '../lib/notifications';

export const useNotifications = () => {
  const notify = useCallback(async (token, message) => {
    await admin.messaging().send({ token, notification: { body: message } });
  }, []);

  return notify;
};
