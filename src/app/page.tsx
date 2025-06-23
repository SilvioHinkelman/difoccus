"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const textRef3 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef1.current || !textRef2.current || !textRef3.current) return;

    // Agora split em palavras + caracteres
    const split1 = new SplitType(textRef1.current, {
      types: "words,chars",
      charClass: "char-1",
      wordClass: "word-1",
    });

    const split2 = new SplitType(textRef2.current, {
      types: "words,chars",
      charClass: "char-2",
      wordClass: "word-2",
    });

    const split3 = new SplitType(textRef3.current, {
      types: "words,chars",
      charClass: "char-3",
      wordClass: "word-3",
    });

    gsap.set([textRef1.current, textRef2.current, textRef3.current], {
      opacity: 1,
    });

    gsap.from(".char-1", {
      y: 100,
      opacity: 0,
      rotation: 90,
      ease: "elastic.out(1, 0.5)",
      duration: 0.5,
      stagger: 0.02,
      delay: 9,
    });

    gsap.from(".char-2", {
      y: 100,
      opacity: 0,
      rotation: 90,
      ease: "elastic.out(1, 0.5)",
      duration: 1,
      stagger: 0.02,
      delay: 15,
    });

    gsap.from(".char-3", {
      y: 100,
      opacity: 0,
      rotation: 90,
      ease: "elastic.out(1, 0.5)",
      duration: 1,
      stagger: 0.02,
      delay: 21,
    });

    return () => {
      split1.revert();
      split2.revert();
      split3.revert();
    };
  }, []);

  return (
    <>
      <section className="md:text-xl max-w-4xl mx-auto p-6 flex flex-col gap-5 flex-1">
        <TypeAnimation
          className="ml-8 text-center"
          sequence={[
            "Somos inovação!",
            1000,
            "Somos qualidade!",
            1000,
            "Somos o que você merece!",
            1000,
            "Bem vindo a Difoccus!",
            1000,
          ]}
          wrapper="h1"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
        />
        <h1 ref={textRef1} style={{ opacity: 0 }} className=" text-justify">
          <strong className="pl-10"> A Difoccus Produções</strong> é
          especializada na realização de formaturas e eventos, com o compromisso
          de entregar produções de altíssimo nível. Nosso objetivo é oferecer o
          que há de melhor em tecnologia e serviços, inovando continuamente nas
          formas de captação e edição de imagens para impulsionar o crescimento
          e a evolução do mercado.
        </h1>

        <h1 ref={textRef2} style={{ opacity: 0 }} className=" text-justify">
          <span className="pl-10" /> Nos destacamos pela excelência em vídeo e
          fotografia — um diferencial amplamente reconhecido por nossos
          clientes. Valorizamos o atendimento personalizado e, por isso,
          colocamos nossas equipes sempre à disposição, garantindo atenção total
          em cada etapa do processo.
        </h1>

        <h1 ref={textRef3} style={{ opacity: 0 }} className=" text-justify">
          <span className="pl-10" />
          Acreditamos na construção colaborativa. Estimulamos a participação
          ativa dos clientes, ouvindo suas ideias, apresentando sugestões e
          disponibilizando o material para aprovação. Assim, garantimos que o
          resultado final supere expectativas e torne cada momento registrado
          ainda mais emocionante e inesquecível.
        </h1>

        <div className="bg-gray-800 min-h-12 mx-auto w-8 rounded-2xl border border-white mt-10">
          <div className="bg-white w-[2px] py-[3px] mb-1 mt-2 animate-bounce mx-auto" />
          <div className="bg-white w-full h-[1px] t-[1px]" />
        </div>
      </section>
      <h3 className="max-w-4xl mx-auto indent-10 p-6 text-justify">
        Nossa proposta é personalizar este momento tão importante, tornando-o
        especial, através da arte que envolve toda a produção do evento. Nós
        observando os diferenciais respeitando as características de cada turma
        ao produzir, registrar e editar todos os momentos, das festas ao baile
        de formatura. Para a Difoccus a sua turma não é só mais uma data no
        calendário de eventos, mas uma nova oportunidade de mostrar a nossa
        qualidade. A Difoccus dispõe de todos os itens necessários para a
        produção que o seu evento merece.
      </h3>
    </>
  );
}
