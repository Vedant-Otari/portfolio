import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
// import Preloader from "./components/Preloader";

function App() {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPreloader(false);
    },3000);

    // Clear the timeout to prevent the state update if the component is unmounted before the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {preloader ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 1.7,ease:'easeInOut' }}
          className="h-screen w-screen pb-32 flex justify-center items-center bg-gray-700 text-white text-2xl"
        >
          Welcome all...
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1}}
          className="relative"
        >
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
          </main>
          <footer>
            <Contact />
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
