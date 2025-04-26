"use client";

import Image from "next/image";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

const Players: React.FC = () => {
  const config: SwiperProps = {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        //    shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    centeredSlides: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
    modules: [EffectCreative, Autoplay],
    loop: true,
    speed: 1000,
  };

  return (
    <Swiper {...config} className="w-full amax-w-2xl">
      {Array.from({ length: 29 }, (_, index: number) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[680px] bg-[#131524] flex items-center justify-center rounded-lg overflow-hidden">
            <Image
              alt={`photo-${index}`}
              src={`/album/photo-${index}.JPG`}
              width={1920}
              height={1280}
              priority={index === 0}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Players;
