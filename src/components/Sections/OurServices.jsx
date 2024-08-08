"use client";
import Image from "next/image";

const Service = [
  {
    "title" : "Make it extra.",
    "description" : "Our team of creative designers works closely with you to understand your vision and bring it to life through innovative and compelling designs.",
    "imgSrc" : "/rebranding/Brand_design.jpg",
    "imgAlt" : "drawing one",
    "bgColor" : "#aab28b",
    "txtColor" : "#494c3f",
  },
  {
    "title" : "Make it easy.",
    "description" : "Our approach is holistic, ensuring that every element from typography to color schemes aligns perfectly with your brand's personality and values.",
    "imgSrc" : "/rebranding/Graphic_design.jpg",
    "imgAlt" : "drawing one",
    "bgColor" : "#d1d1e8",
    "txtColor" : "#312a91",
  },
  {
    "title" : "Make it fun.",
    "description" : "Our goal is to deliver a seamless digital experience that reflects your brand and engages your visitors, user-friendly and optimized for performance.",
    "imgSrc" : "/rebranding/Web_design.jpg",
    "imgAlt" : "drawing one",
    "bgColor" : "#ecd9c8",
    "txtColor" : "#a73d16",
  }
]


export default function OurServices() {
  return (
    <div className="">
      <div className="text-light p-4 bg-dark-green w-full flex flex-row justify-evenly">
        <span className="border-b-2 border-light"> OUR SERVICES </span>
        <span> / BRAND DESIGN / </span>
        <span> / GRAPHIC DESIGN / </span>
        <span> / WEB DESIGN / </span>
      </div>
      <div className="flex flex-row justify-center items-center p-20 gap-20">
        {Service.map((service, index) => {
            return (
            <div key={index} className="flex flex-col gap-10 justify-center items-center text-center p-10" style={{ backgroundColor: service.bgColor}}>
                <Image src={service.imgSrc} alt={service.imgAlt} width={300} height={500}/>
                <div className="flex flex-col gap-2" style={{color: service.txtColor}}>
                 <span className="palmore-light text-4xl">{service.title}</span>
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
