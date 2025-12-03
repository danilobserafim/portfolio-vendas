import { motion } from "framer-motion";

export function CtaModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.25 }}
        className="bg-white dark:bg-gray-900 w-full max-w-lg p-8 rounded-xl shadow-xl relative"
      >
        <h3 className="text-2xl font-bold mb-6">Solicitar orçamento</h3>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Nome</label>
            <input
              type="text"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 outline-none"
              placeholder="Seu nome completo"
              autoFocus
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">E-mail</label>
            <input
              type="email"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 outline-none"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Tipo de projeto</label>
            <select className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 outline-none">
              <option value={"Landing Page"}>Landing Page</option>
              <option>Website completo</option>
              <option>Aplicação Web</option>
              <option>API Backend</option>
              <option>Dashboard / Painel</option>
              <option>SaaS completo</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Descrição</label>
            <textarea
              className="w-full p-3 h-32 rounded-md bg-gray-100 dark:bg-gray-800 outline-none resize-none"
              placeholder="Descreva o que você precisa..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-linear-to-bl from-blue-500 to-indigo-600 text-white rounded-md font-medium hover:from-indigo-600 hover:to-blue-500 hover:bg-linear-to-tl transition cursor-pointer"
          >
            Enviar pedido
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl cursor-pointer"
        >
          ✕
        </button>
      </motion.div>
    </div>
  );
}
