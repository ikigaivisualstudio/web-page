import AboutUs from "@/components/Sections/AboutUs";
import ContactUs from "@/components/Sections/ContactUs";
import Text from "@/components/Sections/Text";
import Image from "next/image";
import './globals.css'

export default function Home() {
  return (
    <main>
      <div className="bg-light relative flex h-screen flex-col items-center justify-center">
        <div className="w-full border-x-2 border-dark-green flex items-center justify-center">
        <Image src='/rebranding/logo.svg' width={200} height={200} className='my-4' alt="Logo Ikigai Visual Studio LLC"/>
        </div>
      <div className="grid grid-cols-2 w-full h-full border-2 border-dark-green">
        <div className="relative w-full h-full">
          <Image
            src='/rebranding/Image_01.jpg'
            alt='Minimalist coffee table and sofa'
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-32 gap-4 flex flex-col justify-center border-l-2 border-dark-green">
          <span className="uppercase text-xl font-medium tracking-wider text-green">ikigai visual studio</span>
          <h1 className="palmore-light uppercase text-9xl leading-[5rem] text-dark-green">Innovative & Impactful Design for Your Aspiring Brand</h1>
          <p className="text-sm text-green">
            We believe that a strong, cohesive brand is essential for standing out in today's competitive market. With years of experience in brand design, we specialize in creating visually stunning and strategically sound brand identities that resonate with your target audience.
          </p>
        </div>
      </div>
    </div>
      <Text/>
      <AboutUs />
      <ContactUs />
      
    </main>
  );
}
