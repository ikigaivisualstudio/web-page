import ScrollDown from "@/components/Buttons/ScrollDown";
import AboutUs from "@/components/Sections/AboutUs";
import ContactUs from "@/components/Sections/ContactUs";

export default function Home() {
  return (
    <main>
      <div className=" relative flex h-screen flex-col items-center justify-center bg-home">
        <div className="flex flex-col items-center justify-center rounded-3xl bg-white/30 px-20 py-10 shadow-md backdrop-blur-lg">
          <p className="text-4xl font-bold text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] lg:text-9xl">OpenTechne</p>

          <p className=" pt-7 text-2xl font-normal text-white [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] lg:text-4xl">Where technology becomes art</p>
        </div>
        <ScrollDown page={1} />
      </div>
      <AboutUs />
      <ContactUs />
    </main>
  );
}
