'use client';
import { useGeolocation } from '../hooks/useGeolocation';

export default function SOSButton() {
  const { location } = useGeolocation();

  const handleSOS = () => {
    if (location) console.log(location);
  };

  return <button onClick={handleSOS}>SOS</button>;
}
