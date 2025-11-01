import { AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import PageTransition, { getPageIndex } from "./components/PageTransition";
import AboutPage from "./pages/AboutPage";
import AchievementsPage from "./pages/AchievementsPage";
import ContactPage from "./pages/ContactPage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

function AppRoutes() {
  const location = useLocation();
  const prevLocationRef = useRef(location.pathname);

  // Calculate direction based on page order
  const getDirection = () => {
    const currentIndex = getPageIndex(location.pathname);
    const prevIndex = getPageIndex(prevLocationRef.current);

    // If moving forward in the navbar order (to the right), slide from right to left
    // If moving backward in the navbar order (to the left), slide from left to right
    if (currentIndex === prevIndex) {
      return "forward"; // Default direction for first load or same page
    }
    return currentIndex > prevIndex ? "forward" : "backward";
  };

  const direction = getDirection();

  // Update previous location after calculating direction
  useEffect(() => {
    prevLocationRef.current = location.pathname;
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition direction={direction}>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition direction={direction}>
                  <AboutPage />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition direction={direction}>
                  <ProjectsPage />
                </PageTransition>
              }
            />
            <Route
              path="/experience"
              element={
                <PageTransition direction={direction}>
                  <ExperiencePage />
                </PageTransition>
              }
            />
            <Route
              path="/education"
              element={
                <PageTransition direction={direction}>
                  <EducationPage />
                </PageTransition>
              }
            />
            <Route
              path="/skills"
              element={
                <PageTransition direction={direction}>
                  <SkillsPage />
                </PageTransition>
              }
            />
            <Route
              path="/achievements"
              element={
                <PageTransition direction={direction}>
                  <AchievementsPage />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition direction={direction}>
                  <ContactPage />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
