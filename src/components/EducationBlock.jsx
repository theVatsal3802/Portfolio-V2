import PropTypes from "prop-types";

export default function EducationBlock({ education }) {
  EducationBlock.propTypes = {
    education: PropTypes.object.isRequired,
  };

  return (
    <div className="flex flex-col p-6 md:p-8 bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary rounded-lg">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
        <h2 className="text-accent text-lg md:text-xl lg:text-2xl font-bold">
          {education.college}
        </h2>
        <p className="text-text-secondary dark:text-text-secondary text-base md:text-lg font-medium">
          {education.score}
        </p>
      </div>
      <p className="text-text-secondary dark:text-text-secondary text-sm md:text-base mb-2">
        {education.duration}
      </p>
      <p className="text-text-primary dark:text-text-primary font-semibold text-base md:text-lg">
        {education.level}
      </p>
    </div>
  );
}
