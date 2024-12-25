import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="bg-black text-white pb-8 flex flex-col items-center">
      <h1 className="text-center pb-12 text-2xl font-bold">
        EXPLORE OUR ONE OF A KIND APPROACH
      </h1>
      <div className="relative group">
        {/* Link wrapping the image and overlay */}
        <Link href="https://www.platinumexoticstx.com/" target="_blank">
            <div className="relative w-[600px] h-[125px] overflow-hidden">
              {/* Image */}
              <Image
                src="/images/PlatinumExoticsSS.png"
                alt="Platinum Exotics"
                layout="fill" // Makes the image fill the container
                objectFit="cover" // Ensures the image fits and crops correctly
                objectPosition="center 44%" // Adjusts the vertical position of the image
                className="rounded-2xl"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-end justify-center opacity-0 translate-y-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="bg-black bg-opacity-75 text-white text-lg font-bold w-full text-center py-2">
                  SEE CASE STUDY
                </p>
              </div>
            </div>
        </Link>
      </div>
    </div>
  );
}
