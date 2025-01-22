"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Cursos, Treinamentos e Mentorias"
          paragraph="Escolha o que melhor encaixa em suas necessidades! Estarei pronto para te ajudar a alavancar na carreira!"
          center
          width="665px"
        />

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer transition-colors duration-300 text-base font-semibold`}
            >
              Pessoal 👤
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition ease-in-out duration-300`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer transition-colors duration-300 text-base font-semibold`}
            >
              Empresas 🏢
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Curso"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "pessoa" : "empresa"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            message={`Olá, Talvane!😊✨ Gostaria de saber mais sobre o _*CURSO*_ na modalidade "${isMonthly ? "Pessoal 👤" : "Empresarial 🏢"}" que está no valor de R$${isMonthly ? "40" : "120"}.`}
          >
            <OfferList text="Aprendizado Prático e Direto" status="active" />
            <OfferList text="Métodos Eficazes e Rápidos" status="active" />
            <OfferList text="Transformação do Negócio" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Treinamento"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "pessoa" : "empresa"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            message={`Olá, Talvane!😊✨ Gostaria de mais informações sobre o _*TREINAMENTO*_ na modalidade "${isMonthly ? "Pessoal 👤" : "Empresarial 🏢"}"que está no valor de R$${isMonthly ? "399" : "789"}.`}
          >
            <OfferList text="Aumento de Faturamento" status="active" />
            <OfferList text="Desenvolvimento Contínuo" status="active" />
            <OfferList text="Fidelização de Clientes" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Mentoria"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "pessoa" : "empresa"}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
            message={`Olá, Talvane!😊✨ Gostaria de saber mais sobre a dinâmica da _*MENTORIA*_ na modalidade "${isMonthly ? "Pessoal 👤" : "Empresarial 🏢"}"que está no valor de R$${isMonthly ? "589" : "999"}.`}
          >
            <OfferList text="Acompanhamento Personalizado" status="active" />
            <OfferList text="Planejamento Estratégico Focado" status="active" />
            <OfferList text="Superação de Desafios Rápidos" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
