import Breadcrumb from "@/components/Common/Breadcrumb";

const DataProcessing = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tratamento de Dados"
        description="Entenda como seus dados são tratados e utilizados para proporcionar a melhor experiência possível."
      />
      <section className="px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-zinc-200">
          Tratamento de Dados
        </h1>
        <p className="mt-4 text-gray-600 dark:text-zinc-400">
          Nosso compromisso é garantir que seus dados sejam tratados de forma
          ética e em conformidade com as regulamentações aplicáveis.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-zinc-200">
          1. Coleta de Dados
        </h2>
        <p className="mt-2 text-gray-600 dark:text-zinc-400">
          Coletamos dados estritamente necessários para fornecer nossos
          serviços, como informações de identificação, dados de contato e
          preferências do usuário.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-zinc-200">
          2. Finalidade do Tratamento
        </h2>
        <p className="mt-2 text-gray-600 dark:text-zinc-400">
          Seus dados são utilizados para aprimorar nossos serviços, personalizar
          sua experiência e cumprir obrigações legais ou regulatórias.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-zinc-200">
          3. Compartilhamento de Dados
        </h2>
        <p className="mt-2 text-gray-600 dark:text-zinc-400">
          Compartilhamos seus dados apenas com parceiros confiáveis e para fins
          específicos, garantindo sempre a segurança e confidencialidade das
          informações.
        </p>

        <p className="mt-6 text-gray-600 dark:text-zinc-400">
          Caso tenha dúvidas sobre o tratamento de dados, entre em contato
          conosco. Estamos à disposição para atendê-lo.
        </p>
      </section>
    </>
  );
};

export default DataProcessing;
