import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { data } from "../data";

const BentoCell = ({
  children,
  className = "",
  span = "",
  link,
  delay = 0,
}) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary rounded-lg p-6 md:p-8 hover:border-accent transition-all duration-300 hover:shadow-lg h-full ${className}`}
    >
      {children}
    </motion.div>
  );

  if (link) {
    return (
      <Link to={link} className={`${span} block h-full`}>
        {content}
      </Link>
    );
  }

  return <div className={span}>{content}</div>;
};

export default function Home() {
  const projectsPreview = data.projects.slice(0, 3);
  const skillsPreview = Object.entries(data.skills).slice(0, 3);

  return (
    <div className="min-h-screen bg-bg-primary dark:bg-bg-primary pt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-24">
        {/* Hero Section in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Hero - Large Cell */}
          <BentoCell
            span="md:col-span-2 lg:col-span-2"
            className="md:min-h-[400px]"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 h-full">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={data.profilePic}
                alt={data.name}
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-2 border-accent object-cover flex-shrink-0"
              />
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-text-primary dark:text-text-primary">
                  Hi, I am <span className="text-accent">{data.name}</span>
                </h1>
                <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary leading-relaxed mb-6">
                  {data.tagLine}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-200"
                  >
                    Contact Me
                    <AiOutlineArrowRight className="ml-2" />
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center px-6 py-3 border border-border-primary dark:border-border-primary rounded-lg font-medium hover:bg-bg-secondary dark:hover:bg-bg-secondary transition-colors duration-200 text-text-primary dark:text-text-primary"
                  >
                    View Projects
                    <AiOutlineArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </BentoCell>

          {/* About Preview */}
          <BentoCell
            span="md:col-span-1 lg:col-span-1"
            link="/about"
            delay={0.1}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-accent">
                  About
                </h2>
                <p className="text-sm md:text-base text-text-secondary dark:text-text-secondary line-clamp-4">
                  {data.abstract.first.text.substring(0, 150)}...
                </p>
              </div>
              <div className="mt-4 flex items-center text-accent font-medium">
                Read more <AiOutlineArrowRight className="ml-2" />
              </div>
            </div>
          </BentoCell>

          {/* Quick Stats / Info */}
          <BentoCell span="md:col-span-1 lg:col-span-1" delay={0.2}>
            <div className="h-full flex flex-col justify-between">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary dark:text-text-primary">
                Quick Info
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-xs md:text-sm text-text-secondary dark:text-text-secondary">
                    Education
                  </p>
                  <p className="text-sm md:text-base font-semibold text-text-primary dark:text-text-primary">
                    {data.education[0].college}
                  </p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-text-secondary dark:text-text-secondary">
                    Experience
                  </p>
                  <p className="text-sm md:text-base font-semibold text-text-primary dark:text-text-primary">
                    {data.experience.length} Positions
                  </p>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-text-secondary dark:text-text-secondary">
                    Projects
                  </p>
                  <p className="text-sm md:text-base font-semibold text-text-primary dark:text-text-primary">
                    {data.projects.length}+ Projects
                  </p>
                </div>
              </div>
            </div>
          </BentoCell>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Projects Preview */}
          <BentoCell
            span="md:col-span-2 lg:col-span-2"
            link="/projects"
            delay={0.3}
          >
            <div className="h-full flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">
                Featured Projects
              </h2>
              <div className="space-y-4 flex-1">
                {projectsPreview.map((project, index) => (
                  <div key={index} className="border-l-4 border-accent pl-4">
                    <h3 className="text-base md:text-lg font-semibold text-text-primary dark:text-text-primary mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary dark:text-text-secondary line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center text-accent font-medium">
                View all projects <AiOutlineArrowRight className="ml-2" />
              </div>
            </div>
          </BentoCell>

          {/* Skills Preview */}
          <BentoCell
            span="md:col-span-1 lg:col-span-1"
            link="/skills"
            delay={0.4}
          >
            <div className="h-full flex flex-col justify-between">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">
                Skills
              </h2>
              <div className="space-y-3 flex-1">
                {skillsPreview.map(([key, value], index) => (
                  <div key={index}>
                    <p className="text-sm font-semibold text-text-primary dark:text-text-primary">
                      {value.name}
                    </p>
                    <p className="text-xs text-text-secondary dark:text-text-secondary">
                      {value.skills.length} technologies
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center text-accent font-medium">
                Explore skills <AiOutlineArrowRight className="ml-2" />
              </div>
            </div>
          </BentoCell>

          {/* Experience Preview */}
          <BentoCell
            span="md:col-span-1 lg:col-span-1"
            link="/experience"
            delay={0.5}
          >
            <div className="h-full flex flex-col justify-between">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">
                Experience
              </h2>
              <div className="space-y-3">
                {data.experience.slice(0, 2).map((exp, index) => (
                  <div key={index}>
                    <p className="text-sm font-semibold text-text-primary dark:text-text-primary">
                      {exp.name}
                    </p>
                    <p className="text-xs text-text-secondary dark:text-text-secondary">
                      {exp.position}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center text-accent font-medium">
                View experience <AiOutlineArrowRight className="ml-2" />
              </div>
            </div>
          </BentoCell>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Achievements */}
          <BentoCell
            span="md:col-span-1 lg:col-span-2"
            link="/achievements"
            delay={0.6}
          >
            <div className="h-full flex flex-col justify-between">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">
                Achievements
              </h2>
              <div className="space-y-3">
                {data.achievement.slice(0, 2).map((achievement, index) => (
                  <p
                    key={index}
                    className="text-sm md:text-base text-text-secondary dark:text-text-secondary line-clamp-2"
                  >
                    {achievement.title}
                  </p>
                ))}
              </div>
              <div className="mt-4 flex items-center text-accent font-medium">
                See all achievements <AiOutlineArrowRight className="ml-2" />
              </div>
            </div>
          </BentoCell>

          {/* Education Preview */}
          <BentoCell
            span="md:col-span-1 lg:col-span-1"
            link="/education"
            delay={0.7}
          >
            <div className="h-full flex flex-col justify-between">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">
                Education
              </h2>
              <div className="space-y-3">
                {data.education.slice(0, 2).map((edu, index) => (
                  <div key={index}>
                    <p className="text-sm font-semibold text-text-primary dark:text-text-primary">
                      {edu.college}
                    </p>
                    <p className="text-xs text-text-secondary dark:text-text-secondary">
                      {edu.level}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center text-accent font-medium">
                View education <AiOutlineArrowRight className="ml-2" />
              </div>
            </div>
          </BentoCell>

          {/* Contact CTA */}
          <BentoCell
            span="md:col-span-1 lg:col-span-1"
            link="/contact"
            delay={0.8}
          >
            <div className="h-full flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">
                Get in Touch
              </h2>
              <p className="text-sm md:text-base text-text-secondary dark:text-text-secondary mb-6">
                Let's work together
              </p>
              <div className="flex items-center text-accent font-medium">
                Contact me <AiOutlineArrowRight className="ml-2" />
              </div>
            </div>
          </BentoCell>
        </div>
      </div>
    </div>
  );
}
