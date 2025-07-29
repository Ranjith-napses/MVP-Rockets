'use client';

import { useEffect, useState } from 'react';
import FooterSection from './FooterSection';

export default function ClientFooter() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return show ? <FooterSection /> : null;
}
