import { motion } from "framer-motion";

// Define page order based on navbar position
const pageOrder = [
  "/",
  "/about",
  "/education",
  "/experience",
  "/projects",
  "/skills",
  "/achievements",
  "/contact",
];

const getPageIndex = (pathname) => {
  const index = pageOrder.indexOf(pathname);
  return index !== -1 ? index : 0;
};

const getPageVariants = (direction) => {
  if (direction === "forward") {
    // Moving to the right (next page) - slide from right to left
    return {
      initial: {
        opacity: 0,
        x: "100%",
      },
      animate: {
        opacity: 1,
        x: 0,
      },
      exit: {
        opacity: 0,
        x: "-100%",
      },
    };
  } else {
    // Moving to the left (previous page) - slide from left to right
    return {
      initial: {
        opacity: 0,
        x: "-100%",
      },
      animate: {
        opacity: 1,
        x: 0,
      },
      exit: {
        opacity: 0,
        x: "100%",
      },
    };
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export default function PageTransition({ children, direction = "forward" }) {
  const variants = getPageVariants(direction);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={pageTransition}
      style={{
        position: "relative",
        width: "100%",
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

export { getPageIndex };
