import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import ElevatedButton from "../components/ElevatedButton";
import OutlinedButton from "../components/OutlinedButton";
import { data } from "../data";

export default function Projects() {
  return (
    <section className="py-12 md:py-16 lg:py-24" id="projects">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 lg:mb-16 text-center text-text-primary dark:text-text-primary">
        <span className="text-accent">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {data.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full flex flex-col bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary rounded-lg p-6 hover:border-accent transition-colors duration-200"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">
              {project.title}
            </h3>
            <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary mb-4 flex-grow">
              {project.desc}
            </p>
            <div className="mb-4">
              <p className="text-sm md:text-base text-text-secondary dark:text-text-secondary font-medium mb-2">
                <span className="font-semibold text-text-primary dark:text-text-primary">
                  Tech Stack:
                </span>{" "}
                {project.stack}
              </p>
              <p className="text-sm md:text-base text-text-secondary dark:text-text-secondary capitalize">
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
    </section>
  );
}
