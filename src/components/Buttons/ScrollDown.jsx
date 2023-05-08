"use client";
import Image from "next/image";

export default function ScrollDown(props) {
  return (
    <div className="absolute bottom-12 flex  w-full justify-center lg:bottom-8">
      <button
        className="relative h-16 w-16 animate-bounce "
        onClick={() => {
          const screenHeight = window.screen.height;
          console.log(screenHeight)
          window.scrollTo({
            top: screenHeight * props.page,
            behavior: "smooth",
          });
        }}
      >
        <Image src="./chevron-double-down.svg" alt="chevron-double-down" fill priority />
      </button>
    </div>
  );
}
