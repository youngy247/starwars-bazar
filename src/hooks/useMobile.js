import { useEffect, useState } from 'react';

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', updateScreenSize);
    updateScreenSize(); // Initial check on mount

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  return isMobile;
};
