import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h3
          className="text-2xl font-bold mb-8"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Prova social
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.blockquote
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-gray-700 dark:text-gray-200">
              “O Danilo entregou o projeto antes do prazo, com ótima qualidade e
              atenção aos detalhes.”
            </p>
            <cite className="block mt-4 text-sm text-gray-500">
              — Cliente A, CEO
            </cite>
          </motion.blockquote>
          <motion.blockquote
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-gray-700 dark:text-gray-200">
              “Comunicação clara e excelente código. O dashboard virou peça
              chave.”
            </p>
            <cite className="block mt-4 text-sm text-gray-500">
              — Cliente B, Head de Produto
            </cite>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
