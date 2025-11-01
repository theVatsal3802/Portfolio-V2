import { data } from "../data";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-24">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center text-text-primary dark:text-text-primary">
        About <span className="text-accent">Me</span>
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary rounded-lg p-6 md:p-8 lg:p-10">
          <p className="text-base md:text-lg lg:text-xl text-text-secondary dark:text-text-secondary leading-relaxed text-center">
            {data.abstract.first.text}
          </p>
        </div>
      </div>
    </section>
  );
}
