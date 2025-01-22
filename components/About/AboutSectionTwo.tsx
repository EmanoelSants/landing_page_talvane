import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/image2.jpg"
                alt="about image"
                fill
                className="drop-shadow-three object-cover rounded-xl dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/image2.jpg"
                alt="about image"
                fill
                className="drop-shadow-three object-cover rounded-xl hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  O que pratico?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Sou cabeleireiro unissex, especialista em tratamentos
                  capilares, e fundador da P Preferida Professional, com ampla
                  experiência em cosméticos.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Qual a minha visão?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Tornar-se a marca mundialmente reconhecida, apoiando
                  profissionais da beleza, seus clientes, e gerando empregos com
                  uma indústria própria.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Quais os meus planos?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Vislumbro criar ONGs para transformar vidas, oferecendo cursos
                  profissionalizantes, atividades diversas e compartilhando a
                  palavra do Senhor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
