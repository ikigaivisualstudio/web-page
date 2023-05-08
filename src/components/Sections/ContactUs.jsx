"use client";
import ScrollDown from "@/components/Buttons/ScrollDown";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="relative flex h-screen flex-row items-center justify-center gap-10 bg-contact pt-5">
      <div className="flex max-w-2xl flex-col items-center justify-center gap-4 rounded-3xl border-2 border-white bg-white/30 p-5 shadow-md backdrop-blur-lg lg:p-8">
        <h2 className="text-3xl font-bold text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] lg:pb-3 lg:text-5xl">Contact Us</h2>
        <div className="flex flex-col items-center justify-center">
          <span className=" text-orange-800">name</span>
          <span className=" text-medium font-semibold text-white lg:text-xl">OPENTECHNE LLC</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className=" text-orange-800">address</span>
          <span className=" text-medium font-semibold text-white lg:text-xl">500 4TH ST NW STE 102 PMB 1643</span>
          <span className=" text-medium font-semibold text-white lg:text-xl">ALBUQUERQUE NM 87102</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className=" text-orange-800">email</span>
          <span className=" text-medium font-semibold text-white lg:text-xl">opentechne@gmail.com</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className=" text-orange-800">phone number</span>
          <span className=" text-medium font-semibold text-white lg:text-xl">+12088030505</span>
        </div>
      </div>

      <ScrollDown page={0} />
    </div>
  );
}
