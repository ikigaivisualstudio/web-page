"use client";

import Image from "next/image";

export default function ScrollDown() {
  return (
    <div className="absolute bottom-8 flex w-full justify-center">
      <button
        className=" animate-bounce"
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
          width={100}
          height={100}
          priority
        />
      </button>
    </div>
  );
}
