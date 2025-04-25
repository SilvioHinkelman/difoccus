import MasterDiv from "@/components/MasterDiv";
import { QuoteDown, QuoteUp } from "iconsax-reactjs";

export default function Home() {
  return (
    <div>
      <div className=" font-[family-name:var(--font-roboto-mono)] flex justify-center  bg-home">
        <main
          className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start h-1/3 md:h-fit md:w-1/2 mt-auto md:ml-auto my-auto text-[#131524] 
        p-6 pr-6 lg:p-0 lg:pr-14"
        >
          <h1 className="text-[60px] font-black text-center w-ful w-fit max-w-[650px] max-md:bg-[#ffffff5b] rounded-2xl">
            A Difoccus
          </h1>
          <p className="text-lg md:text-xl font-bold bg-[#ffffff5b] md:bg-[#ffffff34] p-3 md:p-6 rounded-2xl max-w-[650px]">
            A Difoccus Produções é uma empresa especializada na realização de
            formaturas e eventos. Nosso objetivo é proporcionar aos clientes uma
            produção de altíssimo nível, oferecendo o que há de melhor no
            mercado em tecnologias e serviços. Procuramos sempre inovar as
            fórmulas de edição e captação de imagens mantendo o mercado sempre
            em crescimento e desenvolvimento. Possuímos como destaque nossa
            qualidade de vídeo e foto, fator que sempre obtivemos o
            reconhecimento de nossos clientes. Além disso, a Difoccus procura
            dar um atendimento personalizado e para isso colocamos nossas
            equipes à disposição. Sempre estimulamos a participação dos clientes
            no processo, ouvindo suas opiniões, disponibilizando o material já
            preparado para aprovação, fornecendo sugestões e opções para que o
            resultado atinja suas melhores expectativas, aumentando assim ainda
            mais a emoção do momento registrado.
          </p>
        </main>
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
    </div>
  );
}
