"use client"
import Image from "next/image"

export default function Text(){
    return(
    <div className="p-10 flex justify-center flex-row items-end gap-4 m-10">
        <p className="palmore-light text-9xl uppercase w-1/2 leading-[6rem] text-dark-green">We collaborate with you to craft brands that connect and inspire</p>
        <div className="flex flex-col items-end w-1/2 gap-6 border-2 border-dark-green p-8">
            <Image src={'/rebranding/image_06.jpg'} width={800} height={100} alt="Ikigai Visual Studio" />
            <div className="flex flex-col justify-start items-start gap-4 ">
                <span className="text-lg font-medium border-2 border-dark-green p-2 text-dark-green w-full">01/ WHY INVESTING IN YOUR BRAND IDENTITY IS CRUCIAL</span>
                <p className="text-s text-dark-green">A well-defined brand identity builds trust and credibility, making it easier to attract and retain customers. It also enhances brand recognition, ensuring your business remains top-of-mind for consumers. Ultimately, a compelling brand identity drives business growth by effectively communicating your brand’s story and value proposition to your target audience.</p>
            </div>
        </div>
    </div>
    ) 
}