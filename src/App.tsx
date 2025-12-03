// NOVA VERSÃO COMPLETA — PORTFÓLIO FREELANCER
// Tema definido automaticamente via prefers-color-scheme
// Sem toggle de tema
// Inclui: Serviços, CTA, Planos, Prova Social

import { type JSX } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Services from "./components/Services";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="pt-24">
        <Hero />
        <About />
        <Services />
        <Plans />
        {/* <Projects />
        <Testimonials /> */}
        <CTA />
        <Contact />
      </main>
    </div>
  );
}
