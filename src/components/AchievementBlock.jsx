import PropTypes from "prop-types";
import { data } from "../data";

export default function AchievementBlock({ achievement }) {
  AchievementBlock.propTypes = {
    achievement: PropTypes.object.isRequired,
  };

  return (
    <div className="flex flex-row items-start gap-4 p-6 md:p-8 bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary rounded-lg">
      <img
        className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0"
        src={data.achievementImg}
        alt="Trophy"
      />
      <p className="text-base md:text-lg lg:text-xl text-text-secondary dark:text-text-secondary leading-relaxed pt-1">
        {achievement.title}
      </p>
    </div>
  );
}
