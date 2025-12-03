import { motion } from "framer-motion";

export default function Projects() {
  const card = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };
  return (
    <>
      <section id="projetos" className="max-w-6xl mx-auto py-20 px-4">
        <motion.h3
          className="text-2xl font-bold mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Projetos
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.article
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm"
            variants={card}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.35 }}
          >
            <h4 className="text-xl font-semibold mb-3">Dashboard de Saúde</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
              Interface completa com gráficos, tabelas e relatórios para
              monitoramento de indicadores de saúde.
            </p>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
              <li>✔ React + Tailwind</li>
              <li>✔ Layout profissional e responsivo</li>
              <li>✔ Integração direta com API de dados</li>
            </ul>
          </motion.article>

          <motion.article
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm"
            variants={card}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-3">API de Medicamentos</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
              Backend completo para gestão de medicamentos, histórico e
              automação de monitoramento.
            </p>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
              <li>✔ Node.js + NestJS</li>
              <li>✔ Autenticação JWT + RBAC</li>
              <li>✔ Prisma + PostgreSQL</li>
            </ul>
          </motion.article>

          <motion.article
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm"
            variants={card}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.45 }}
          >
            <h4 className="text-xl font-semibold mb-3">Gerador de SaaS</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
              Sistema que cruza dados de necessidades e soluções para gerar
              ideias de SaaS automaticamente.
            </p>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
              <li>✔ Full Stack com Next.js</li>
              <li>✔ Integração com IA</li>
              <li>✔ Pipeline: ideia → validação → protótipo</li>
            </ul>
          </motion.article>
        </div>
      </section>
    </>
  );
}
