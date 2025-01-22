import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-14 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Descubra Oportunidades"
            paragraph="Descubra maneiras objetivas e certeiras para chegar ao seu objetivo mais rápido, com métodos sólidos e testados!"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
