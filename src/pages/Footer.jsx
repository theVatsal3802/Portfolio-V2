import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { data } from "../data";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-12 md:py-16 lg:py-24 border-t border-border-primary dark:border-border-primary"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12 mb-12">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-text-primary dark:text-text-primary">
              <span className="text-accent">Get in </span>touch
            </h2>
            <a
              href={`mailto:${data.email}`}
              className="text-base md:text-lg lg:text-xl font-medium text-text-secondary dark:text-text-secondary hover:text-accent transition-colors duration-200 mb-4"
            >
              {data.email}
            </a>
            <div className="mt-4">
              <p className="text-sm md:text-base text-text-secondary dark:text-text-secondary mb-2">
                {data.phone}
              </p>
              <a
                href={`tel:${data.countryCode}${data.mobile}`}
                className="text-base md:text-lg font-medium text-text-secondary dark:text-text-secondary hover:text-accent transition-colors duration-200"
              >
                {data.countryCode} {data.mobile}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-border-primary dark:border-border-primary">
          <p className="text-sm md:text-base text-text-secondary dark:text-text-secondary">
            © {data.year} | {data.name}
          </p>
          <ul className="flex gap-4 flex-wrap justify-center">
            <li>
              <a
                href={data.contact.linkedin.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={data.contact.linkedin.name}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-border-primary dark:border-border-primary hover:border-accent hover:bg-bg-secondary dark:hover:bg-bg-secondary transition-colors duration-200"
              >
                <FaLinkedin
                  size={20}
                  className="text-text-secondary dark:text-text-secondary hover:text-accent"
                />
              </a>
            </li>
            <li>
              <a
                href={data.contact.github.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={data.contact.github.name}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-border-primary dark:border-border-primary hover:border-accent hover:bg-bg-secondary dark:hover:bg-bg-secondary transition-colors duration-200"
              >
                <AiFillGithub
                  size={20}
                  className="text-text-secondary dark:text-text-secondary hover:text-accent"
                />
              </a>
            </li>
            <li>
              <a
                href={data.contact.twitter.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={data.contact.twitter.name}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-border-primary dark:border-border-primary hover:border-accent hover:bg-bg-secondary dark:hover:bg-bg-secondary transition-colors duration-200"
              >
                <AiOutlineTwitter
                  size={20}
                  className="text-text-secondary dark:text-text-secondary hover:text-accent"
                />
              </a>
            </li>
            <li>
              <a
                href={data.contact.medium.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={data.contact.medium.name}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-border-primary dark:border-border-primary hover:border-accent hover:bg-bg-secondary dark:hover:bg-bg-secondary transition-colors duration-200"
              >
                <FaMedium
                  size={20}
                  className="text-text-secondary dark:text-text-secondary hover:text-accent"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
