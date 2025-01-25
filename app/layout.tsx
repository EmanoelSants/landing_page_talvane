import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

import ClientLayout from "./client-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Talvane José - Coach, Empresário e Consultor Empresarial",
    template: "%s | Talvane José",
  },
  description: "Transformando negócios e vidas através de consultoria empresarial estratégica e coaching de alto desempenho",
  keywords: [
    "coaching",
    "consultoria empresarial", 
    "desenvolvimento empresarial",
    "estratégia de negócios",
    "desenvolvimento pessoal",
    "liderança",
    "empreendedorismo"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout inter={inter.className}>{children}</ClientLayout>;
}