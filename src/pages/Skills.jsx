import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { data } from "../data";

export default function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section id="skills" className="py-12 md:py-16 lg:py-24">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 lg:mb-16 text-center text-text-primary dark:text-text-primary">
        Skills and <span className="text-accent">Technologies</span>
      </h2>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {Object.entries(data.skills).map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col items-center bg-bg-secondary dark:bg-bg-secondary border border-border-primary dark:border-border-primary rounded-lg p-6"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-text-primary dark:text-text-primary">
              {value.name}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {value.skills.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: (index) => ({
                      opacity: 0,
                      y: index % 2 === 0 ? -20 : 20,
                    }),
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: index * 0.05 },
                    },
                  }}
                  className="flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-bg-primary dark:bg-bg-primary border border-border-primary dark:border-border-primary rounded-lg p-3 hover:border-accent transition-colors duration-200"
                >
                  <div className="mb-2">
                    <img
                      src={item.link}
                      alt={item.name}
                      className="w-12 h-12 md:w-14 md:h-14 object-contain"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-text-secondary dark:text-text-secondary text-center font-medium">
                    {item.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
