"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import styles from "@/style";

export function Partner() {
  const [emblaRef] = useEmblaCarousel({ align: "center", loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <>
      <h2
        className={`${styles.heading1} lg:max-w-[70%] lg:mx-auto text-black text-center mb-8`}
      >
        Our Partners
      </h2>
      <div className="embla my-6" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide flex items-center justify-center">
            <div className="   h-40 w-full max-w-xs relative">
              <Image
                fill
                src="/part.png"
                alt="Partner logo"
                className="object-contain"
              />
            </div>
          </div>

          <div className="embla__slide flex items-center justify-center">
            <div className="   h-40 w-full max-w-xs relative">
              <Image
                fill
                src="/part2.png"
                alt="Partner logo"
                className="object-contain"
              />
            </div>
          </div>

          <div className="embla__slide flex items-center justify-center">
            <div className="   h-40 w-full max-w-xs relative">
              <Image
                fill
                src="/logo.png"
                alt="Partner logo"
                className="object-contain"
              />
            </div>
          </div>

          <div className="embla__slide flex items-center justify-center">
            <div className="   h-40 w-full max-w-xs relative">
              <Image
                fill
                src="/logo.png"
                alt="Partner logo"
                className="object-contain"
              />
            </div>
          </div>

          {/* end */}
        </div>
      </div>
    </>
  );
}
