"use client";

import Image from "next/image";

export default function ScrollDown() {
  return (
    <div className="absolute bottom-12 lg:bottom-8  flex w-full justify-center">
      <button
        className=" animate-bounce w-16 h-16 "
        onClick={() => {
          const screenHeight = window.screen.height;
          window.scrollTo({
            top: screenHeight,
            behavior: "smooth",
          });
        }}
      >
        <Image
          src="./chevron-double-down.svg"
          alt="chevron-double-down"
          fill
          priority
        />
      </button>
    </div>
  );
}
