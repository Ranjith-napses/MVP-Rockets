
// import Header from "@/components/organisms/Header";
// import "../styles/globals.css";
// import FooterSection from "@/components/organisms/FooterSection";
// import '@fontsource/poppins/400.css';
// // import ScrollReset from "@/components/utils/ScrollReset";
// import RedirectOnRefresh from '@/components/RedirectOnRefresh';
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

import Header from "@/components/organisms/Header";
import FooterSection from "@/components/organisms/FooterSection";
import RedirectOnRefresh from '@/components/RedirectOnRefresh';
import '../styles/globals.css';
import ScrollHideBar from "@/components/atoms/ScrollHideBar";



export const metadata = {
  title: 'MVP Rockets',
  description: 'MVP Rockets Web App',
};

  
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* <ScrollHideBar /> */}
         <ScrollHideBar />
        <Header />
         {/* <div className="top-gradient-bar"></div> */}
        <RedirectOnRefresh />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
