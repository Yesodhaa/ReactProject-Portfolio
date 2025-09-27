
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Project from "./pages/Project";

export default function App() {
  return (
    <div>
      <Navbar />
      {/* leave space for fixed navbar */}
      <div style={{ paddingTop: "4rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/work"
            element={<Work />}
          />
          <Route
            path="/education"
            element={<div className="placeholder-section">Education (placeholder)</div>}
          />
          <Route
            path="/projects"
            element={<Project />}
          />
          <Route
            path="/certifications"
            element={<div className="placeholder-section">Certifications (placeholder)</div>}
          />
          <Route
            path="/skills"
            element={<div className="placeholder-section">Skills (placeholder)</div>}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

