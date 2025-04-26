import { StaticImageData } from "next/image";
import ImageZero from "../../public/album/photo-0.jpg";
import ImageOne from "../../public/album/photo-1.jpg";
import ImageTwo from "../../public/album/photo-2.jpg";
import ImageThree from "../../public/album/photo-3.jpg";
import ImageFour from "../../public/album/photo-4.jpg";
import ImageFive from "../../public/album/photo-5.jpg";
import ImageSix from "../../public/album/photo-6.jpg";
import ImageSeven from "../../public/album/photo-7.jpg";
import ImageEight from "../../public/album/photo-8.jpg";
import ImageNine from "../../public/album/photo-9.jpg";
import ImageTeen from "../../public/album/photo-10.jpg";
import ImageEleven from "../../public/album/photo-11.jpg";
import ImageTwelve from "../../public/album/photo-12.jpg";
import ImageSixteen from "../../public/album/photo-16.jpg";
import ImageSeventeen from "../../public/album/photo-17.jpg";

export interface ImageType {
  id: number;
  img: StaticImageData;
}

export const MockSwiper: ImageType[] = [
  { id: 0, img: ImageZero },
  { id: 1, img: ImageOne },
  { id: 2, img: ImageTwo },
  { id: 3, img: ImageThree },
  { id: 4, img: ImageFour },
  { id: 5, img: ImageFive },
  { id: 6, img: ImageSix },
  { id: 7, img: ImageSeven },
  { id: 8, img: ImageEight },
  { id: 9, img: ImageNine },
  { id: 10, img: ImageTeen },
  { id: 11, img: ImageEleven },
  { id: 12, img: ImageTwelve },
  { id: 16, img: ImageSixteen },
  { id: 17, img: ImageSeventeen },
];