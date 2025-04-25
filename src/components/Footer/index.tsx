"use client";
import Image, { ImageLoaderProps } from "next/image";

export default function Footer() {
  const imageLoaders = ({ src, width, quality }: ImageLoaderProps) => {
    return `https://img.icons8.com/?size=100&id=nj0Uj45LGUYh&format=png&color=000000/${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  const imageLoaderss = ({ src, width, quality }: ImageLoaderProps) => {
    return `https://img.icons8.com/?size=100&id=A1JUR9NRH7sC&format=png&color=000000/${src}?w=${width}&q=${
      quality || 75
    }`;
  };
  return (
    <footer>
      <Image
        loader={imageLoaders}
        src="me.png"
        alt="Picture of the author"
        width={40}
        height={40}
      />
      <Image
        loader={imageLoaderss}
        src="me.png"
        alt="Picture of the author"
        width={40}
        height={40}
      />
    </footer>
  );
}
