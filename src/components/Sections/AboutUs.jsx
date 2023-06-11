"use client";
import ScrollDown from "@/components/Buttons/ScrollDown";
import Image from "next/image";

const techStack = [
  "Rust",
  "Solidity",
  "Next",
  "ChatGPT",
  "CSS",
  "HTML5",
  "Adobe",
  "Midjourney",
  "Figma",
];

export default function AboutUs() {
  return (
    <div className="relative flex h-screen flex-row  flex-wrap items-center justify-center gap-10 bg-about pt-5 lg:flex-nowrap">
      <div className="m-3 flex max-w-2xl flex-col items-center justify-center rounded-3xl border-2 border-white bg-white/30 p-5 shadow-md backdrop-blur-lg  lg:p-10">
        <h1 className="pb-3 text-2xl font-semibold text-white lg:text-3xl">
          ABOUT US
        </h1>
        <h2 className="pb-3 text-center text-5xl font-black tracking-tight text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] lg:text-7xl">
          Cutting edge tech is our comfort zone
        </h2>
        <p className="rounded-3xl border border-white bg-white/40 p-3 text-center leading-6 text-orange-800 shadow-md backdrop-blur-md lg:p-6 lg:text-lg lg:font-medium">
          At OpenTechne, we're passionate about harnessing the power of web3
          open source development to drive innovation and collaboration across
          industries. We believe in the transformative potential of technology
          to create new opportunities, challenge conventional wisdom, and build
          a more transparent and equitable future. With a relentless focus on
          delivering cutting-edge, tech-driven solutions, we're proud to be
          helping to shape the future of the web and beyond.
        </p>
      </div>
      <div className="flex max-w-2xl flex-col items-center justify-center rounded-3xl border-2 border-white bg-white/30 p-8 shadow-md backdrop-blur-lg">
        <h2 className="pb-3 text-5xl font-bold text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)]">
          Tech Stack
        </h2>
        <p className="px-10 text-center font-medium text-orange-800">
          We are concerned about the security of our customers. That's why we
          always keep updating and use best technologies in our products.
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-5 p-3">
          {techStack.map((tech) => {
            return (
              <div className="h-30 flex w-40 flex-col items-center justify-center rounded-2xl border border-white bg-white/40 py-3 shadow-md backdrop-blur-lg">
                <div className=" relative h-12 w-12">
                  <Image
                    fill
                    src={`./techstack/${tech.toLocaleLowerCase()}.png`}
                    alt="tech"
                    priority
                  />
                </div>
                <div className="pt-2 font-semibold text-orange-800">{tech}</div>
              </div>
            );
          })}
        </div>
      </div>
      <ScrollDown page={2} />
    </div>
  );
}
