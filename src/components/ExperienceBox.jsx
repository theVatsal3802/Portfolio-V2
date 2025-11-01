import PropTypes from "prop-types";
import { HiOutlineExternalLink } from "react-icons/hi";
import ElevatedButton from "./ElevatedButton";

export default function ExperienceBox({
  title,
  duration,
  desc,
  certificate,
  position,
}) {
  ExperienceBox.propTypes = {
    title: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    desc: PropTypes.array.isRequired,
    certificate: PropTypes.string,
  };
  return (
    <div className="bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary rounded-lg p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
        <div className="flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-accent">
            {title}
          </h3>
          <h4 className="text-lg md:text-xl font-semibold mb-2 text-text-primary dark:text-text-primary">
            {position}
          </h4>
        </div>
        <div className="flex flex-col md:items-end gap-3">
          <p className="text-base md:text-lg font-medium text-text-secondary dark:text-text-secondary">
            {duration}
          </p>
          {certificate && (
            <ElevatedButton link={certificate}>
              <span className="mr-2">
                <HiOutlineExternalLink size={18} />
              </span>
              View certificate
            </ElevatedButton>
          )}
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-text-secondary dark:text-text-secondary">
        {desc.map((point, index) => (
          <li key={index} className="pl-2">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
