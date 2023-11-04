import React from "react";
import { Routes, useLocation, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Service from "../Pages/Service";

export default function AnimateRoute() {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>
      </Routes>
    </div>
  );
}
