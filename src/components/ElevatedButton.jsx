import PropTypes from "prop-types";

export default function ElevatedButton({ link, children, isNotBlank }) {
  ElevatedButton.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.node,
    isNotBlank: PropTypes.bool,
  };

  return (
    <a
      href={link}
      target={isNotBlank ? "" : "_blank"}
      className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-200 flex flex-row items-center justify-center min-w-[140px]"
    >
      {children}
    </a>
  );
}
