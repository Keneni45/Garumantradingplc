import React from "react";
import { motion } from "framer-motion";
import coffee from "../assets/coffeeCup.jpg";

export default function Service() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <div>
        <img
          src={coffee}
          alt=""
          style={{
            width: "200px",
            height: "200px",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "600px",
          }}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi itaque
          officiis quisquam officia, dolorem necessitatibus perspiciatis iusto
          deserunt delectus cupiditate. Obcaecati odit doloribus molestias
          voluptates, perferendis sed non similique in.
        </p>
      </div>
    </motion.div>
  );
}
