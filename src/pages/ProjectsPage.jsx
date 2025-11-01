import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import ElevatedButton from "../components/ElevatedButton";
import OutlinedButton from "../components/OutlinedButton";
import { data } from "../data";

export default function ProjectsPage() {
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
              My <span className="text-accent">Projects</span>
            </h1>
            <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary">
              A collection of projects showcasing my skills and experience in
              software development.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid - Masonry/Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`h-full flex flex-col bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary rounded-lg p-6 hover:border-accent transition-all duration-300 ${
                index % 3 === 0 ? "md:row-span-1" : ""
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-accent">
                {project.title}
              </h3>
              <p className="text-base text-text-secondary dark:text-text-secondary mb-4 flex-grow">
                {project.desc}
              </p>
              <div className="mb-4 space-y-2">
                <p className="text-sm text-text-secondary dark:text-text-secondary">
                  <span className="font-semibold text-text-primary dark:text-text-primary">
                    Tech Stack:
                  </span>{" "}
                  {project.stack}
                </p>
                <p className="text-sm text-text-secondary dark:text-text-secondary capitalize">
                  <span className="font-semibold text-text-primary dark:text-text-primary">
                    Type:
                  </span>{" "}
                  {project.type}
                </p>
              </div>
              <div className="flex flex-col gap-3 mt-auto">
                <OutlinedButton link={project.git}>
                  <AiFillGithub className="mr-2" size={18} />
                  View Source
                </OutlinedButton>
                {project.link && (
                  <ElevatedButton link={project.link}>
                    <HiOutlineExternalLink className="mr-2" size={18} />
                    {project.isDocumentation
                      ? "View Documentation"
                      : "View Project"}
                  </ElevatedButton>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
