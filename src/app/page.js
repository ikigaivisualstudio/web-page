import Image from "next/image";
import ScrollDown from "@/components/Buttons/ScrollDown";
import AboutUs from "@/components/Sections/AboutUs";

export default function Home() {
  return (
    <main>
      <div className="relative h-screen bg-city-desktop">
        <div className=" flex flex-col place-items-center pt-80 ">
          <p className=" text-4xl font-medium lg:text-8xl">OpenTechne</p>

          <p className=" mt-7 text-2xl font-normal lg:text-4xl">
            Where technology becomes art
          </p>
        </div>
        <ScrollDown />
      </div>
      <AboutUs />
    </main>
  );
}
