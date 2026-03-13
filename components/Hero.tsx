"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-40 text-center bg-[#5ce90f] text-white">
      <div className="container">
        <h1 className="display-3 fw-bold">
          <span
            style={{
              background: "linear-gradient(90deg, #F4A63F, #F2C94C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            TechStrota
          </span>
          <br />
          Enterprise Software & SaaS Solutions
        </h1>

        <p className="lead text-secondary mt-4">
          Web, Mobile & SaaS Development Company in India serving global
          clients.
        </p>

        <div className="mt-5">
          <a
            href="/contact"
            className="btn btn-lg px-4"
            style={{ backgroundColor: "#F4A63F", color: "white" }}
          >
            Get Free Consultation
          </a>

          <a
            href="/portfolio"
            className="btn btn-outline-light btn-lg px-4 ms-3"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
