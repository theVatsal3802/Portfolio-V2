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
      className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:brightness-95 dark:hover:brightness-125 active:scale-95 transition-all duration-200 flex flex-row items-center justify-center min-w-[140px]"
    >
      {children}
    </a>
  );
}
