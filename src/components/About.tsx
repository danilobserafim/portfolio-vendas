import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="max-w-5xl mx-auto py-20 px-4 ">
      <motion.h3
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Sobre mim
      </motion.h3>
      <motion.p
        className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg max-w-3xl m-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Sou um desenvolvedor full stack freelance especializado em criar
        aplicações modernas e personalizadas para empresas e empreendedores. Meu
        foco é entregar soluções de alto impacto, combinando engenharia sólida,
        design funcional e performance.
      </motion.p>
    </section>
  );
}
