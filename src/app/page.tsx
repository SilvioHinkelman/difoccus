import { MasterDiv, MotionPath, SectionOne } from "@/components";
import { QuoteDown, QuoteUp } from "iconsax-reactjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className=" font-[family-name:var(--font-roboto-mono)] flex justify-center  bg-home">
        <SectionOne />
      </div>
      <MasterDiv>
        <p className="text-white text-3xl font-extrabold text-center w-full mt-14">
          <QuoteUp
            size="18"
            color="#fff"
            variant="Bold"
            className="inline-block align-middle mb-5"
          />
          A Difoccus produções faz de tudo para tornar a sua formatura um
          acontecimento inesquecível, aliando equipamentos de alta qualidade à
          uma equipe qualificada e criativa!
          <QuoteDown
            size="18"
            color="#fff"
            variant="Bold"
            className="inline-block align-middle mb-5 ml-1"
          />
        </p>
      </MasterDiv>
      <div className="flex justify-center mt-20">
        <MotionPath />
      </div>
      <div className="flex flex-col items-center gap-8">
        {Array.from({ length: 29 }, (_, index) => (
          <Image
            key={index}
            src={`/album/photo-${index}.JPG`}
            alt="Next.js logo"
            width={1920}
            height={1280}
          />
        ))}
      </div>
    </div>
  );
}
