
// import Header from "@/components/organisms/Header";
// import "../styles/globals.css";
// import FooterSection from "@/components/organisms/FooterSection";
// import '@fontsource/poppins/400.css';
// // import ScrollReset from "@/components/utils/ScrollReset";


// import '../styles/globals.css';
// import ScrollHideBar from '@/components/utils/ScrollHideBar.js';

// export const metadata = {
//   title: "MVP Rockets",
//   description: "MVP Rockets Web App",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>
//         <ScrollHideBar/>
        
//         <Header/>
//         <div className="top-gradient-bar "></div>
//        <RedirectOnRefresh/>
//         {children}
//         <FooterSection/>
//         </body>
//     </html>
//   );
// }

// import Header from "@/components/organisms/Header";
// import FooterSection from "@/components/organisms/FooterSection";
// // import RedirectOnRefresh from '@/components/RedirectOnRefresh';
// import '../styles/globals.css';
// import ScrollHideBar from "@/components/atoms/ScrollHideBar";



// export const metadata = {
//   title: 'MVP Rockets',
//   description: 'MVP Rockets Web App',
// };

  
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>
//         {/* <ScrollHideBar /> */}
//          {/* <RedirectOnRefresh /> */}
//          <ScrollHideBar />
//         <Header />
//          {/* <div className="top-gradient-bar"></div> */}
       
//         {children}
//         <FooterSection />
//       </body>
//     </html>
//   );
// }

// app/layout.js

// export const metadata = {
//   title: 'MVP Rockets - Accelerate Your Startup & Enterprise Journey',
//   description: 'Empowering startups & enterprises to turn vision into reality with rapid product development.',
// };

import "../styles/globals.css";
import '@fontsource/poppins/400.css';
import Header from "@/components/organisms/Header";
import ScrollHideBar from "@/components/atoms/ScrollHideBar";
import ClientFooter from '../components/organisms/ClientFooter'; 
import RedirectOnRefresh from '@/components/RedirectOnRefresh';


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <title>MVP Rockets</title>
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicons/web-app-manifest-512x512.png" />
        <link rel="apple-touch-icon" href="/favicons/apple-icon.png" />
        <link rel="manifest" href="/favicons/manifest.json" />
      </head>
      <body>
        <ScrollHideBar />
        <RedirectOnRefresh/>
        <Header />
        {children}
        <ClientFooter />
      </body>
    </html>
  );
}
