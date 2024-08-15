"use client";
import Image from "next/image";

const Service = [
  {
    "title" : "Graphic Design",
    "description" : "Our team of creative designers works closely with you to understand your vision and bring it to life through innovative and compelling designs.",
    "imgSrc" : "/services/graphic_design.png",
    "imgAlt" : "drawing one"
  },
  {
    "title" : "Brand Design",
    "description" : "Our approach is holistic, ensuring that every element from typography to color schemes aligns perfectly with your brand's personality and values.",
    "imgSrc" : "/services/brand_design.png",
    "imgAlt" : "drawing one"
  },
  {
    "title" : "Web Design",
    "description" : "Our goal is to deliver a seamless digital experience that reflects your brand and engages your visitors, user-friendly and optimized for performance.",
    "imgSrc" : "/services/web_design.png",
    "imgAlt" : "drawing one"
  }
]


export default function OurServices() {
  return (
    <div className="p-20 flex flex-col">
      <span className="text-2xl font-light uppercase text-dark-green">/ our services</span>
      <div className="flex flex-row justify-center items-center gap-20">
        {Service.map((service, index) => {
            return (
            <div key={index} className="flex flex-col justify-center items-center text-center p-10" >
                <Image src={service.imgSrc} alt={service.imgAlt} width={300} height={500}/>
                <div className="flex flex-col gap-2 text-dark-green">
                 <span className="palmore-light text-4xl">{service.title}</span>
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>
            );
          })}
      </div>
      <a href="mailto:ikigaivisualstudio00@gmail.com" className="text-center uppercase p-4 bg-dark-green w-[300px] mx-auto text-light hover:bg-light border-2 border-dark-green hover:text-dark-green transition-all  ">inquire today</a>
    </div>
  );
}
