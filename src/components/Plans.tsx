import { motion } from "framer-motion";

export default function Plans() {
  const plans = [
    {
      name: "Essencial",
      price: "R$ 800 – 1.500",
      features: ["Landing page", "Layout profissional", "Entrega rápida"],
    },
    {
      name: "Profissional",
      price: "R$ 2.000 – 4.000",
      features: ["Sistema completo", "Autenticação", "Dashboard"],
    },
    {
      name: "Premium",
      price: "Sob consulta",
      features: [
        "SaaS completo",
        "API + painel administrativo",
        "Escalabilidade",
      ],
    },
  ];

  return (
    <section id="planos" className="max-w-6xl mx-auto py-20 px-4">
      <motion.h3
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Planos
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
              {plan.price}
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              {plan.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
