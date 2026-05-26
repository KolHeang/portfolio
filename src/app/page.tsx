"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Floating Header Navigation */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1 w-full" id="top">
        {/* Hero Landing */}
        <Hero />

        {/* Biography & Summary */}
        <About />

        {/* Selected Work / Portfolio Projects */}
        <Projects />

        {/* Capability / Tech Stack Grid */}
        <Skills />

        {/* Timeline / Professional Journey */}
        <Experience />

        {/* Interactive Contact Form */}
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </>
  );
}
