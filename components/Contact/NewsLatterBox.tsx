"use client";

import { useTheme } from "next-themes";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";

const NewsLatterBox = () => {
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previne o redirecionamento padrão
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjkgvklv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Inscrição realizada com sucesso!");
        form.reset(); // Limpa o formulário após o envio bem-sucedido
      } else {
        toast.error("Erro ao realizar a inscrição. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro ao conectar com o servidor. Verifique sua conexão.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <Toaster position="top-right" reverseOrder={false} />
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Inscreva-se e fique por dentro das novidades
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Assine gratuitamente nossa Newslatter e fique por dentro de todas as
        novidades.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Digite seu Nome"
          className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Digite seu Email"
          className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          required
        />
        <button
          type="submit"
          className="shadow-submit dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-7 py-3 text-base font-medium text-white duration-300 hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Inscrever-se"}
        </button>
        <p className="dark:text-body-color-dark text-center text-base leading-relaxed text-body-color">
          Não há garantia de spam. Portanto, não envie nenhum e-mail de spam.
        </p>
      </form>
      {/* SVG e outros elementos decorativos */}
    </div>
  );
};

export default NewsLatterBox;
