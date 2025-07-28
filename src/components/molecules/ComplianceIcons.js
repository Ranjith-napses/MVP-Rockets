import Image from 'next/image';

export default function ComplianceIcons() {
  return (
    <div className="py-16 text-center">
  
      <h2 className="text-3xl font-semibold text-pinko mb-6">
        Our Products Are Compliant & Secure
      </h2>

    
      <h3 className=" font-light text-3xl font-sans text-white mb-8">
        We build  ISO, SOC2, GDPR & VAPT compliant products
      </h3>

    
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-1/4 p-4 sm:w-1/5 md:w-1/6 flex justify-center gap-4">
          <Image 
            src="/iso.svg" 
            alt="ISO Compliant" 
            width={96} 
            height={96} 
            className="object-contain"
          />
        
        
          <Image 
            src="/soc2.svg" 
            alt="SOC2 Compliant" 
            width={96} 
            height={96} 
            className="object-contain"
          />
     
       
          <Image 
            src="/gdpr.svg" 
            alt="GDPR Ready" 
            width={96} 
            height={96} 
            className="object-contain"
          />
       
       
          <Image 
            src="/vapt.svg" 
            alt="VAPT Compliant" 
            width={96} 
            height={96} 
            className="object-contain"
          />
        </div>
      </div>
      </div>
      
    
  );
}
