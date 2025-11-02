import { motion } from "framer-motion";
import { data } from "../data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-primary dark:bg-bg-primary pt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-24">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <img
              src={data.profilePic}
              alt={data.name}
              className="w-full max-w-md mx-auto lg:max-w-lg rounded-lg border-2 border-border-primary dark:border-border-primary object-cover"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary dark:text-text-primary">
              About <span className="text-accent">Me</span>
            </h1>
            <div className="bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary rounded-lg p-6 md:p-8 lg:p-10">
              <p className="text-base md:text-lg lg:text-xl text-text-secondary dark:text-text-secondary leading-relaxed mb-6">
                {data.abstract.first.text}
              </p>
              <div className="space-y-4 pt-6 border-t border-border-primary dark:border-border-primary">
                <div>
                  <p className="text-sm font-semibold text-text-primary dark:text-text-primary mb-1">
                    Date of Birth
                  </p>
                  <p className="text-base text-text-secondary dark:text-text-secondary">
                    {data.abstract.first.children.dob}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary dark:text-text-primary mb-1">
                    Location
                  </p>
                  <p className="text-base text-text-secondary dark:text-text-secondary">
                    {data.abstract.first.children.location}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary dark:text-text-primary mb-1">
                    Current Education
                  </p>
                  <p className="text-base text-text-secondary dark:text-text-secondary">
                    {data.abstract.first.children.education}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
