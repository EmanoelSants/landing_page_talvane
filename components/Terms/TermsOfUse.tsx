import Breadcrumb from "@/components/Common/Breadcrumb";

const TermsOfUse = () => {
  return (
    <>
      <Breadcrumb
        pageName="Termos de Uso"
        description="Leia atentamente os Termos de Uso antes de utilizar nosso site. Ao acessar ou usar o site, você concorda em estar vinculado a estes termos."
      />
      <section className="px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-zinc-200">
          Termos de Uso
        </h1>
        <p className="mt-4 text-gray-600 dark:text-zinc-400">
          Bem-vindo ao nosso site. Estes Termos de Uso descrevem as condições
          que regem o uso de nosso conteúdo, produtos e serviços.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-zinc-200">
          1. Aceitação dos Termos
        </h2>
        <p className="mt-2 text-gray-600 dark:text-zinc-400">
          Ao acessar este site, você concorda em cumprir estes Termos de Uso e
          todas as leis e regulamentos aplicáveis. Se você não concorda, deve
          cessar imediatamente o uso do site.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-zinc-200">
          2. Uso Permitido
        </h2>
        <p className="mt-2 text-gray-600 dark:text-zinc-400">
          O conteúdo deste site é destinado exclusivamente para uso pessoal e
          não comercial. É proibido modificar, reproduzir, distribuir ou
          comercializar qualquer conteúdo sem autorização prévia.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-zinc-200">
          3. Responsabilidades do Usuário
        </h2>
        <p className="mt-2 text-gray-600 dark:text-zinc-400">
          Você é responsável por garantir que todas as informações fornecidas
          por você sejam precisas e atualizadas, e por não realizar qualquer
          atividade que possa comprometer a integridade do site.
        </p>

        <p className="mt-6 text-gray-600 dark:text-zinc-400">
          Para mais informações, entre em contato conosco por meio de nossos
          canais oficiais.
        </p>
      </section>
    </>
  );
};

export default TermsOfUse;
