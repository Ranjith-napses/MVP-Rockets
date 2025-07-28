import PrivacyBlock from "../molecules/PrivacyBlock";

const TermsSection = () => {
  return (
    <section className="px-4 md:px-20 py-12 max-w-4xl mx-auto">
      <PrivacyBlock
        title1="Terms & Conditions"
        paragraphs1={[
        "Welcome to MVPRockets! By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. Please review them carefully. If you do not agree with these terms, you should not use this website."
        ]}
      />


      <PrivacyBlock
        title="Use of the Website"
        paragraphs={[
         "The content provided on this website is for general informational purposes only.",
         "MVPRockets reserves the right to modify or remove content at any time without notice."
        ]}
      />

      <PrivacyBlock
        title="Intellectual Property"
        paragraphs={[
          "All content on this website, including text, graphics, logos, images, and software, is the property of MVPRockets and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission."
        ]}
      />

      <PrivacyBlock
        title="User Conduct "
        paragraphs={[
          "By using our website, you agree not to:"
        ]}
        list={[
          "Engage in any activity that disrupts or interferes with the website’s functionality.",
          "Use the website for any unlawful or prohibited purpose.",
          "Attempt to gain unauthorized access to any part of the website."
        ]}
      />

      <PrivacyBlock
        title="Limitation of Liability"
        paragraphs={["MVPRockets is not liable for any direct, indirect, incidental, or consequential damages that arise from the use of, or the inability to use, the website or its content."]}
      />


          
      <PrivacyBlock
        title="External Links"
        paragraphs={[
          "Our website may contain links to third-party websites. MVPRockets is not responsible for the content or practices of these external sites. Accessing these links is at your own risk."
        ]}
      />
      <PrivacyBlock
        title="Privacy Policy "
        paragraphs={[
            "Your use of the website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information" 
                 ]}
      />
      <PrivacyBlock
        title="Changes to Terms and Conditions"
        paragraphs={[
            "MVPRockets reserves the right to update these terms and conditions at any time. We will notify users of any significant changes by posting the new terms on this page. Your continued use of the website constitutes acceptance of the revised terms."
        ]}
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

export default TermsSection;
