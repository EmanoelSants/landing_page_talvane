import Breadcrumb from "@/components/Common/Breadcrumb";

const PrivacyPolicy = () => {
  return (
    <>
      <Breadcrumb
        pageName="Políticas de Privacidade"
        description="Sua privacidade é importante para nós. Leia nossa política para entender como coletamos, usamos e protegemos suas informações pessoais."
      />
      <section className="px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-zinc-200">
          Políticas de Privacidade
        </h1>
        <p className="mt-4 text-gray-600 dark:text-zinc-400">
          Esta Política de Privacidade descreve como coletamos, usamos e
          protegemos suas informações pessoais ao utilizar nosso site.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-zinc-200">
          1. Informações que Coletamos
        </h2>
        <p className="mt-2 text-gray-600 dark:text-zinc-400">
          Coletamos informações fornecidas por você, como nome, e-mail e dados
          de contato, e dados coletados automaticamente, como endereço IP e
          comportamento de navegação.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-zinc-200">
          2. Uso das Informações
        </h2>
        <p className="mt-2 text-gray-600 dark:text-zinc-400">
          Utilizamos suas informações para personalizar sua experiência,
          fornecer suporte, enviar comunicações e melhorar nossos serviços.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-zinc-200">
          3. Proteção de Dados
        </h2>
        <p className="mt-2 text-gray-600 dark:text-zinc-400">
          Implementamos medidas de segurança adequadas para proteger suas
          informações contra acesso não autorizado, perda ou alteração.
        </p>

        <p className="mt-6 text-gray-600 dark:text-zinc-400">
          Para dúvidas ou solicitações, entre em contato conosco através de
          nossos canais de atendimento.
        </p>
      </section>
    </>
  );
};

export default PrivacyPolicy;
