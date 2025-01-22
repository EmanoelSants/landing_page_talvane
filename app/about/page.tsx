import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mim | Talvane José - Coach",
  description:
    "Sou Talvane tenho 36 anos, sou cristão Pastor, filho de Deus, sou casado pai de filhas lindas, empresário da maior empresa de cosméticos profissionais P Preferida Professional.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Sobre Mim"
        description="Sou Talvane tenho 36 anos, sou cristão Pastor, filho de Deus, sou casado pai de filhas lindas, empresário da maior empresa de cosméticos profissionais P Preferida Professional, sou especialista em vendas e coach integral sistêmico pela instituição de ensino frebracis e outros cursos como ultrapassado limites com Rodrigo Cardoso e com coach Gilberto mais outro cursos entre outros elaborado e ministrado por empresas a qual fiz parte."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
