"use client";
import ScrollDown from "@/components/Buttons/ScrollDown";

export default function AboutUs() {
  return (
    <div className="relative h-screen bg-slate-800">
     
        <div className="mx-auto max-w-2xl lg:ml-40 lg:pt-24">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Cutting edge tech is our confort zone
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      
      <ScrollDown />
    </div>
    
  );
}
