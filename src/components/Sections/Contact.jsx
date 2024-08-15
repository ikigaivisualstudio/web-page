"use client"
import Image from "next/image"

const Section = [
    {
        'title': 'Address',
        'text': '2105 Vista Oeste St NW, Albuquerque, NM 87120',
        'imgUrl': '/icons/icon_address.png',
        'imgAlt': 'address icon'
    },
    {
        'title': 'Get in touch',
        'text': '+1 224-225-7522',
        'imgUrl': '/icons/icon_phone.png',
        'imgAlt': 'phone icon'
    },
    {
        'title': 'Inquire now',
        'text': 'ikigaivisualstudio00@gmail.com',
        'imgUrl': '/icons/icon_email.png',
        'imgAlt': 'email icon'
    }
]

export default function Contact(){
    return(
    <div className="flex flex-col justify-around gap-10">
        <span className="text-2xl font-light uppercase px-20 text-dark-green">/ contact us</span>
        <div className="flex flex-row gap-10 items-end text-center bg-services px-20 py-32">
            {/* <Image src={'/rebranding/image_04.jpg'} width={574} height={100} alt="Ikigai Visual Studio" /> */}
            <div className="flex flex-col items-end gap-6 p-5 w-4/5 justify-center mx-auto text-dark-green bg-light">
                <p className="palmore-light text-9xl uppercase leading-[6rem]">We bring the creative fire to help you touch more lives</p>
                <div className="flex flex-col gap-5 mx-auto">
                    {Section.map((Section, index) => {
                        return (
                        <div key={index} className="flex flex-col gap-1 items-center justify-start">
                            <div className="flex flex-row gap-1 justify-center items-center">
                                <Image src={Section.imgUrl} alt={Section.imgAlt} width={30} height={30}/>
                                <span className="uppercase text-sm font-medium">{Section.title}</span>
                            </div>
                            <span className="text-s">{Section.text}</span>
                        </div> );
                    })}
                </div>
            </div>
        </div>
    </div>
    ) 
}