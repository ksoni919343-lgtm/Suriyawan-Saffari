import { useCallback } from 'react';
import { sheets } from '../lib/googleClient';

export const useGoogleSync = () => {
  const sync = useCallback(async (values) => {
    await sheets.spreadsheets.values.append({
      spreadsheetId: 'your-id',
      range: 'Sheet1',
      valueInputOption: 'RAW',
      resource: { values: [values] },
    });
  }, []);

  return sync;
};
