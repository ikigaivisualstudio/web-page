import Image from "next/image";
import ScrollDown from "@/components/Buttons/ScrollDown";

export default function Home() {
  return (
    <main>
      <div className="relative h-screen bg-city-desktop">
        <div className=" flex flex-col place-items-center pt-80 ">
          <p className=" text-8xl font-medium">OpenTechne</p>
          <p className=" mt-7 text-4xl font-normal">Where technology becomes art</p>
        </div>
        <ScrollDown />
      </div>
      <div className="h-screen bg-slate-800"></div>
    </main>
  );
}
