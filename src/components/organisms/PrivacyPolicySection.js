import PrivacyBlock from "../molecules/PrivacyBlock";

const PrivacyPolicySection = () => {
  return (
    <section className="px-4 md:px-20 py-12 max-w-4xl mx-auto">
      <PrivacyBlock
        title1="Privacy Policy"
        paragraphs1={[
          "MVPRockets ('we', 'us', 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website hosted on WordPress. By using our website, you agree to the terms of this Privacy Policy."
        ]}
      />

      <PrivacyBlock
        title="Information We Collect"
        paragraphs={[
          "We may collect the following types of information:"
        ]}

        list={[
          
          "Personal Identification Information: Name, email address, phone number, etc., when you voluntarily provide it through forms on our website.",
         
          "Non-Personal Identification Information: Browser type, IP address, operating system, and usage data to help us improve our website."
        ]}
      />




      <PrivacyBlock
        title="How We Use Information"
        paragraphs={[
          "We use the information we collect to:"
        ]}
        list={[
          "To provide, operate, and maintain our services",
          "To improve and personalize your experience",
          "To understand usage and improve our website",
          "To respond to inquiries and customer support"
        ]}
      />

      <PrivacyBlock
        title="Cookies "
        paragraphs={[
          "Our website uses cookies to enhance your experience. Cookies are small files placed on your device that help us understand how you use our site. You can choose to disable cookies through your browser settings, but some parts of our website may not function properly."
        ]}
      />
        
      <PrivacyBlock  id="gdpr" 
        title="GDPR Compliance"
        paragraphs={["If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). These include:"]}
        list={[
        "Access: You have the right to request access to your personal data.",
        "Rectification: You have the right to request that we correct any inaccuracies in your personal data.",
        "Erasure: You have the right to request that we delete your personal data.",
        "Restriction: You have the right to request that we restrict the processing of your personal data.",
        "Portability: You have the right to request a copy of your personal data in a structured, commonly used, and machine-readable format.",
        "Objection: You have the right to object to the processing of your personal data."
        ]}
        paragraphs2={[
          "To exercise these rights, please contact us at support@mvprockets.com."]}
      />



          
      <PrivacyBlock
        title="Data Security"
        paragraphs={[
          "We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet or electronic storage method is 100% secure, and we cannot guarantee absolute security.",
          "We comply with the following standards and regulations to ensure the highest level of security:"
        ]}
       

        list={[
          
          "ISO 27001: We adhere to the international standard for information security management systems (ISMS) to protect your data.",
         
          "SOC 2: We undergo regular audits to ensure our practices meet the rigorous requirements for security, availability, processing integrity, confidentiality, and privacy.",
          "Vulnerability Assessment and Penetration Testing (VAPT): We regularly conduct VAPT to identify and address potential vulnerabilities in our systems."
        ]}
      />
      <PrivacyBlock
        title="Third-Party Services "
        paragraphs={[
          "Our website may contain links to third-party websites or services that are not controlled by us. We are not responsible for the privacy practices or content of these third-party sites. We recommend reviewing their privacy policies before providing any personal information."
        ]}
      />
      <PrivacyBlock
        title="Changes to This Privacy Policy "
        paragraphs={[
          "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. Your continued use of our website after such changes constitutes your acceptance of the new Privacy Policy."        ]}
      />
       <PrivacyBlock
        title="Contact Us "
        paragraphs={[
           "If you have any questions or concerns about this Privacy Policy, please contact us at:"
        ]}
      />

<PrivacyBlock
        title="MVP Rockets "
        paragraphs={[
           "1309 Coffeen Avenue, Suite 1200,",
           "Sheridan, Wyoming 82801",
           "Phone: +91 95910 59927",
           "Email: support@mvprockets.com",

        ]}
        paragraphs2={["By using our website, you acknowledge that you have read, understood, and agree to this Privacy Policy"]}
      />
      

    </section>
  );

};

export default PrivacyPolicySection;
