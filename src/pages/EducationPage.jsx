import { motion } from "framer-motion";
import EducationBlock from "../components/EducationBlock";
import { data } from "../data";

export default function EducationPage() {
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
              <span className="text-accent">Education</span>
            </h1>
            <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary">
              My academic journey and educational achievements.
            </p>
          </motion.div>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {data.education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EducationBlock education={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
