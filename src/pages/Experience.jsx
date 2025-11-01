import ExperienceBox from "../components/ExperienceBox";
import { data } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-16 lg:py-24">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 lg:mb-16 text-center text-text-primary dark:text-text-primary">
        <span className="text-accent">Experience</span>
      </h2>
      <div className="flex flex-col gap-6 md:gap-8">
        {data.experience.map((position, index) => (
          <ExperienceBox
            key={index}
            title={position.name}
            position={position.position}
            desc={position.desc}
            certificate={position.certificate ?? null}
            duration={position.duration}
          />
        ))}
      </div>
    </section>
  );
}
