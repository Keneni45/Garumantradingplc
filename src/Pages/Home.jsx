import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="home"
      style={{ backgroundImage: "" }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      hello we are from home
    </motion.div>
  );
}
