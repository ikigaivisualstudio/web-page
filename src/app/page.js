import Text from "@/components/Sections/Text";
import Contact from "@/components/Sections/Contact";

import OurServices from "@/components/Sections/OurServices"
import Image from "next/image";
import './globals.css'

export default function Home() {
  return (
    <main className="">
      <div className=" relative flex h-screen flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center">
        <Image src='/rebranding/Logo.svg' width={200} height={200} className='my-4' alt="Logo Ikigai Visual Studio LLC"/>
        </div>
       <div className="grid grid-cols-2 w-full h-full border-y-2 border-dark-green">
        <div className="relative w-full h-full">
          <Image
            src='/rebranding/main.jpg'
            alt='Minimalist coffee table and sofa'
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-32 gap-4 flex flex-col justify-center border-l-2 border-dark-green">
          <h1 className="palmore-light uppercase text-[9rem] leading-[6rem] text-dark-green">Innovative & Impactful Design for Your Aspiring Brand</h1>
          <p className="text-s text-dark-green">
            We believe that a strong, cohesive brand is essential for standing out in today's competitive market. With years of experience in brand design, we specialize in creating visually stunning and strategically sound brand identities that resonate with your target audience.
          </p>
        </div>
       </div>
      </div>
      <Text/>
      <OurServices />
      <Contact/>
    </main>
  );
}
