"use client"
import Image from "next/image"

export default function About(){
    return(
    <div className="p-20 flex justify-around gap-10 flex-row">
        <div className="flex flex-col justify-between text-dark-green bg-orange-400">
            <span className="text-2xl font-light uppercase">/ know more about us</span>
            <Image src={'/rebranding/image_04.jpg'} width={650} height={100} alt="Ikigai Visual Studio" />

            <p className="palmore-light text-9xl uppercase leading-[6rem]">We help our clients succeed with innovative strategies.</p>
        </div>
        <div className="flex flex-col items-end gap-6 realtive">
            <div className="flex flex-col justify-start items-start gap-4 ">
                <span className="text-lg font-medium py-2 text-dark-green w-full">INVESTING IN YOUR BRAND IDENTITY IS CRUCIAL</span>
                <p className="text-s text-dark-green">A well-defined brand identity builds trust and credibility, making it easier to attract and retain customers. It also enhances brand recognition, ensuring your business remains top-of-mind for consumers. Ultimately, a compelling brand identity drives business growth by effectively communicating your brand’s story and value proposition to your target audience.</p>
            </div>
        </div>
    </div>
    ) 
}