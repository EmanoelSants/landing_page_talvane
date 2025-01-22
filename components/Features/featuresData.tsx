import { Feature } from "@/types/feature";
import {
  PiBrainDuotone,
  PiChalkboardTeacherDuotone,
  PiGraphDuotone,
  PiHandshakeDuotone,
  PiTargetDuotone,
} from "react-icons/pi";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <PiBrainDuotone className="w-8 h-8" />,
    title: "Acompanhamento Personalizado",
    paragraph:
      "Conte com um suporte exclusivo, presencial ou online, direcionado para potencializar seu sucesso com estratégias práticas e eficazes.",
  },
  {
    id: 2,
    icon: <PiChalkboardTeacherDuotone className="w-8 h-8" />,
    title: "Técnicas Aplicáveis na Prática",
    paragraph:
      "Domine métodos dinâmicos e objetivos que transformam aprendizado em ação, tornando seu progresso mais rápido e eficiente.",
  },
  {
    id: 3,
    icon: <PiTargetDuotone className="w-8 h-8" />,
    title: "Resultados Alcançados com Clareza",
    paragraph:
      "Desenvolva habilidades estratégicas e assertivas para conquistar metas importantes e obter realizações de forma consistente.",
  },
  {
    id: 4,
    icon: <PiTargetDuotone className="w-8 h-8" />,
    title: "Eleve Sua Performance Pessoal",
    paragraph:
      "Amplie sua confiança para fechar negociações, alcançar seus objetivos ou em situações desafiadoras do dia a dia.",
  },
  {
    id: 5,
    icon: <PiGraphDuotone className="w-8 h-8" />,
    title: "Crescimento Mensurável",
    paragraph:
      "Acompanhe seu desenvolvimento com métricas claras e alcance resultados tangíveis que elevam sua vida pessoal e profissional.",
  },
  {
    id: 6,
    icon: <PiHandshakeDuotone className="w-8 h-8" />,
    title: "Rede de Conexões Valiosas",
    paragraph:
      "Viva uma experiência inspiradora, conecte-se com pessoas que compartilham objetivos e descubra momentos únicos de aprendizado.",
  },
];
export default featuresData;
