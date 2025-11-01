import AchievementBlock from "../components/AchievementBlock";
import { data } from "../data";

export default function Achievement() {
  return (
    <section className="py-12 md:py-16 lg:py-24" id="achievements">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 lg:mb-16 text-center text-text-primary dark:text-text-primary">
        <span className="text-accent">Achievements</span>
      </h2>
      <div className="flex flex-col gap-4 md:gap-6 max-w-4xl mx-auto">
        {data.achievement.map((item, index) => (
          <AchievementBlock key={index} achievement={item} />
        ))}
      </div>
    </section>
  );
}
