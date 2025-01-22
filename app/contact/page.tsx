import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meus Contatos | José Talvane - Coach",
  description: "Aqui estão os meios que você pode estar me contatando.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Meus Contatos"
        description="Quer garantir sua vaga ou retirar alguma dúvida? Deixe seus dados logo a baixo, e entrarei em contato o mais breve possível."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
