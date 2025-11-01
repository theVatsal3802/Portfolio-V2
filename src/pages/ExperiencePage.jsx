import { motion } from "framer-motion";
import ExperienceBox from "../components/ExperienceBox";
import { data } from "../data";

export default function ExperiencePage() {
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
              Work <span className="text-accent">Experience</span>
            </h1>
            <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary">
              My professional journey and the experiences that shaped my career.
            </p>
          </motion.div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {data.experience.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-8 ${
                index !== data.experience.length - 1
                  ? "pb-8 border-b border-border-primary dark:border-border-primary"
                  : ""
              }`}
            >
              <ExperienceBox
                title={position.name}
                position={position.position}
                desc={position.desc}
                certificate={position.certificate ?? null}
                duration={position.duration}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
