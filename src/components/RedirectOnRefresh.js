'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RedirectOnRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    const [navigationEntry] = performance.getEntriesByType('navigation');

    // Check if it's a full reload (not SPA navigation)
    if (navigationEntry?.type === 'reload' && pathname !== '/') {
      window.location.href = '/';
    }
  }, [pathname]);

  return null;
}
