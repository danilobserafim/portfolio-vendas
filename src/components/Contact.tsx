import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-gray-900 dark:bg-gray-800 text-gray-100 py-20 px-4 text-center"
    >
      <motion.h3
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contato
      </motion.h3>
      <motion.p
        className="text-gray-300 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Envie uma mensagem descrevendo seu projeto — retorno em até 24h.
      </motion.p>
      <motion.p className="text-lg font-medium flex justify-center gap-2 items-center">
        <img style={{ maxWidth: "24px" }} src="email.png" />
        danilob.serafim@gmail.com
      </motion.p>
      <motion.p className="text-lg font-medium flex justify-center gap-2 items-center">
        <img style={{ maxWidth: "24px" }} src="whatsapp.png" />
        (81)9 9768-6925
      </motion.p>
      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Danilo Barbosa — Desenvolvimento freelance
      </footer>
    </section>
  );
}
