import EducationBlock from "../components/EducationBlock";
import { data } from "../data";

export default function Education() {
  return (
    <section className="py-12 md:py-16 lg:py-24" id="education">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 lg:mb-16 text-center text-text-primary dark:text-text-primary">
        <span className="text-accent">Education</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {data.education.map((item, index) => (
          <EducationBlock key={index} education={item} />
        ))}
      </div>
    </section>
  );
}
