'use client'

import HomePage from "../components/pages/Homepage";
import '@fontsource/poppins/400.css';
import { Suspense } from "react";
// export default function Page() {
//   return (  
//   <HomePage />
//   )
// }
 
export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <HomePage />
    </Suspense>
  );
}
