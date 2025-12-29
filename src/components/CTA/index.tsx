import { motion } from 'framer-motion';
import { useState } from 'react';
import { CtaModal } from './CtaModal';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="cta" className="py-20 px-4">
      <div className="max-w-4xl mx-auto bg-linear-to-l from-blue-500 to-indigo-600 text-white rounded-xl p-10 text-center">
        <motion.h3
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Pronto para começar?
        </motion.h3>
        <p className="mb-6">
          <b>Solicite um orçamento</b>
          <br />
          respondo em até 24h com uma proposta detalhada.
        </p>
        <button
          className="inline-block px-6 py-3 bg-white text-blue-600 rounded-md  cursor-pointer font-light hover:font-bold transition-all "
          onClick={() => setIsModalOpen(true)}
        >
          Solicitar orçamento agora!
        </button>
      </div>
      <CtaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
