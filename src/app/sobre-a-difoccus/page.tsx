import { MasterDiv } from "@/components";
import Image from "next/image";

const Difoccus = () => {
  return (
    <div>
      <h1 className="text-orange-300">Sobre</h1>
      <MasterDiv>
        <div className="grid grid-cols-3 gap-8">
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
      </MasterDiv>
    </div>
  );
};

export default Difoccus;
