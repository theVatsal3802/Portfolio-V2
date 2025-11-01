import { motion } from "framer-motion";
import ElevatedButton from "../components/ElevatedButton";
import OutlinedButton from "../components/OutlinedButton";
import { data } from "../data";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary dark:bg-bg-primary pt-20">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-32">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img
              src={data.profilePic}
              alt={data.name}
              className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full border-2 border-border-primary dark:border-border-primary object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-text-primary dark:text-text-primary">
              Hi, I am <br /> {data.name.split(" ")[0]}
              <span className="text-accent">{` ${
                data.name.split(" ")[1]
              }`}</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-text-secondary dark:text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8 px-4">
              {data.tagLine}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ElevatedButton
                link={data.buttons.heroContactMeButton.path}
                isNotBlank={true}
              >
                {data.buttons.heroContactMeButton.title}
              </ElevatedButton>
              <OutlinedButton
                link={data.buttons.heroViewProjectsButton.path}
                isNotBlank={true}
              >
                {data.buttons.heroViewProjectsButton.title}
              </OutlinedButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
