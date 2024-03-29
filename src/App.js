import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [preloader, setPreloader] = useState(false);
  const [istouch, setIstouch] = useState(false);

  useEffect(() => {
    console.log("%cThis is Portfolio Website of 'Vedant Otari.'","font-size: 20px;font-weight:800;","\n\nFind me on:\n\nLinkedIn: https://www.linkedin.com/in/vedant-otari/\n\nGithub: https://github.com/Vedant-Otari\n\nLeetCode: https://leetcode.com/Vedant_Otari/\n\nMail me at: vedantmotari24@gmail.com");

    setIstouch(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
    );

    const timeoutId = setTimeout(() => {
      setPreloader(false);
    }, 4800);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {!istouch && (
        <AnimatedCursor
          innerSize={14}
          outerSize={25}
          color="92, 131, 156"
          trailingSpeed={4}
          outerAlpha={0.3}
          innerScale={0.7}
          // showSystemCursor={true}
          outerScale={2}
        />
      )}
      <AnimatePresence mode="wait">
        {preloader ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-screen w-screen mx-auto pb-32 px-10 flex flex-col sm:flex-row overflow-hidden justify-center sm:items-center bg-secondary text-white text-2xl"
          >
            <span>Greetings.&nbsp;</span>
            <motion.span
              initial={{ opacity: 0, x: "80%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.1, duration: 2, ease: "easeOut" }}
            >
              Welcome to my Portfolio.
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects istouch={istouch}/>
            </main>
            <footer>
              <Contact />
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
