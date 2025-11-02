import { motion } from "framer-motion";
import { data } from "../data";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-bg-primary dark:bg-bg-primary pt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-24">
        {/* Split Screen Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-text-primary dark:text-text-primary">
              Skills & <span className="text-accent">Technologies</span>
            </h1>
            <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary">
              Technologies and tools I work with to build amazing solutions.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(data.skills).map(([key, value], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="flex flex-col bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary rounded-lg p-6"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-text-primary dark:text-text-primary">
                {value.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {value.skills.map((item, index) => {
                  // Make Tailwind CSS and Spring Boot icons smaller
                  const isLargeIcon =
                    item.name === "Tailwind CSS" || item.name === "Spring Boot";
                  const iconSize = isLargeIcon
                    ? "w-8 h-8 md:w-10 md:h-10"
                    : "w-10 h-10 md:w-12 md:h-12";

                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 border border-border-primary dark:border-border-primary rounded-lg p-3 hover:border-accent transition-colors duration-200 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
                    >
                      <div className="mb-2">
                        <img
                          src={item.link}
                          alt={item.name}
                          className={`${iconSize} object-contain`}
                        />
                      </div>
                      <p className="text-xs md:text-sm text-text-secondary dark:text-text-secondary text-center font-medium">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
