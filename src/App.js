import { motion } from "framer-motion";
import img from "../src/assests/images/hero-img.jpg";
function App() {
  return (
    <div className="app">
      <div className="hero-text">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <h1>I'm Vedant Otari</h1>
        </motion.div>
        <h6>CSE Engineer</h6>
      </div>
      <div>
        <img src={img} alt="Hero" />
      </div>
    </div>
  );
}

export default App;
