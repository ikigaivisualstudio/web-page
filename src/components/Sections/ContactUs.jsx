"use client";
import ScrollDown from "@/components/Buttons/ScrollDown";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="relative flex h-screen flex-row items-center justify-center gap-10 bg-contact pt-5">
      {/* <div className="flex max-w-2xl flex-col items-center justify-center rounded-3xl border-2 border-white bg-white/30 p-8 shadow-md backdrop-blur-lg">
        <h2 className="pb-3 text-5xl font-bold text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]">Contact Us</h2>
      </div> */}
      <ScrollDown page={0} />
    </div>
  );
}
