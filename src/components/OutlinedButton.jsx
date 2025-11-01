import PropTypes from "prop-types";

export default function OutlinedButton({ link, children, isNotBlank }) {
  OutlinedButton.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.node,
    isNotBlank: PropTypes.bool,
  };

  return (
    <a
      href={link}
      target={isNotBlank ? "" : "_blank"}
      className="px-6 py-3 border border-border-primary dark:border-border-primary rounded-lg font-medium hover:bg-bg-secondary dark:hover:bg-bg-secondary hover:scale-105 active:scale-95 transition-all duration-200 flex flex-row items-center justify-center min-w-[140px] text-text-primary dark:text-text-primary"
    >
      {children}
    </a>
  );
}
