import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/bg.jpg";
import "./page.css";

export default function Home() {
  return (
    <motion.div
      className="home"
      style={{ backgroundImage: `url(${bg})` }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <div className="home-p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
        voluptas eligendi ab assumenda dolores, dicta molestiae nostrum
        praesentium perspiciatis, corrupti voluptates illum esse, molestias
        deleniti aspernatur sed rem eaque soluta?hhh
      </div>
    </motion.div>
  );
}
