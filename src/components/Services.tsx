import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="servicos" className="bg-gray-100 dark:bg-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Serviços
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Landing Pages Profissionais",
              desc: `Páginas modernas, rápidas e feitas para converter. 
              Foco total em leads, vendas e resultados.`,
            },
            {
              title: "APIs e Backends",
              desc: "APIs robustas, seguras e preparadas para escalar. Arquitetura estável para integrações rápidas e operações confiáveis.",
            },
            {
              title: "Dashboards e Sistemas",
              desc: `Sistemas completos com autenticação, relatórios e automações.
              Performance, controle e eficiência para o seu negócio.`,
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h4 className="text-xl font-semibold mb-3">{s.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
