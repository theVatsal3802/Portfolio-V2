import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { data } from "../data";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg-primary dark:bg-bg-primary pt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-24">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary dark:text-text-primary">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary mb-8">
              Feel free to reach out for collaborations, opportunities, or just
              to say hello!
            </p>

            <div className="bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary rounded-lg p-6 md:p-8 space-y-6">
              <div>
                <p className="text-sm font-semibold text-text-primary dark:text-text-primary mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${data.email}`}
                  className="text-base md:text-lg font-medium text-text-secondary dark:text-text-secondary transition-colors duration-200 hover:text-text-primary dark:hover:text-text-primary"
                >
                  {data.email}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary dark:text-text-primary mb-2">
                  {data.phone}
                </p>
                <a
                  href={`tel:${data.countryCode}${data.mobile}`}
                  className="text-base md:text-lg font-medium text-text-secondary dark:text-text-secondary transition-colors duration-200 hover:text-text-primary dark:hover:text-text-primary"
                >
                  {data.countryCode} {data.mobile}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary rounded-lg p-8 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary dark:text-text-primary">
                Connect with me
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={data.contact.linkedin.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 border border-border-primary dark:border-border-primary rounded-lg hover:border-accent hover:bg-bg-primary dark:hover:bg-bg-primary transition-all duration-200"
                >
                  <FaLinkedin size={32} className="text-accent mb-2" />
                  <span className="text-sm font-medium text-text-primary dark:text-text-primary">
                    LinkedIn
                  </span>
                </a>
                <a
                  href={data.contact.github.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 border border-border-primary dark:border-border-primary rounded-lg hover:border-accent hover:bg-bg-primary dark:hover:bg-bg-primary transition-all duration-200"
                >
                  <AiFillGithub size={32} className="text-accent mb-2" />
                  <span className="text-sm font-medium text-text-primary dark:text-text-primary">
                    GitHub
                  </span>
                </a>
                <a
                  href={data.contact.twitter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 border border-border-primary dark:border-border-primary rounded-lg hover:border-accent hover:bg-bg-primary dark:hover:bg-bg-primary transition-all duration-200"
                >
                  <AiOutlineTwitter size={32} className="text-accent mb-2" />
                  <span className="text-sm font-medium text-text-primary dark:text-text-primary">
                    Twitter
                  </span>
                </a>
                <a
                  href={data.contact.medium.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 border border-border-primary dark:border-border-primary rounded-lg hover:border-accent hover:bg-bg-primary dark:hover:bg-bg-primary transition-all duration-200"
                >
                  <FaMedium size={32} className="text-accent mb-2" />
                  <span className="text-sm font-medium text-text-primary dark:text-text-primary">
                    Medium
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center pt-8 border-t border-border-primary dark:border-border-primary"
        >
          <p className="text-sm md:text-base text-text-secondary dark:text-text-secondary">
            © {data.year} | {data.name}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
